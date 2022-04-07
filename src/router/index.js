import {createRouter, createWebHistory} from "vue-router"
import About from "../views/About.vue";
import Database from "../views/Database.vue";

const Home = () => import("../views/Home.vue")

const routes = [
    {
        route: "/",
        name: "Home",
        component: Home
    },
    {
        route: "/about",
        name: "About",
        component: About
    },
    {
        route: "/database",
        name: "Database",
        component: Database
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
