<script setup>
import { ref, watch,computed } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useDateFormat } from '@vueuse/core';

const isLoading = ref(false);

const order = ref({});
const orderId = ref('');
const route = useRoute();
const getOrder = async(id) => {
  const { VITE_URL, VITE_PATH } = import.meta.env;
  isLoading.value = true;
  try {
    const response = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/order/${id}`);
    console.log(response.data);
    if (response.data.order === null) {
      Swal.fire({
        icon: 'error',
        title: '找不到訂單',
        text: '請確認訂單編號是否正確',
        confirmButtonColor: '#3D081B',
      });
      return;
    } else {
      order.value = response.data.order;
    }
  } catch (error) {
    console.error(error);
    Swal.fire({
      icon: 'error',
      title: '抱歉，出了點問題',
      text: '請稍後再試，並重新整理頁面',
      confirmButtonColor: '#3D081B',
    });
  } finally {
    isLoading.value = false;
  }
}

watch(() => route.query.id, () => {
  getOrder(route.query.id);
});

const router = useRouter();
const goGetOrder = () => {
  router.push(`/order?id=${orderId.value}`);
}

const formatDate = computed(() => {
  return useDateFormat(order.value.create_at * 1000, 'YYYY-MM-DD'); 
});
</script>

<template>
  <div class="container position-relative min-vh-75 py-8">
    <VLoading :active="isLoading" :is-full-page="false"/>
    <h2 class="fw-bold">訂單查詢</h2>
    <div class="d-flex align-items-start gap-4 mb-8 w-md-75 ">
      <VForm id="form" v-slot="{ errors }" @submit="goGetOrder" class="flex-fill">
        <div class="form-floating">
          <VField type="text" id="訂單編號" name="訂單編號" placeholder="訂單編號" rules="required" class="form-control border-custom" :class="{ 'is-invalid': errors['訂單編號'] }" v-model.trim="orderId" autocomplete="off"/>
          <label for="訂單編號">訂單編號</label>
          <ErrorMessage name="訂單編號" class="invalid-feedback" />
        </div>
      </VForm>
      <div>
        <button type="submit" form="form" class="btn btn-lg btn-primary text-nowrap">查詢</button>
      </div>
    </div>
    <template v-if="Object.keys(order).length > 0">
      <div class="row gy-8">
        <div class="col-12 col-md-6">
          <div class="border-custom h-100">
            <h3 class="bg-primary text-secondary p-2 text-center">訂單資訊</h3>
            <ul class="list-unstyled d-flex flex-column gap-4 p-4">
              <li>
                <span class="me-4 fw-bold">號碼：</span>
                <span>{{ order.id }}</span>
              </li>
              <li>
                <span class="me-4 fw-bold">時間：</span>
                <span>{{ formatDate }}</span>
              </li>
              <li>
                <span class="fw-bold">留言：</span>
                <span>{{ order.message }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="border-custom">
            <h3 class="bg-primary text-secondary p-2 text-center">買家資訊</h3>
            <ul class="list-unstyled d-flex flex-column gap-4 p-4">
              <li>
                <span class="me-4 fw-bold">姓名：</span>
                <span>{{ order.user.name }}</span>
              </li>
              <li>
                <span class="me-4 fw-bold">信箱：</span>
                <span>{{ order.user.email }}</span>
              </li>
              <li>
                <span class="me-4 fw-bold">地址：</span>
                <span>{{ order.user.address }}</span>
              </li>
              <li>
                <span class="me-4 fw-bold">電話：</span>
                <span>{{ order.user.tel }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12">
          <div class="border-custom pb-4">
            <h3 class="bg-primary text-secondary p-2 text-center">料理資訊</h3>
            <table class="mb-0 table align-middle table-borderless ">
              <thead>
                <tr >
                  <th>圖片</th>
                  <th>名稱</th>
                  <th>數量</th>
                  <th>小計</th>
                </tr>
              </thead>
              <tbody class="border-top border-bottom">
                <tr v-for="product in order.products" :key="product.id">
                  <td><img :src="product.product.imageUrl" :alt="`${product.product.title}的照片`"></td>
                  <td>{{ product.product.title }}</td>
                  <td>{{ product.qty }}</td>
                  <td>{{ Math.floor(product.final_total) }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="fs-5">
                  <td colspan="3" class="text-end">總計：</td>
                  <td>{{ Math.floor(order.total) }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.is-invalid {
  box-shadow: none;
}
.invalid-feedback{
  padding-inline-start: 8px;
}
button{
  height: 58px;
}
img{
  width: 50px;
  height: 50px;
  border: 2px solid var(--bs-primary);
  border-radius: .625rem;
  @media (min-width: 768px){
    width: 100px;
    height: 100px;
  }
}
</style>