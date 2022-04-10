<template>
  <div class="row">
    <h1 class="text-center my-3 text-capitalize">{{ currentPokemon.name }}</h1>
    <div class="col-md-6">
      <img :src="`https://img.pokemondb.net/artwork/large/${currentPokemon.name}.jpg`"
           class="card-img-top w-100 pokemon-img"
           :alt="`Image of ${currentPokemon.name}`" loading="lazy">
    </div>
    <div class="col-md-6">
      <h2>PokeDex Data</h2>
      <table class="table w-100">
        <tbody>
        <tr>
          <th>No.</th>
          <th>{{ currentPokemon.order }}</th>
        </tr>
        <tr>
          <th>Type</th>
          <th style="font-weight: normal">
            <TypeIcon v-for="(type,i) in pokemonTypes" :key="i" :type="type.type"></TypeIcon>
          </th>
        </tr>
        <tr>
          <th>Height</th>
          <th>{{ currentPokemon.height / 10 }} m ({{ heightInImperial }})</th>
        </tr>
        <tr>
          <th>Weight</th>
          <th>{{ currentPokemon.weight }} kg ({{ weightInImperial }}lb)</th>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import {computed, onMounted, ref} from "vue";
import axios from "axios";
import TypeIcon from "../components/TypeIcon.vue";

let route = useRoute();
const currentPokemon = ref([]);

async function fetchPokemonApi() {
  let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.pokemon}`);
  return response.data;
}

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

onMounted(async () => {
  currentPokemon.value = await fetchPokemonApi();
})
</script>

<style scoped>
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
</style>