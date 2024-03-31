import { createRouter, createWebHistory } from 'vue-router'
import PageRenderer from '@/views/PageRenderer.vue'
import InteractiveMap from '@/views/InteractiveMap.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/HomePage'
    },
    {
      path: '/InteractiveMap',
      name: 'InteractiveMap',
      component: InteractiveMap
    },
    {
      path: '/:id',
      name: 'PageRenderer',
      component: PageRenderer
    }
  ]
})

export default router
