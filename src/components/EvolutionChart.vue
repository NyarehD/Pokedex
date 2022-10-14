<template>
  <div class="mt-3">
    <h2 class="text-3xl font-semibold dark:text-neutral-200 text-center mb-6">
      Evolution Chain
    </h2>
    <div class="md:grid grid-cols-3 gap-4">
      <div
        class="mb-2 md:mb-0 flex flex-col justify-center bg-white rounded-md">
        <img
          :src="`https://img.pokemondb.net/artwork/large/${evolutionChain.chain?.species.name}.jpg`"
          :alt="evolutionChain.chain?.species.name"
          class="evolution-img" />
      </div>
      <div
        class="md:col-span-2 grid md:grid-cols-1 gap-2"
        v-if="evolutionChain.chain?.evolves_to.length >= 1">
        <div
          class="flex flex-col md:grid md:grid-cols-2 md:gap-3"
          v-for="(second, i) in evolutionChain.chain?.evolves_to"
          :key="`secondEvo${i}`">
          <div class="mb-2 md:mb-0 flex-1 bg-white rounded-md">
            <img
              :src="`https://img.pokemondb.net/artwork/large/${second.species.name}.jpg`"
              :alt="second.species.name"
              class="evolution-img" />
          </div>
          <div class="flex-1" v-if="second.evolves_to.length >= 1">
            <div
              class="bg-white rounded-md"
              v-for="(third, j) in second.evolves_to"
              :key="`thirdEvo${j}`">
              <img
                :src="`https://img.pokemondb.net/artwork/large/${third.species.name}.jpg`"
                :alt="second.species.name"
                class="evolution-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from "vue";

  defineProps({
    evolutionChain: Object,
  });
</script>

<style lang="scss">
  .evolution-img {
    height: 14rem;
    width: 100%;
    object-fit: contain;
  }
</style>