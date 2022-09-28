<template>
  <header class="bg-white">
    <div class="flex items-center justify-between max-w-screen-xl h-16 mx-auto px-4    md:px-8">
      <a href="/home" class="block">
        <img src="src/assets/International_Pokémon_logo.svg" class="w-full h-14">
      </a>
      <div class="flex items-center justify-end flex-1">
        <nav class="hidden md:block" aria-label="header-navigation">
          <ul class="flex items-center gap-4 text-sm text-co">
            <li><a href="/home" class="text-lg text-gray-500 hover:text-gray-800"
                   :class="{'text-gray-800':$route.name='Home'}">Home</a></li>
            <li><a href="/about" class="text-lg text-gray-500 hover:text-gray-800">About</a></li>
            <li><a href="/pokedex" class="text-lg text-gray-500 hover:text-gray-800">Pokedex</a></li>
          </ul>
        </nav>
        <button class="md:hidden primaryBtn">Click me</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>