import {createRouter, createWebHistory} from "vue-router"

const Home = () => import("../views/Home.vue")
const About = () => import("../views/About.vue")
const Pokedex = () => import("../views/Pokedex.vue")
const PokemonDetail = () => import("../views/PokemonDetail.vue")
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/pokedex",
        name: "Pokedex",
        component: Pokedex
    },
    {
        path: "/pokemon/:pokemon",
        name: "PokemonDetail",
        component: PokemonDetail
    }
]

const router = createRouter({
    history: createWebHistory("Pokedex"),
    routes
})
export default router
