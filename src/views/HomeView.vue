<template>
  <main class="customContainer min-h-screen">
    <div
      class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
      ref="cardContainer">
      <Card
        v-for="pokemon in pokemonStore.pokemonList"
        :pokemon="pokemon"
        :key="pokemon.name" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import Card from "@/components/Card.vue";
  import { usePokemonStore } from "@/stores/pokemon";
  import { onBeforeMount, onMounted, ref } from "vue";
  import { useInfiniteScroll } from "@vueuse/core";

  const cardContainer = ref<HTMLHtmlElement>();
  const pokemonStore = usePokemonStore();

  onBeforeMount(() => {
    pokemonStore.fetchPokemonApi("https://pokeapi.co/api/v2/pokemon?limit=20");
  });
  onMounted(() => {
    useInfiniteScroll(window, () => {
      console.log(pokemonStore.nextLink);
      pokemonStore.fetchPokemonApi(pokemonStore.nextLink);
    });
  });
</script>
