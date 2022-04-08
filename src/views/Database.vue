<template>
  <div class="row">
    <Card v-for="(pokemon,i) in pokemons" :key="`pokemon${i}`" :pokemon-name="pokemon"></Card>
    <Waypoint class="col-lg-4 col-sm-6 mb-sm-3 mb-2 position-relative" @change="checkWaypoint">
      <div class="flipping-3 position-absolute" style="top: 50%;right:50%">
      </div>
    </Waypoint>
  </div>
</template>

<script setup>
import Card from "../components/Card.vue";
import {Waypoint} from "vue-waypoint";
import axios from "axios";
import {onMounted, ref} from "vue";

let initialLink = "https://pokeapi.co/api/v2/pokemon?limit=10"

const pokemons = ref([])
const nextLink = ref('');

async function fetchPokemonApi(link) {
  let response = await axios.get(link);
  nextLink.value = response.data.next
  pokemons.value.push(...await response.data.results)
}

function checkWaypoint(waypointState) {
  if (waypointState.going === "IN") {
    fetchPokemonApi(nextLink.value)
  }
}

onMounted(() => {
  fetchPokemonApi(initialLink)
})
</script>

<style lang="scss" scoped>
.flipping-3 {
  width: 40px;
  height: 40px;
  transform: perspective(150px) rotateX(0) rotateY(0);
  animation: f3-1 2s infinite linear,
  f3-2 3s infinite linear -.5s;
}

@keyframes f3-1 {
  50% {
    transform: perspective(150px) rotateX(180deg) rotateY(0)
  }
  100% {
    transform: perspective(150px) rotateX(180deg) rotateY(180deg)
  }
}

@keyframes f3-2 {
  0%, 33% {
    background: #337ab7
  }
  33.1%, 66% {
    background: #41B883
  }
  66.1%, 100% {
    background: #34495B
  }
}

.full-loading {
  top: 50%;
  right: 50%;
}
</style>