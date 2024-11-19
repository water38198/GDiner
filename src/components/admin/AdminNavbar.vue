<script setup>
import { ref, inject } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2';
import { RouterLink, useRouter } from 'vue-router'
import * as bootstrap from 'bootstrap';

const router = useRouter();
const links = [
  { name: '商品', path: '/admin/products' },
  { name: '訂單', path: '/admin/orders' },
  { name: '優惠券', path: '/admin/coupons' },
  { name: '前台', path: '/' },
]
const logout = async () => {
  const { VITE_URL } = import.meta.env
  try {
    await axios.post(`${VITE_URL}/v2/logout`)
    document.cookie = `RGToken = ; expires = ${new Date()};path=/; `
    router.push({ name: 'home' })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '錯誤',
      text: `${error.response.data.message || '請稍後再試'}`,
    });
  }
}

const offcanvasRef = ref(null)
const closeCanvas = (link) => {
  const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasRef);
  if (offcanvasInstance) offcanvasInstance.hide();
  router.push(link)
}

const { toggleDemo, isDemo } = inject('demo');
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" :class="isDemo ? 'link-primary': 'link-danger'" href="#" @click.prevent="toggleDemo">後台</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel" ref="offcanvasRef">
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav align-items-center">
            <li v-for="link in links" :key="link.name" class="nav-item">
              <RouterLink :to="link.path" class="nav-link" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" @click="closeCanvas(link.path)">{{ link.name }}</RouterLink>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="logout">登出</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  color: var(--bs-primary);
  font-weight: bold;
  scale: 1.2;
}
</style>
