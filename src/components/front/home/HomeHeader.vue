<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="mb-10">
    <div class="container pt-15 min-vh-100 content-center">
      <div class="header-content border-custom px-9 py-10 text-primary " data-aos="flip-left">
        <h2 class="fs-1 fw-bold">美好飯局，盡在阿橘！</h2>
        <h3 class="fs-4 fw-bold">歡度聚餐時刻，享受精緻料理！</h3>
        <p class="mb-5">每道料理都是由我們阿橘大廚精心挑選、用心製作而成，且食材皆採用符合時節與產地直送，請顧客放心食用！</p>
        <div>
          <RouterLink to="/products" class="d-inline-block px-8 py-3 fs-6 btn btn-outline-primary border-custom link-hover">開始點菜</RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header{
  margin-top: -60px;
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711206531765.jpg');
  background-size: cover;;
}

.header-content{
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  width: fit-content;
  max-width: 600px;
}

.link-hover{
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  &:hover{
    background-color: transparent;
    opacity: 1;
  }
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bs-primary);
    z-index: -1;
    transition: transform 0.6s;
    transform: scaleX(0);
    transform-origin: left;
  }
  &:hover::before{
    transform: scaleX(1);
  }
}

</style>