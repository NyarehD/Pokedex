<template>
  <div class="customContainer px-12">
    <h1
      class="text-4xl capitalize dark:text-neutral-200 text-center mb-8 font-semibold">
      {{ route.params.pokemon }}
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        class="h-64 md:h-auto animate-pulse bg-neutral-500/50 dark:bg-neutral-300/50 rounded-md"
        v-if="isLoading"></div>
      <div
        class="dark:bg-white flex-1 rounded-md dark:shadow-2xl shadow-blue-400 flex flex-col justify-center"
        v-else>
        <img
          :src="`https://img.pokemondb.net/artwork/large/${route.params.pokemon}.jpg`"
          class="w-full h-72 object-contain"
          :alt="`${route.params.pokemon}`"
          loading="lazy" />
      </div>
      <div class="">
        <h2 class="text-2xl font-semibold dark:text-neutral-200 text-center">
          PokeDex Data
        </h2>
        <PokemonDetailTable
          :current-pokemon="currentPokemon"
          :is-loading="isLoading" />
      </div>
    </div>
    <LoadingEvolutionChart v-if="isLoading" />
    <EvolutionChart :evolution-chain="evolutionChain" v-else />
  </div>
</template>

<script setup lang="ts">
  import {
    capitalize,
    onMounted,
    onUnmounted,
    onUpdated,
    ref,
    watch,
  } from "vue";
  import { useRoute } from "vue-router";
  import EvolutionChart from "@/components/EvolutionChart.vue";
  import LoadingEvolutionChart from "@/components/loading/LoadingEvolutionChart.vue";
  import PokemonDetailTable from "@/components/PokemonDetailTable.vue";
  import { useTitle } from "@vueuse/core";

  const route = useRoute();

  const currentPokemon = ref<{ species: { species: { url: string } } } | any>(
    {}
  );
  const evolutionChain = ref([]);
  const isLoading = ref(true);

  onUpdated(() => useTitle(capitalize(route.params.pokemon)));
  onUnmounted(() => useTitle("Pokedex"));

  // fetching Pokemon
  async function fetchPokemonApi() {
    return await fetch(
      `https://pokeapi.co/api/v2/pokemon/${route.params.pokemon}`
    ).then((response) => response.json());
  }

  async function fetchEvolutionChain() {
    let getSpecies = await fetch(currentPokemon.value.species.url).then(
      (response) => response.json()
    );
    return await fetch(getSpecies.evolution_chain.url).then((response) =>
      response.json()
    );
  }

  async function fetchAll() {
    currentPokemon.value = await fetchPokemonApi();
    evolutionChain.value = await fetchEvolutionChain();
  }

  // Life cycle
  onMounted(async () => {
    await fetchAll();
    isLoading.value = false;
  });

  // Watcher
  watch(route, async () => {
    isLoading.value = true;
    await fetchAll();
    isLoading.value = false;
  });
</script>

<style lang="scss" scoped></style>
