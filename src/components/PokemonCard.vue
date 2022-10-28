<template>
  <RouterLink
    :to="{ name: 'pokemonDetail', params: { pokemon: pokemon.name } }">
    <div
      class="hoverScale rounded-md border-2 shadow-md hover:cursor-pointer dark:border-neutral-500/50">
      <div class="rounded-t-md dark:bg-white">
        <img
          :src="`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`"
          class="h-72 w-full object-contain drop-shadow-none"
          :alt="`Image of ${pokemon.name}`"
          loading="lazy" />
      </div>
      <div class="">
        <h5
          class="my-2 text-center text-xl font-semibold capitalize dark:text-white">
          {{ pokemon.name }}
        </h5>
      </div>
    </div>
  </RouterLink>
</template>
<script setup lang="ts">
  defineProps<{
    pokemon: { name: string };
  }>();
</script>
<style scoped lang="scss"></style>
