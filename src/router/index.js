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
    {
      path: '/admin',
      component: () => import('../views/AdminLayout.vue'),
      children: [
        {
          path: 'home',
          component: () => import('../views/admin/AdminHome.vue')
        },
        {
          path: 'products',
          component: () => import('../views/admin/AdminProducts.vue')
        },
        { 
          path: 'orders',
          component:()=>import('../views/admin/AdminOrders.vue')
        },
        {
          path: 'coupons',
          component:()=>import('../views/admin/AdminCoupons.vue')
        }
      ]
    },
    {
      path: '/login',//登入頁面
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/:pathMatch(.*)*',//錯誤路由
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
