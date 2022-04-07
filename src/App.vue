<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="container-md">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<style>
</style>
