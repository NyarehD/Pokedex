<template v-once>
  <RouterLink :to="props.routeName === 'pokedex' ? '/' : props.routeName">
    <button
      class="relative text-lg font-medium font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-gray-800 before:transition hover:before:scale-x-100 dark:before:hover:bg-neutral-200"
      :class="{
        'text-blue-800 before:bg-blue-800 hover:text-blue-800 dark:text-cyan-400 dark:hover:text-cyan-400 dark:before:hover:bg-cyan-400':
          $route.name === props.routeName,
        'text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:text-neutral-200':
          $route.name !== props.routeName,
      }"
      @click="$emit('toggleNavBar')">
      <slot></slot>
    </button>
  </RouterLink>
</template>

<script setup>
  const props = defineProps({
    routeName: String,
  });
</script>

<style scoped></style>
