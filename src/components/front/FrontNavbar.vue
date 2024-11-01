<script setup>
import { RouterLink } from 'vue-router';
import { useCartStore } from '@/stores/cartStore';
import { storeToRefs } from 'pinia';

const links = [
  {
    name: '首頁',
    to: '/home',
  },
  {
    name: '料理列表',
    to: '/products',
  },
  {
    name: '關於阿橘',
    to: '/about',
  },
  {
    name: '聯絡我們',
    to: '/contact',
  },
  {
    name: '查詢訂單',
    to: '/order',
  }
];

const cartStore = useCartStore();
const {cart} = storeToRefs(cartStore);

const socialIcons = ['bi-twitter', 'bi-facebook', 'bi-instagram', 'bi-tiktok'];
</script>

<template>
  <div class="bg-info py-2 text-center fs-5">
    <span class="me-2 text-white">外送訂單滿千免運</span>
    <i class="bi bi-rocket-takeoff-fill d-inline-block text-white"></i>
  </div>
  <nav class="navbar navbar-expand-md sticky-top">
    <div class="container">
      <!-- toggler button -->
      <button type="button" class="navbar-toggler border-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Logo -->
      <RouterLink class="navbar-brand" to="/home">
        <img src="@/assets/image/logo.png" class="logo" alt="阿橘飯店Logo">
      </RouterLink>

      <!-- Offcanvas -->
      <div class="offcanvas offcanvas-start bg-secondary" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" ref="offcanvas">
        <!-- Offcanvas header -->
        <div class="offcanvas-header border-bottom border-2 border-primary bg-transparent">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            <img src="@/assets/image/logo.png" class="logo" alt="阿橘飯店Logo">
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <!-- Offcanvas Body -->
        <div class="offcanvas-body text-center">
          <ul class="navbar-nav gap-4 align-items-center">
            <li v-for="link in links" :key="link.name" class="nav-item" data-bs-dismiss="offcanvas">
              <RouterLink :to="link.to" class="text-primary text-opacity-50 fs-5">{{ link.name }}</RouterLink>
            </li>
          </ul>
        </div>
        <!-- Offcanvas Footer -->
        <div class="d-md-none border-top border-primary">
          <ul class="nav justify-content-center gap-4 py-4">
            <li class="nav-item" v-for="icon in socialIcons" :key="icon">
              <a href="#" class="nav-item"><i class="bi" :class="icon"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <!-- cart -->
      <div class="ms-auto me-4 position-relative">
        <RouterLink to="/cart" class="text-primary fs-4 fw-bold">
          <i class="bi bi-cart-fill"></i>
          <span v-if="cart.carts" class="badge rounded-pill bg-info fs-7 position-absolute cart-numb">{{ cart.carts.length}}</span>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
nav{
  background-color: #eae5c8;
}

.logo{
  width: 120px;
}
.router-link-active{
  --bs-text-opacity: 1;
  pointer-events: none;
}

.cart-numb{
  bottom: -5px;
  right: -10px;
}
</style>