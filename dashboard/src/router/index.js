import {createRouter, createWebHistory } from 'vue-router'

const Home = () => import('')
const Feedbacks = () => import('')
const Credencials = () => import('')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credencials',
    name: 'Credencials',
    component: Credencials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
