<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
  currentCategory: {
    type: String,
    required: true,
  },
});
const categories = ['全部', '主食', '沙拉', '湯品', '副食', '甜點', '飲料', '套餐'];

</script>

<template>
  <div class="mb-10">
    <ul class="nav justify-content-center">
      <li v-for="category in categories" :key="category" class="nav-item">
        <RouterLink :to="`/products?category=${category}`" class="nav-link fs-5" :class="{'active':props.currentCategory === category}">{{ category }}</RouterLink>
      </li>
    </ul>
    <hr>
  </div>
</template>

<style scoped lang="scss">
a.active {
  background-color: #3D081B;
  color: white;
}
</style>