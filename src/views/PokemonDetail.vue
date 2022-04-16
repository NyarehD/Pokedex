<template>
  <div class="row mb-5">
    <h1 class="text-center my-3 text-capitalize">{{ currentPokemon?.name }}</h1>
    <div class="col-md-6">
      <img :src="`https://img.pokemondb.net/artwork/large/${currentPokemon?.name}.jpg`"
        class="card-img-top w-100 pokemon-img" :alt="`Image of ${currentPokemon.name}`" loading="lazy">
    </div>
    <div class="col-md-6">
      <h2>PokeDex Data</h2>
      <table class="table w-100">
        <tbody>
          <tr>
            <th>No.</th>
            <th class="fw-normal">{{ currentPokemon.order }}</th>
          </tr>
          <tr>
            <th>Type</th>
            <th class="fw-normal">
              <TypeIcon v-for="(type, i) in pokemonTypes" :key="i" :type="type.type"></TypeIcon>
            </th>
          </tr>
          <tr>
            <th>Height</th>
            <th class="fw-normal">{{ currentPokemon.height / 10 }} m ({{ heightInImperial }})</th>
          </tr>
          <tr>
            <th>Weight</th>
            <th class="fw-normal">{{ currentPokemon.weight }} kg ({{ weightInImperial }}lb)</th>
          </tr>
          <tr>
            <th>Abilities</th>
            <th class="fw-normal">
              <p v-for="(ability, i) in currentPokemon.abilities" :key="`abilityId${i}`" class="mb-0">
                <a :href="ability.ability.url"
                  class="text-capitalize text-decoration-none link-primary">{{ ability.ability.name }}</a>
                <span class="mx-2 text-secondary" v-if="ability.is_hidden">(Hidden Ability)</span>
              </p>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <EvolutionChart :evolution-chain="evolutionChain"></EvolutionChart>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
import axios from "axios";
import TypeIcon from "../components/TypeIcon.vue";
import EvolutionChart from "../components/EvolutionChart.vue";

let route = useRoute();
const currentPokemon = ref([]);
const evolutionChain = ref([]);

function addZeroAtFront(number) {
  return number < 10 ? `0${number}` : number;
}

// Computed
const pokemonTypes = computed(() => {
  return currentPokemon.value.types;
})

const heightInImperial = computed(() => {
  let inTotalInch = currentPokemon.value.height * 3.9370;
  let inFeet = Math.floor(inTotalInch / 12)
  let inRemainInch = Math.floor(inTotalInch % 12)
  return inFeet === 0 ? `${addZeroAtFront(inRemainInch)}''` : `${inFeet}'${addZeroAtFront(inRemainInch)}''`;
})

const weightInImperial = computed(() => {
  return (currentPokemon.value.weight * 0.22046).toFixed(2);
})
// -------

async function fetchPokemonApi() {
  return (await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.pokemon}`)).data;
}

async function fetchEvolutionChain() {
  let getSpecies = await axios.get(currentPokemon.value.species.url)
  return (await axios.get(getSpecies.data.evolution_chain.url)).data
}

async function created() {
  currentPokemon.value = await fetchPokemonApi();
  evolutionChain.value = await fetchEvolutionChain();
};
created();

</script>

<style lang="scss">
.table-borderless>tbody>tr>td,
.table-borderless>tbody>tr>th,
.table-borderless>tfoot>tr>td,
.table-borderless>tfoot>tr>th,
.table-borderless>thead>tr>td,
.table-borderless>thead>tr>th {
  border: none;
}
</style>