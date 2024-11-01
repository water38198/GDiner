import { createRouter, createWebHashHistory } from 'vue-router'
import FrontLayout from '@/views/FrontLayout.vue'
import axios from 'axios';
import Swal from 'sweetalert2';


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: FrontLayout,
      children: [
        {
          path: '',
          component: () => import('@/views/front/HomeView.vue')
        },
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/front/HomeView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/front/AboutView.vue')
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('@/views/front/CartView.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/views/front/ContactUs.vue')
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('@/views/front/OrderView.vue')
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('@/views/front/ProductsView.vue')
        },
        {
          path: 'product/:id',
          name: 'product',
          component: () => import('@/views/front/SingleProduct.vue')
        },
      ],
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/AdminLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'products',
          component: () => import('@/views/admin/AdminProducts.vue'),
        },
        {
          path: 'orders',
          component: () => import('@/views/admin/AdminOrders.vue'),
        },
        {
          path: 'coupons',
          component: () => import('@/views/admin/AdminCoupons.vue'),
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',//錯誤路由
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  const { VITE_URL } = import.meta.env;
  const token = document.cookie.split("; ").find((row) => row.startsWith("RGToken="))?.split("=")[1];
  // 需要身份驗證的頁面
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      // 沒有 Token，重定向到 login
      return "/login";
    } else {
      // 檢查 Token 是否有效
      try {
        axios.defaults.headers.common.Authorization = `${token}`;
        await axios.post(`${VITE_URL}/v2/api/user/check`);
      } catch (error) {
        document.cookie = 'RGToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
        Swal.fire({
          icon: 'error',
          title: '錯誤',
          text: `${error.response.data.message}`,
          confirmButtonColor: '#3D081B',
        });
        return "/login";
      }
    }
  } else if (to.name === 'login') {
    // Token仍有效，則不能前往登入頁
    try {
      axios.defaults.headers.common.Authorization = `${token}`;
      await axios.post(`${VITE_URL}/v2/api/user/check`);
      return "/admin/products";
    } catch (err) {
      document.cookie = 'RGToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
    }
  } else {
    return true;
  }
})

router.afterEach(() => {
  window.scrollTo(0, 0);
})
export default router
