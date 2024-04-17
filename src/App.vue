<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init();
})
</script>

<template>
  <RouterView />
</template>
