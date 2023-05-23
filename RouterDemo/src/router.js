
import { createRouter, createWebHistory } from 'vue-router'


import Home from './views/Home.vue'
import About from './views/About.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,

    }
]

 // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router