import { createRouter, createWebHashHistory } from 'vue-router';
import SingleProduct from '../views/front/SingleProduct.vue';

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
          path: 'home',
          component: () => import('../views/front/HomeView.vue')
        },
        {
          path: 'recommend',
          component: () => import('../views/front/RecommendView.vue')
        },
        {
          path: 'about',
          component: () => import('../views/front/AboutView.vue')
        },
        {
          path: 'contact',
          component: () => import('../views/front/ContactView.vue')
        },
        {
          path: 'products',
          component:()=>import('../views/front/ProductsView.vue')
        },
        {
          path: 'product/:id',
          component:SingleProduct
        },
        {
          path: 'cart',
          component:()=> import('../views/front/CartView.vue')
        },
        {
          path: 'order',
          component:()=> import('../views/front/OrderView.vue')
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('../views/AdminLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/admin/AdminProducts.vue')
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

// 每次頁面餮跳轉後都回到最上方
router.afterEach(() => {
      window.scrollTo({
        top: 0,

    })
})
export default router
