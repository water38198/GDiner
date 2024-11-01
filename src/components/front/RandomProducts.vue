<script setup>
import { watch } from 'vue';
import ProductCard from './ProductCard.vue';
import { useProductApi } from '@/composables/useProductApi';

const { getRandomProducts, randomProducts,isLoading } = useProductApi();
const props = defineProps({
  id: {
    type: String,
  }
});

watch(() => props.id, () => {
  getRandomProducts(props.id);
});

</script>

<template>
  <div class="position-relative">
    <VLoading :active="isLoading" :is-full-page="false"/>
    <template v-if="randomProducts.length > 0">
      <h3 class="mb-8 fw-bold">誠心推薦</h3>
      <div>
        <ul class="list-unstyled row row-cols-2 row-cols-lg-4">
          <li v-for="product in randomProducts" :key="product.id">
            <ProductCard :product/>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>