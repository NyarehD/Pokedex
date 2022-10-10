<template>
  <main class="customContainer dark:bg-neutral-900">
    <div
      class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
      ref="cardContainer">
      <KeepAlive>
        <PokemonCard
          v-for="pokemon in pokemonStore.pokemonList"
          :pokemon="pokemon"
          :key="pokemon.name" />
      </KeepAlive>
    </div>
  </main>
</template>

<script setup lang="ts">
  import PokemonCard from "@/components/PokemonCard.vue";
  import { usePokemonStore } from "@/stores/pokemon";
  import { onBeforeMount, onMounted, ref } from "vue";
  import { useInfiniteScroll } from "@vueuse/core";

  const cardContainer = ref<HTMLHtmlElement>();
  const pokemonStore = usePokemonStore();

  onBeforeMount(() => {
    if (pokemonStore.pokemonList) {
      pokemonStore.fetchPokemonApi(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
    }
  });
  onMounted(() => {
    useInfiniteScroll(window, () => {
      pokemonStore.fetchPokemonApi(pokemonStore.nextLink);
    });
  });
</script>
