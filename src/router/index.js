import { createRouter, createWebHistory } from "vue-router";
import HomeVies from '../views/HomeView.vue';
import AboutMe from "../components/AboutMe.vue";
import MateWebView from "../views/MateWebView.vue";
import MavView from "../views/MavView.vue";
import LoginView from "../views/Primacy/PrimacyAdmin/LoginView.vue";
import SingUpView from "../views/Primacy/PrimacyAdmin/SingUpView.vue";

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
        component: LoginView
    },
    {
        path: '/p-crm-signUp',
        name: 'signup',
        component: SingUpView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router