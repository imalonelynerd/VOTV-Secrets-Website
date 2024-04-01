import { createRouter, createWebHistory } from 'vue-router'
import PageRenderer from '@/views/PageRenderer.vue'
import InteractiveMap from '@/views/InteractiveMap.vue'
import ErrorPage from '@/components/states/ErrorPage.vue'

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
    },
    {
      path: '/:id/:pathMatch(.*)*',
      redirect: '/TooMuchPage'
    }
  ]
})

export default router
