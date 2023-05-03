import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: ()=>import('../views/index/index.vue'),
        meta: {
            title: '首页'
        },
    },
    {
        path: '/home',
        name: 'home',
        component: ()=>import('../views/home/index.vue'),
        meta: {
            title:  'home'
        }
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()

})

export default router;