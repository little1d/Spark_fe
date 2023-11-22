import { createRouter,createWebHistory} from 'vue-router'

import TheDashboard from "@/views/TheDashboard/TheDashboard.vue";
import AboutUs from "@/views/AboutUs/AboutUs.vue";
import LandingPage from "@/views/LandingPage/LandingPage.vue";
import TheStatistic from "@/views/TheStatistic/TheStatistic.vue";

const routes = [
    {
        path:'/',
        component:TheDashboard,
    },
    {
        path:'/AboutUs',
        component: AboutUs
    },
    {
        path:'/Landing',
        component: LandingPage
    },
    {
        path:'/Statistic',
        component: TheStatistic
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router