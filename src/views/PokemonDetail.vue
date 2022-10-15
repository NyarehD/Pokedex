<template>
  <div class="customContainer px-12">
    <h1
      class="text-4xl capitalize dark:text-neutral-200 text-center mb-8 font-semibold">
      {{ route.params.pokemon }}
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        class="dark:bg-white flex-1 rounded-md dark:shadow-2xl shadow-blue-400 flex flex-col justify-center"
        :class="{
          'animate-pulse bg-neutral-500/50 dark:bg-neutral-300/50': isLoading,
        }">
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
        <table class="table-auto min-w-full dark:text-neutral-200">
          <LoadingPokemonDetail v-if="isLoading" />
          <tbody class="divide-y divide-neutral-400" v-if="!isLoading">
            <tr>
              <th>No</th>
              <th>{{ currentPokemon.order }}</th>
            </tr>
            <tr>
              <th>Type</th>
              <th>
                <TypeIcon
                  v-for="(type, i) in pokemonTypes"
                  :key="i"
                  :type="type.type" />
              </th>
            </tr>
            <tr>
              <th>Height</th>
              <th class="">
                {{ currentPokemon.height / 10 }} m ({{ heightInImperial }})
              </th>
            </tr>
            <tr>
              <th>Weight</th>
              <th class="fw-normal">
                {{ currentPokemon.weight }} kg ({{ weightInImperial }}lb)
              </th>
            </tr>
            <tr>
              <th>Abilities</th>
              <th>
                <p
                  v-for="(ability, i) in currentPokemon.abilities"
                  :key="`abilityId${i}`">
                  <a
                    :href="ability.ability.url"
                    class="capitalize text-blue-500 hover:underline">
                    {{ ability.ability.name }}
                  </a>
                  <span class="mx-2 text-secondary" v-if="ability.is_hidden">
                    (Hidden Ability)
                  </span>
                </p>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <LoadingEvolutionChart/>
    <EvolutionChart :evolution-chain="evolutionChain" v-if="!isLoading" />
  </div>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref, watch } from "vue";
  import { useRoute } from "vue-router";
  import TypeIcon from "@/components/TypeIcon.vue";
  import LoadingPokemonDetail from "@/components/loading/LoadingPokemonDetail.vue";
  import EvolutionChart from "@/components/EvolutionChart.vue";
  import LoadingEvolutionChart from "@/components/loading/LoadingEvolutionChart.vue";

  const route = useRoute();

  const currentPokemon = ref<{ species: string } | any[]>([]);
  const evolutionChain = ref([]);
  const isLoading = ref(true);

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

  // Computed
  const pokemonTypes = computed(() => {
    return currentPokemon.value.types;
  });

  function addZeroAtFront(number: number) {
    return number < 10 ? `0${number}` : number;
  }

  const heightInImperial = computed(() => {
    let inTotalInch = currentPokemon.value.height * 3.937;
    let inFeet = Math.floor(inTotalInch / 12);
    let inRemainInch = Math.floor(inTotalInch % 12);
    return inFeet === 0
      ? `${addZeroAtFront(inRemainInch)}''`
      : `${inFeet}'${addZeroAtFront(inRemainInch)}''`;
  });

  const weightInImperial = computed(() => {
    return (currentPokemon.value.weight * 0.22046).toFixed(2);
  });

  onMounted(async () => {
    await fetchAll();
    isLoading.value = false;
  });

  watch(route, async () => {
    isLoading.value = true;
    await fetchAll();
    isLoading.value = false;
  });
</script>

<style lang="scss" scoped>
  th {
    padding: 10px 0;

    &:first-of-type {
      font-weight: 600;
    }
  }
</style>