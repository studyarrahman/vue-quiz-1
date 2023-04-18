import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Portfolio from "@/views/Portfolio.vue";
import About from "@/views/About.vue"
import Contact from "@/views/Contact.vue"

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/portfolio",
        name: "Portfolio",
        component: Portfolio,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;