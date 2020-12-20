import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Vue_about.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Index',
        component: () =>
            import ('../views/Index.vue')
    },
    {
        path: '/stock',
        name: 'Stock',
        component: () =>
            import ('../views/Stock.vue')
    },
    {
        path: '/stock/:symbol',
        name: 'StockSymbol',
        component: () =>
            import ('../views/Stock.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router