<template>
  <div
    class="rounded-md hoverScale border-2 dark:border-neutral-500/50 shadow-md hover:cursor-pointer"
    @click="
      $router.push({
        name: 'pokemonDetail',
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
    pokemon: { name: string };
  }>();
</script>
<style scoped lang="scss"></style>
