import { defineStore } from "pinia";
import { ref } from "vue";

export interface Pokemon {
  name: string;
  url: string;
}

export const usePokemonStore = defineStore("pokemon", () => {
  const pokemonList = ref<Pokemon[] | any[]>([]);
  const nextLink = ref("");

  function fetchPokemonApi(link: string) {
    fetch(link)
      .then((response) => response.json())
      .then((result) => {
        pokemonList.value.push(...result.results);
        nextLink.value = result.next;
      })
      .catch((error) => console.log("error", error));
  }

  return { pokemonList, nextLink, fetchPokemonApi };
});
