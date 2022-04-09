<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow">
    <div class="container justify-content-between">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/logo.png" alt="Logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
              :class="{'collapsed':navbarCollapseButton}">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse justify-content-end"
           :class="{'collapse':navbarCollapseDiv,'show':navbarShow,'collapsing':navbarCollapsing}"
           id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a @click.prevent="toggleNavbarStatus('Home')"
               :class="['nav-link',{'active':$route.name==='Home'}]">Home</a>
          </li>
          <li class="nav-item">
            <a @click.prevent="toggleNavbarStatus('About')"
               :class="['nav-link',{'active':$route.name==='About'}]">About</a>
          </li>
          <li class="nav-item">
            <a @click.prevent="toggleNavbarStatus('Pokedex')" :class="['nav-link',{'active':$route.name==='Pokedex'}]">Pokedex</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {useRouter} from "vue-router"
import {ref} from "vue";

let router = useRouter();

const navbarCollapseButton = ref(true);
const navbarCollapseDiv = ref(true)
const navbarCollapsing = ref(false);
const navbarShow = ref(false);

function toggleNavbarStatus(to) {
  navbarCollapseButton.value = false
  navbarCollapseDiv.value = false
  navbarCollapsing.value = true
  navbarShow.value = true
  setTimeout(() => {
    navbarCollapseButton.value = true
    navbarCollapseDiv.value = true
    navbarCollapsing.value = false
    navbarShow.value = false
  }, 300)
  router.push({name: to})
}
</script>

<style lang="scss" scoped>
.navbar {
  .navbar-brand {
    img {
      width: 100%;
      height: 40px;
    }
  }

  a {
    cursor: pointer
  }
}
</style>