<script setup>
import { ref, onMounted,inject } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import ProductModal from '@/components/admin/ProductModal.vue';
import PaginationComponent from '@/components/front/PaginationComponent.vue';

import { useDateFormat } from '@vueuse/core'

const { VITE_URL, VITE_PATH } = import.meta.env;

const products = ref([]);
const isLoading = ref(false);
const tempProduct = ref({});
const isNew = ref(false);
const pagination = ref({});
const getProducts = async (page = 1) => {
  try {
    isLoading.value = true;
    const response = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/products?page=${page}`);
    products.value = response.data.products;
    pagination.value = response.data.pagination;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '錯誤',
      text: `${error.response.data.message || '請稍後再試'}`,
    });
  } finally {
    isLoading.value = false;
  }
};
onMounted(() => {
  getProducts();
});

const addNewProduct = () => {
  tempProduct.value = {};
  isNew.value = true;
};
const editProduct = (product) => {
  tempProduct.value = JSON.parse(JSON.stringify(product));
  isNew.value = false;
};
const deleteProduct = (product) => {
  Swal.fire({
    title: `確定要刪除${product.title}嗎？`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '確定',
    confirmButtonColor: '#d33',
    cancelButtonText: '取消',
  }).then( async(result) => {
    if (result.isConfirmed) {
      try {
        isLoading.value = true;
        const response = await axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${product.id}`);
        Swal.fire({
          title: response.data.message,
          icon: 'success',
          showConfirmButton: false,
          toast: true,
          timer: 1500,
          position: 'top',
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '錯誤',
          text: `${error.response.data.message || '請稍後再試'}`,
        });
      } finally {
        isLoading.value = false;
        getProducts();
      }
    }
  })
};
const { isDemo } = inject('demo');
</script>

<template>
  <div class="position-relative container py-10">
    <VLoading :active="isLoading" :is-full-page="false"/>  
    <h2 class="text-center fw-bold">商品管理</h2>
    <div class="mb-8 text-end">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ProductModal" @click="addNewProduct">建立商品</button>
    </div>
    <div class="table-responsive">
      <table class="table align-middle">
        <thead>
          <tr>
            <th>圖片</th>
            <th>上架日期</th>
            <th>分類</th>
            <th>名稱</th>
            <th>原價</th>
            <th>售價</th>
            <th>啟用</th>
            <th class="text-end">編輯</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="product in products" :key="product.id">
            <td><img :src="product.imageUrl" :alt="`${product.title}的圖片`" /></td>
            <td>{{ useDateFormat(product.created,'YYYY-MM-DD') }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.title }}</td>
            <td>{{ product.origin_price }}</td>
            <td>{{ product.price }}</td>
            <td>
              <span class="text-success" v-if="product.is_enabled">啟用</span>
              <span class="text-danger" v-else>未啟用</span>
            </td>
            <td class="text-end">
              <div class="btn-group" role="group" aria-label="edit button group">
                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#ProductModal" @click="editProduct(product)">編輯</button>
                <button type="button" class="btn btn-outline-danger" @click="deleteProduct(product)" :disabled="isDemo">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <PaginationComponent :pagination="pagination" @change-page="getProducts"/>
  </div>
  <!-- modal -->
  <ProductModal :product="tempProduct" :isNew="isNew"  @refresh="getProducts"/>
</template>

<style scoped>
table{
  min-width: 800px;
}
img{
  width: 120px;
  min-width: 120px;
  height: 120px;
}


</style>