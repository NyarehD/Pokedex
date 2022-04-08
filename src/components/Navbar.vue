<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow">
    <div class="container justify-content-between">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/logo.png" alt="Logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{name:'Home'}" :class="['nav-link',{'active':$route.name==='Home'}]">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'About'}" :class="['nav-link',{'active':$route.name==='About'}]">About</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'PokemonList'}" :class="['nav-link',{'active':$route.name==='PokemonList'}]">Pokemon
              List
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.navbar {
  .navbar-brand {
    img {
      width: 100%;
      height: 40px;
    }
  }

}
</style>