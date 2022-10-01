<template>
  <div
    class="rounded-md hover:scale-105 transition duration-500 border-2 dark:border-neutral-500/50 shadow-sm"
    @click="
      $router.push({
        name: 'PokemonDetail',
        params: { pokemon: pokemon.name },
      })
    ">
    <div class="dark:bg-white rounded-t-md">
      <img
        :src="`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`"
        class="w-full h-72 object-contain drop-shadow-none"
        :alt="`Image of ${pokemon.name}`"
        loading="lazy" />
    </div>
    <div class="">
      <h5
        class="text-center font-semibold text-xl my-2 capitalize dark:text-white">
        {{ pokemon.name }}
      </h5>
    </div>
  </div>
</template>
<script setup lang="ts">
  defineProps<{
    pokemon: object;
  }>();
</script>
<style scoped lang="scss"></style>
