<template>
  <h2 class="mb-2">Evolution Chain</h2>
  <div class="d-flex flex-row evolution">
    <div class="flex-grow-0">
      <img :src="`https://img.pokemondb.net/artwork/large/${evolutionChain.chain?.species.name}.jpg`" alt=""
           class="w-100 evolution-img">
    </div>
    <div class="flex-grow-1" v-if="evolutionChain.chain?.evolves_to.length>=1">
      <div class="row" v-for="(second,i) in evolutionChain.chain?.evolves_to" :key="`secondEvo${i}`">
        <img :src="`https://img.pokemondb.net/artwork/large/${second.species.name}.jpg`" alt=""
             class="evolution-img col-6">
        <div class="col-6" v-if="second.evolves_to.length>=1">
          <div class="" v-for="(third,j) in second.evolves_to" :key="`thirdEvo${j}`">
            <img :src="`https://img.pokemondb.net/artwork/large/${third.species.name}.jpg`" alt=""
                 class="w-100 evolution-img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  evolutionChain: Object
})
</script>

<style lang="scss">
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