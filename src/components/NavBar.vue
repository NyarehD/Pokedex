<template>
  <header class="sticky inset-0 z-10 bg-white dark:bg-neutral-800 drop-shadow-xl">
    <div class="flex items-center justify-between max-w-screen-xl h-16 md:h-20 mx-auto px-4 md:px-8">
      <router-link to="/" class="block">
        <img alt="Pokemon Logo" src="@/assets/International_Pokémon_logo.svg" class="w-full h-14">
      </router-link>
      <div class="flex items-center justify-end flex-1">
        <nav class="hidden md:block" aria-label="header-navigation">
          <ul class="flex items-center gap-4 text-sm text-co">
            <li>
              <NavBarLink route-name="home">Home</NavBarLink>
            </li>
            <li>
              <NavBarLink route-name="about">About</NavBarLink>
            </li>
            <li>
              <NavBarLink route-name="pokedex">Pokedex</NavBarLink>
            </li>
          </ul>
        </nav>
        <button class="md:hidden primaryBtn px-3" @click="navBarToggle=!navBarToggle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"/>
          </svg>
        </button>
      </div>
    </div>
    <div
        class="bg-white w-full dark:bg-neutral-800 max-w-screen-xl mx-auto px-4 md:px-8 pb-4 md:hidden transition-all duration-300 -z-10 navMobile absolute"
        :class="{'appear':navBarToggle}">
      <nav class="" aria-label="header-navigation">
        <ul class="flex flex-col items-center text-sm text-co">
          <li class="w-full h-10 align-middle text-center">
            <NavBarLink route-name="home">Home</NavBarLink>
          </li>
          <li class="w-full h-10 align-middle text-center">
            <NavBarLink route-name="about">About</NavBarLink>
          </li>
          <li class="w-full h-10 align-middle text-center">
            <NavBarLink route-name="pokedex">Pokedex</NavBarLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import {ref} from "vue";
import NavBarLink from "./NavBarLink.vue";

const navBarToggle = ref(false)

</script>

<style scoped lang="scss">
.navMobile {
  transform: translateY(-100 + 4rem);
}

.navMobile.appear {
  transform: translateY(0);
}
</style>