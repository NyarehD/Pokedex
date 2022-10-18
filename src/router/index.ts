import { createRouter, createWebHistory } from "vue-router";
import Pokedex from "../views/PokedexView.vue";

const router = createRouter({
  history: createWebHistory("/Pokedex/"),
  routes: [
    {
      path: "/",
      name: "pokedex",
      component: Pokedex,
    },
    {
      path: "/:pokemon",
      name: "pokemonDetail",
      component: () => import("../views/PokemonDetail.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
