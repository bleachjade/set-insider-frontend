import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Vue_about.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'Vue_about',
    component: Home
  },
  {
    path: '/',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
