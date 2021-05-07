import { createRouter, createWebHistory } from 'vue-router'
import List from './components/List'
import User from './components/User'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: List},
    {path: '/contacts/:id', component: User },
  ]
})

export default router