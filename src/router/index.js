import Vue from 'vue'
import VueRouter from 'vue-router'
import Desktop from '../views/Desktop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Desktop',
    component: Desktop
  }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
