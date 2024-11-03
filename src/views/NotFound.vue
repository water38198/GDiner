<script setup>
import { useRouter } from 'vue-router';

const socialIcons = ['bi-twitter', 'bi-facebook', 'bi-instagram', 'bi-tiktok'];
const router = useRouter();


</script>

<template>
  <div class="content-center min-vh-100 text-center">
    <h1><i class="bi bi-cone-striped"></i></h1>
    <p class="px-4">很抱歉，您可能輸入了錯誤的網址或是網站出了些問題。<br>如果狀況持續發生，請與我們聯絡：</p>
    <ul class="nav justify-content-center mb-8">
      <li v-for="icon in socialIcons" class="nav-item">
        <a class="nav-link fs-4" aria-current="page" href="#">
          <i class="bi" :class="icon"></i>
        </a>
      </li>
    </ul>
    <div>
      <button type="button" class="btn btn-outline-primary me-4" @click="router.back()">上一頁</button>
      <button type="button" class="btn btn-outline-primary" @click="router.push('/')">首頁</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1{
  font-size: 10rem;
  @media screen and (max-width: 768px){
    font-size: 6rem;
  }
}
</style>