<script>
import { mapState, mapActions } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
import { Offcanvas } from 'bootstrap';

export default {
  data() {
    return {
      searchIsShow: false,
      searchText: '',
      lastScrollTop: 0,
      isShow: true,
      detailIsOpen: false,
      offcanvas: null
    }
  },
  computed: {
    ...mapState(useCartStore, ['cart']),
    cartNumb() {
      let num = 0;
      if (this.cart.carts) {  
        this.cart.carts.forEach(product => {
          num += product.qty;
        });
      }
      return num;
    },
  },
  methods: {
    ...mapActions(useCartStore, ['getCart']),
    closeOffcanvas() {
      this.offcanvas.hide();
    },
    scrolling() {
      let scrollTop = window.scrollY || window.pageYOffset;
      if (scrollTop > this.lastScrollTop && this.lastScrollTop > 124) {
        this.isShow = false;
      } else if (scrollTop < this.lastScrollTop) {
        this.isShow = true;
      }
      this.lastScrollTop = scrollTop;
    },
    goSearch() {
      if (!this.searchText) return;
      this.offcanvas.hide();
      this.$router.push(`/products?search=${this.searchText}`);
      this.searchText = '';
      this.searchIsShow = !this.searchIsShow;
    },
  },
  mounted() {
    this.offcanvas = new Offcanvas(this.$refs.offcanvas);
    window.addEventListener('scroll', this.scrolling);
    this.getCart();
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrolling);
  }
}
</script>
<template>
  <div class="bg-info py-2 d-flex justify-content-center">
    <span class="tracking-widest text-white me-2">
      訂單滿千免運
    </span>
    <i class="bi bi-rocket-takeoff-fill d-inline-block text-white"></i>
  </div>
  <!-- NavBar -->
  <nav class="navbar navbar-expand-md bg-navbar sticky-top overflow-hidden" :class="{ 'navbarHide': !isShow }">
    <div class="container">
      <!-- LOGO -->
      <RouterLink class="navbar-brand" to="/home">
        <img src="@/assets/img/logo.png" class="logo" alt="阿橘飯店Logo">
      </RouterLink>
      <!-- toggler button -->
      <button 
        class="navbar-toggler shadow-none border-0" 
        type="button" 
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" 
        aria-controls="offcanvasNavbar" 
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Offcanvas  -->
      <div 
        class="offcanvas offcanvas-start bg-navbar" 
        tabindex="-1" 
        id="offcanvasNavbar" 
        aria-labelledby="offcanvasNavbarLabel"
        ref="offcanvas">
        <!-- Offcanvas Header -->
        <div class="offcanvas-header border-bottom border-primary">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            <img src="@/assets/img/logo.png" class="logo" alt="阿橘飯店Logo">
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <!-- Offcanvas Body -->
        <div class="offcanvas-body border-bottom border-md-0 border-primary">
          <ul class="navbar-nav justify-content-start align-items-center flex-grow-1 pe-3">
            <li class="nav-item d-lg-none" >
              <RouterLink class="nav-link link-primary text-nowrap" aria-current="page" to="/home" @click="closeOffcanvas">首頁</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link link-primary text-nowrap" to="/recommend" @click="closeOffcanvas">推薦</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link link-primary text-nowrap" to="/products" @click="closeOffcanvas">料理</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link link-primary text-nowrap" to="/about" @click="closeOffcanvas">關於</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link link-primary text-nowrap" to="/contact" @click="closeOffcanvas">聯絡我們</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link link-primary text-nowrap" to="/order" @click="closeOffcanvas">訂單查詢</RouterLink>
            </li>
          </ul>
          <form class="d-flex me-2" role="search" @submit="goSearch">
            <input class="form-control border-primary me-2" type="search" placeholder="搜尋料理" aria-label="Search" v-model.trim="searchText">
            <button class="btn btn-outline-primary  text-nowrap" type="submit">搜尋</button>
          </form>
          <div class="position-relative">
            <RouterLink class="d-flex justify-content-center align-items-baseline" to="/cart" @click="closeOffcanvas"> 
              <i class="bi bi-cart2 fs-4 text-primary"></i>
              <span class="badge rounded-pill text-bg-info position-md-absolute cart-number" v-if="cartNumb > 0">{{ cartNumb }}</span>
            </RouterLink>
          </div>
        </div>
        <div class="d-md-none">
          <ul class="nav justify-content-center gap-4 py-4" >
            <li class="nav-item">
              <a class="nav-item" href="#"><i class="bi bi-twitter"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-item" href="#"><i class="bi bi-facebook"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-item" href="#"><i class="bi bi-instagram"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-item" href="#"><i class="bi bi-tiktok"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-item" href="mailto:GDiner@example.com"><i class="bi bi-envelope"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </nav>
</template>

<style scoped lang="scss">
.bg-navbar{
  background-color: #f0e9c2;
}
.tracking-widest {
  letter-spacing: .1em;
}

.router-link-active {
  text-decoration: underline;
  text-underline-offset: .25rem;
  opacity: 1;
  pointer-events: none;
}

.navbarHide {
  top: -128px;
}

.logo {
  width: 120px; 
}
.cart-number{
  right: -50%;
  bottom: 0;
}

.nav-link:hover{
  text-decoration: underline;
  text-underline-offset: .25rem;
}
</style>