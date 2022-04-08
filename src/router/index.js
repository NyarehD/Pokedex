import {createRouter, createWebHistory} from "vue-router"

const Home = () => import("../views/Home.vue")
const About = ()=>import("../views/About.vue")
const Database =()=>import("../views/Database.vue")
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
        path: "/database",
        name: "Database",
        component: Database
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
