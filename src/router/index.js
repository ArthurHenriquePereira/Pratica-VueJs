import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";

const routes = [
    {path: '/', component : HomePage},
    {path: '/sobre', component : AboutPage}
];

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;