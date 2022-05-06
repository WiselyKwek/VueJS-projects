import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'

// array of routes, each object has it's own path
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router