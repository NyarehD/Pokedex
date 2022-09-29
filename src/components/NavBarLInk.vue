<template v-once>
  <button
    class="relative text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-gray-800 dark:before:hover:bg-neutral-200 before:transition hover:before:scale-x-100 text-lg font-medium"
    :class="{
      'text-blue-800 dark:text-cyan-400 hover:text-blue-800 dark:hover:text-cyan-400 before:bg-blue-800 dark:before:hover:bg-cyan-400':
        $route.name === props.routeName,
    }"
    @click.prevent="goToRoute"
    @click="$emit('toggleNavBar')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  import { defineProps } from "vue";
  import router from "@/router";

  function goToRoute() {
    router.push({ name: props.routeName });
  }

  const props = defineProps({
    routeName: String,
  });
</script>

<style scoped></style>
