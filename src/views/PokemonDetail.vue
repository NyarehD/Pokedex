<template>
  <div class="row mb-5">
    <h1 class="text-center my-3 text-capitalize">{{ currentPokemon?.name }}</h1>
    <div class="col-md-6">
      <img :src="`https://img.pokemondb.net/artwork/large/${currentPokemon?.name}.jpg`"
           class="card-img-top w-100 pokemon-img"
           :alt="`Image of ${currentPokemon.name}`" loading="lazy">
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
            <TypeIcon v-for="(type,i) in pokemonTypes" :key="i" :type="type.type"></TypeIcon>
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
            <p v-for="(ability,i) in currentPokemon.abilities" :key="`abilityId${i}`" class="mb-0">
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
  <h2 class="mb-2">Evolution Chain</h2>
  <div class="d-flex flex-row evolution">
    <div class="flex-fill">
      <img :src="`https://img.pokemondb.net/artwork/large/${evolutionChain.chain?.species.name}.jpg`" alt=""
           class="w-100 evolution-img">
    </div>
    <div class="">
      <div class="col-1 d-flex">
        <img src="../assets/arrow-right.svg" alt="" class="evolution-icon col-12">
      </div>
      <div class="flex-fill">
        <img :src="`https://img.pokemondb.net/artwork/large/${evolutionChain.chain?.evolves_to[0].species.name}.jpg`"
             alt="" class="w-100 evolution-img">
      </div>
    </div>
    <div class="col-1 d-flex">
      <img src="../assets/arrow-right.svg" alt="" class="evolution-icon">
    </div>
    <div class="flex-fill">
      <img
          :src="`https://img.pokemondb.net/artwork/large/${evolutionChain.chain?.evolves_to[0].evolves_to[0].species.name}.jpg`"
          alt="" class="w-100 evolution-img">
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import {computed, ref} from "vue";
import axios from "axios";
import TypeIcon from "../components/TypeIcon.vue";

let route = useRoute();
const currentPokemon = ref([]);
const evolutionChain = ref([]);

function addZeroAtFront(number) {
  return number < 10 ? `0${number}` : number;
}

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

async function fetchPokemonApi() {
  let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.pokemon}`);
  return response.data;
}

async function fetchEvolutionChain() {
  let getSpecies = await axios.get(currentPokemon.value.species.url)
  let getEvolutionChain = await axios.get(getSpecies.data.evolution_chain.url)
  return getEvolutionChain.data;
}

const created = async () => {
  currentPokemon.value = await fetchPokemonApi();
  evolutionChain.value = await fetchEvolutionChain();
}

created()
</script>

<style lang="scss">
.table-borderless > tbody > tr > td,
.table-borderless > tbody > tr > th,
.table-borderless > tfoot > tr > td,
.table-borderless > tfoot > tr > th,
.table-borderless > thead > tr > td,
.table-borderless > thead > tr > th {
  border: none;
}

.pokemon-img {
  height: 300px;
  object-fit: contain;
}

.evolution {
  img.evolution-img {
    height: 150px;
    object-fit: contain;
  }

  img.evolution-icon {
    width: 4vw;
  }
}
</style>