<template>
  <div class="row">
    <h1 class="text-center my-3 text-capitalize">{{ currentPokemon.name }}</h1>
    <div class="col-md-6">
      <img :src="`https://img.pokemondb.net/artwork/large/${currentPokemon.name}.jpg`" class="card-img-top w-100"
           :alt="`Image of ${currentPokemon.name}`" loading="lazy">
    </div>
    <div class="col-md-6">
      <h2>PokeDex Data</h2>
      <table class="table w-100">
        <tbody>
        <tr>
          <th>No.</th>
          <th style="font-weight: normal">{{ currentPokemon.order }}</th>
        </tr>
        <tr>
          <th>Type</th>
          <th style="font-weight: normal">
            <TypeIcon v-for="(type,i) in pokemonTypes" :key="i" :type="type.type"></TypeIcon>
          </th>
        </tr>
        <tr>
          <th>Height</th>
          <th>{{currentPokemon.height}} m</th>
        </tr>
        <tr>
          <th>Weight</th>
          <th>{{currentPokemon.weight}} kg</th>
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

const pokemonTypes = computed(() => {
  return currentPokemon.value.types;
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

.type-icon {
  width: 66px;
  display: inline-block;
  border: none;
}

.type-grass {
  background-color: #77cc55;
}
</style>