<template>
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
</template>

<script setup lang="ts">
  import LoadingPokemonDetail from "@/components/loading/LoadingPokemonDetail.vue";
  import TypeIcon from "@/components/TypeIcon.vue";
  import { computed } from "vue";

  let props = defineProps({
    currentPokemon: { type: Object, required: true },
    isLoading: Boolean,
  });

  function addZeroAtFront(number: number) {
    return number < 10 ? `0${number}` : number;
  }

  // Computed
  const pokemonTypes = computed(() => {
    return props.currentPokemon.types;
  });

  const heightInImperial = computed(() => {
    let inTotalInch = props.currentPokemon.height * 3.937;
    let inFeet = Math.floor(inTotalInch / 12);
    let inRemainInch = Math.floor(inTotalInch % 12);
    return inFeet === 0
      ? `${addZeroAtFront(inRemainInch)}''`
      : `${inFeet}'${addZeroAtFront(inRemainInch)}''`;
  });

  const weightInImperial = computed(() => {
    return (props.currentPokemon.weight * 0.22046).toFixed(2);
  });
</script>

<style scoped lang="scss">
  th {
    padding: 10px 0;

    &:first-of-type {
      font-weight: 600;
    }
  }
</style>