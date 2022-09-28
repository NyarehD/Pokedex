<template>
  <button class="text-lg text-gray-500 hover:text-gray-800 capitalize"
          :class="{'text-gray-800':$route.name===props.routeName}" @click="goToRoute">
    <slot></slot>
  </button>
</template>

<script setup>
import {defineProps} from "vue"
import router from "@/router";

function goToRoute() {
  router.push({name: props.routeName})
}

const props = defineProps({
  routeName: String
})
</script>
<style scoped>

</style>