import { createRouter, createWebHistory } from 'vue-router'
import MakdownRenderer from '@/views/PageRenderer.vue'
import Map from '@/views/Map.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/:id',
      name: 'renderer',
      component: MakdownRenderer
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    }
  ]
})

export default router
