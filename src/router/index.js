import {createRouter, createWebHistory} from "vue-router"

const Home = () => import("../views/Home.vue")
const About = () => import("../views/About.vue")
const PokemonList = () => import("../views/PokemonList.vue")
const PokemonDetail =()=>import("../views/PokemonDetail.vue")

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
        path: "/pokemon",
        name: "PokemonList",
        component: PokemonList
    },
    {
        path:"/pokemon/:pokemon",
        name: "PokemonDetail",
        component: PokemonDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
