import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'PHomeView',
            meta: {
                layout: 'default'
            },
            component: () => import('@/views/PHomeView.vue')
        },
        {
            path: '/movie/:id',
            name: 'PMovieDetail',
            meta: {
                layout: 'default'
            },
            component: () => import('@/views/PMovieDetails.vue')
        },
        {
            path: '/favorites',
            name: 'favoriteMovies',
            meta: {
                layout: 'default'
            },
            component: () => import('@/views/Pfavorites.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            meta: {
                layout: 'error'
            },
            component: () => import('@/layout/LError.vue')
        },
    ]
})

export default router