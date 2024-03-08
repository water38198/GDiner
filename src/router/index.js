import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/front/HomeView.vue')
        },
        {
          path: 'about',
          component: () => import('../views/front/AboutView.vue')
        }
      ]
    },

  ]
})

export default router
