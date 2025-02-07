import { createRouter, createWebHistory } from "vue-router";
import HomeVies from '../views/HomeView.vue';
import AboutMe from "../components/AboutMe.vue";
import MateWebView from "../views/MateWebView.vue";
import MavView from "../views/MavView.vue";
import PrimacyAdminView from "../views/PrimacyAdminView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeVies
    },
    {
        path: '/about',
        name: 'about',
        component: AboutMe
    },
    {
        path: '/mate-web',
        name: 'mate-conect',
        component: MateWebView
    },
    {
        path: '/mav-admin',
        name: 'mav-admin',
        component: MavView
    },
    {
        path: '/primacy-admin',
        name: 'primacy-admin',
        component: PrimacyAdminView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router