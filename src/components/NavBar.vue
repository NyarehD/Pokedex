<template>
  <header
    class="sticky inset-0 z-10 bg-white dark:bg-neutral-800 drop-shadow-xl">
    <div
      class="flex items-center justify-between customContainer dark:bg-neutral-800 h-16 md:h-20">
      <RouterLink to="/" class="block">
        <img
          alt="Pokemon Logo"
          src="@/assets/Pokemon_International.svg"
          class="w-full h-14" />
      </RouterLink>
      <div class="flex items-center justify-end flex-1">
        <nav class="hidden md:block" aria-label="header-navigation">
          <ul class="flex items-center gap-4 text-sm text-co">
            <li>
              <NavBarLink route-name="pokedex">Pokedex</NavBarLink>
            </li>
            <li>
              <NavBarLink route-name="about">About</NavBarLink>
            </li>
            <li>
              <DarkModeButton />
            </li>
          </ul>
        </nav>
        <DarkModeButton class="md:hidden mx-3" />
        <NavBarToggleBtn
          @click="navBarToggle = !navBarToggle"
          :toggle-status="navBarToggle" />
      </div>
    </div>
    <div
      class="bg-white w-full dark:bg-neutral-800 max-w-screen-xl mx-auto px-4 md:px-8 pb-4 md:hidden transition-all duration-300 -z-10 navMobile absolute"
      :class="{ appear: navBarToggle }">
      <nav class="" aria-label="header-navigation">
        <ul class="flex flex-col items-center text-sm text-co">
          <li class="w-full h-10 align-middle text-center">
            <NavBarLink route-name="pokedex" @click="toggleNavBar">
              Pokedex
            </NavBarLink>
          </li>
          <li class="w-full h-10 align-middle text-center">
            <NavBarLink route-name="about" @click="toggleNavBar">
              About
            </NavBarLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import NavBarLink from "./NavBarLink.vue";
  import NavBarToggleBtn from "@/components/NavBarToggleBtn.vue";
  import DarkModeButton from "@/components/DarkModeButton.vue";

  const navBarToggle = ref(false);

  function toggleNavBar() {
    navBarToggle.value = !navBarToggle.value;
  }
</script>

<style scoped lang="scss">
  .navMobile {
    transform: translateY(-100 + 4rem);
  }

  .navMobile.appear {
    transform: translateY(0);
  }
</style>
