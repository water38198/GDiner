<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';
import Swal from 'sweetalert2';

const { VITE_URL, VITE_PATH } = import.meta.env;

const isLoading = ref(false);
const products = ref([]);
const pagination = ref({});

const getProducts = async () => {
  isLoading.value = true;
  try {
    const response = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products`)
    products.value = response.data.products;
    pagination.value = response.data.pagination;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '抱歉，發生錯誤',
      text: error.response.data.message,
    });
  } finally {
    isLoading.value = false;
  } 
};
onMounted(()=> {
  getProducts();
});
</script>

<template>
  <VLoading :active="isLoading" />
  <section>
    <h2 class="mb-8 h2 fw-bold">火熱商品<i class="bi bi-fire"></i></h2>
    <ul class="list-unstyled row row-cols-2 row-cols-lg-4 gy-4">
      <li v-for="product in products.slice(0,8)" :key="product.id" data-aos="fade-up">
        <RouterLink :to="`product/${product.id}`" class="d-block">
          <div class="card">
            <div class="card-image border-custom bg-primary overflow-hidden">
              <img :src="product.imageUrl" :alt="`${product.title}`" class="card-img-top">
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">NT$ {{ product.price }}</p>
            </div>
          </div>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>


<style scoped lang="scss">
.card{
  img{
    transition: transform 0.75s ease-in-out;
    height: 150px;
    @media (width> 768px) {
      height: 250px;
    }
  }
  &:hover{
    h5{
      text-decoration: underline;
      text-underline-offset: 4px;
    }
    img{
      transform: scale(1.1);
    }
  }
}
</style>