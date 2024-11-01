<script setup>
import { watch, ref } from 'vue';
import ProductCard from '../ProductCard.vue';

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
const products = ref(props.products);
watch(() => props.products, (newVal) => {
  products.value = newVal;
});

</script>

<template>
  <ul class="list-unstyled row row-cols-2 row-cols-md-3 row-cols-lg-4 gy-4">
    <li v-for="product in products" :key="product.id" data-aos="fade-up">
      <ProductCard :product="product" />
    </li>
  </ul>
</template>