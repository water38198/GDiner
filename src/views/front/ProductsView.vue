<script setup>
import { onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProductApi } from '@/composables/useProductApi';
import ProductsFilter from '@/components/front/products/ProductsFilter.vue';
import ProductsList from '@/components/front/products/ProductsList.vue';
import PaginationComponent from '@/components/front/PaginationComponent.vue';

const currentCategory = computed(() => route.query.category || '全部');
const route = useRoute();

const { getProducts, products, isLoading, pagination } = useProductApi();

onMounted(() => {
  getProducts(currentCategory.value, 1);
});

const changePage = (page) => {
  getProducts(currentCategory.value, page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const changeCategory = (category) => {
  getProducts(category, 1);
}

watch(currentCategory, () => {
  getProducts(currentCategory.value,1);
});
</script>

<template>
  <div class="mb-10 container min-vh-100">
    <VLoading :active="isLoading"/>
    <h2 class="mt-8 fs-1 fw-bold">料理</h2>
    <ProductsFilter @change-category="changeCategory" :current-category="currentCategory"/>
    <ProductsList :products="products"/>
    <PaginationComponent :pagination @change-page="changePage" v-if="pagination.total_pages > 1"/>
  </div>
</template>