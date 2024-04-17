<script setup>
import { RouterView } from 'vue-router';
import FrontNavbar from '@/components/front/FrontNavbar.vue';
import FrontFooter from '@/components/front/FrontFooter.vue';
</script>

<template>
  <div class="bg-secondary min-h-screen grid">
    <FrontNavbar />
    <RouterView />
    <FrontFooter />
  </div>
</template>