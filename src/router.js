import { createRouter, createWebHistory  } from 'vue-router'
import Home from './pages/Home.vue'
import BecomeASitter from './pages/BecomeASitter.vue'
import Activities from './pages/Activities.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/become-a-sitter',
        name: 'become-a-sitter',
        component: BecomeASitter,
    },
    {
        path: '/activities',
        name: 'activities',
        component: Activities,
    },


    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'NotFound',
    //     component: NotFound,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
