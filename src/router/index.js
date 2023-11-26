import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/views/TheDashboard/TheDashboard.vue')
    },
    {
        path: '/AboutUs',
        component: () => import('@/views/AboutUs/AboutUs.vue')
    },
    {
        path: '/Landing',
        component: () => import('@/views/LandingPage/LandingPage.vue')
    },
    {
        path: '/Statistic',
        component: () => import('@/views/TheStatistic/TheStatistic.vue')
    },
    {
        path: '/MedalPage',
        component: () => import('@/views/MedalPage/MedalPage.vue'),
    },
    {
        path: '/TheSetting',
        component: () => import('@/views/TheSetting/TheSetting.vue'),
    },
    {
        path: '/PetKeeping',
        component: () => import('@/views/PetKeeping/PetKeeping.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router