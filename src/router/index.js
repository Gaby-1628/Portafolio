import { createRouter, createWebHistory } from "vue-router";
import HomeVies from '../views/HomeView.vue';
import AboutMe from "../components/AboutMe.vue";
import MateWebView from "../views/MateWebView.vue";
import MavView from "../views/MavView.vue";
import LoginView from "../views/Primacy/PrimacyAdmin/LoginView.vue";
import SingUpView from "../views/Primacy/PrimacyAdmin/SingUpView.vue";
import HomePrimacyCRM from "../views/Primacy/PrimacyAdmin/HomePrimacyCRM.vue";
import UserDetailView from "../views/Primacy/PrimacyAdmin/UserDetailView.vue";
import LoginUserView from "../views/Primacy/PrimacyUser/LoginUserView.vue";
import SingUpUserView from "../views/Primacy/PrimacyUser/SingUpUserView.vue";
import HomePrimacyUserView from "../views/Primacy/PrimacyUser/HomePrimacyUserView.vue";
import SeguimientosView from "../views/Primacy/PrimacyUser/SeguimientosView.vue";
import ControlsView from "../views/Primacy/PrimacyUser/ControlsView.vue";
import GlycemiaView from "../views/Primacy/PrimacyUser/GlycemiaView.vue";
import PressureView from "../views/Primacy/PrimacyUser/PressureView.vue";
import CounselingView from "../views/Primacy/PrimacyUser/CounselingView.vue";
import CounselingFitnessView from "../views/Primacy/PrimacyUser/CounselingFitnessView.vue";
import CounselingDietView from "../views/Primacy/PrimacyUser/CounselingDietView.vue";
import CounselingStressView from "../views/Primacy/PrimacyUser/CounselingStressView.vue";
import LoginMateView from "../views/MateApp/LoginMateView.vue";
import HomeMateView from "../views/MateApp/HomeMateView.vue";
import RegisterView from "../views/MateApp/RegisterView.vue";
import ResetPasswordView from "../views/MateApp/ResetPasswordView.vue";

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
    },
    {
        path: '/home-primacy-crm',
        name: 'home-crm',
        component: HomePrimacyCRM
    },
    {
        path: '/detail-crm',
        name: 'detail-crm',
        component: UserDetailView
    },
    {
        path: '/primacy-user',
        name: 'primacy-user',
        component: LoginUserView
    },
    {
        path: '/signup-user',
        name: 'signup-user',
        component: SingUpUserView
    },
    {
        path: '/home-user-primacy',
        name: 'home-user-primacy',
        component: HomePrimacyUserView
    },
    {
        path: '/seguimientos-user',
        name: 'seguimientos',
        component: SeguimientosView
    },
    {
        path: '/controls-user',
        name: 'controls',
        component: ControlsView
    },
    {
        path: '/glycemia',
        name: 'glycemia',
        component: GlycemiaView
    },
    {
        path: '/pressure',
        name: 'pressure',
        component: PressureView
    },
    {
        path: '/counseling',
        name: 'counseling',
        component: CounselingView
    },
    {
        path: '/counseling-fitness',
        name: 'fitness',
        component: CounselingFitnessView
    },
    {
        path: '/counseling-diet',
        name: 'diet',
        component: CounselingDietView
    },
    {
        path: '/counseling-stress',
        name: 'stress',
        component: CounselingStressView
    },
    {
        path: '/mate-app',
        name: 'mate-app',
        component: LoginMateView
    },
    {
        path: '/home-mate-app',
        name: 'home-mate-app',
        component: HomeMateView
    },
    {
        path: '/register-user-mate',
        name: 'register',
        component: RegisterView
    },
    {
        path: '/recovery-password',
        name: 'recovery',
        component: ResetPasswordView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router