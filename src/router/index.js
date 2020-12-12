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
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/employee',
    name: 'Employee',
    component: () => import( '../views/Employee.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
