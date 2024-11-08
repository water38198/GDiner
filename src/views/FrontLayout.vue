<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import FrontNavbar from '@/components/front/FrontNavbar.vue';
import FrontFooter from '@/components/front/FrontFooter.vue';
import { useCartStore } from '@/stores/cartStore';

onMounted(() => {
  useCartStore().getCart();
});
</script>

<template>
  <div class="bg-secondary ">
    <FrontNavbar />
    <RouterView />
    <FrontFooter />
  </div>
</template>