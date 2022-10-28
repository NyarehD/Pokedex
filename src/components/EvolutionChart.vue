<template>
  <div class="mt-3">
    <h2 class="mb-6 text-center text-3xl font-semibold dark:text-neutral-200">
      Evolution Chain
    </h2>
    <div class="grid-cols-3 gap-4 md:grid">
      <div
        class="hoverScale mb-2 flex flex-col justify-center rounded-md bg-white md:mb-0"
        @click.stop="goToPokemon(evolutionChain.chain?.species.name)">
        <img
          :src="`https://img.pokemondb.net/artwork/large/${evolutionChain.chain?.species.name}.jpg`"
          :alt="evolutionChain.chain?.species.name"
          class="evolution-img"
          :aria-label="evolutionChain.chain?.species.name" />
        <h1 class="text-dark my-2 text-center text-xl font-semibold capitalize">
          {{ evolutionChain.chain?.species.name }}
        </h1>
      </div>
      <div
        class="grid gap-2 md:col-span-2 md:grid-cols-1"
        v-if="evolutionChain.chain?.evolves_to.length >= 1">
        <div
          class="flex flex-col md:grid md:grid-cols-2 md:gap-3"
          v-for="(second, i) in evolutionChain.chain?.evolves_to"
          :key="`secondEvo${i}`">
          <div
            class="hoverScale mb-2 flex-1 rounded-md bg-white md:mb-0"
            @click.stop="goToPokemon(second.species.name)">
            <img
              :src="`https://img.pokemondb.net/artwork/large/${second.species.name}.jpg`"
              :alt="second.species.name"
              class="evolution-img" />
            <h1
              class="text-dark my-2 text-center text-xl font-semibold capitalize">
              {{ second.species.name }}
            </h1>
          </div>
          <div class="flex-1" v-if="second.evolves_to.length >= 1">
            <template
              v-for="(third, j) in second.evolves_to"
              :key="`thirdEvo${j}`">
              <div
                class="hoverScale h-full rounded-md bg-white"
                @click="goToPokemon(third.species.name)">
                <img
                  :src="`https://img.pokemondb.net/artwork/large/${third.species.name}.jpg`"
                  :alt="third.species.name"
                  class="evolution-img" />
                <h1
                  class="text-dark my-2 text-center text-xl font-semibold capitalize">
                  {{ third.species.name }}
                </h1>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from "vue";
  import router from "@/router";

  defineProps({
    evolutionChain: Object,
  });

  function goToPokemon(pokemonName) {
    router.push({
      name: "pokemonDetail",
      params: { pokemon: pokemonName },
    });
  }
</script>

<style lang="scss">
  .evolution-img {
    height: 14rem;
    width: 100%;
    object-fit: contain;
  }
</style>
