
<template>
  <NavBar/>
  <HyperNavBar/>
  <RouterView/>
</template>

<script setup>
import {RouterView} from 'vue-router'
import NavBar from "@/components/NavBar.vue";
import HyperNavBar from "@/components/HyperNavBar.vue";
</script>

<style lang="scss" scoped>
</style>
