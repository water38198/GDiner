<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useDateFormat } from '@vueuse/core'
import OrderModal from '@/components/admin/OrderModal.vue';
import PaginationComponent from '@/components/front/PaginationComponent.vue';

const isLoading = ref(false);
const orders = ref([]);  
const pagination = ref({});
const getOrders = async () => {
  const { VITE_URL, VITE_PATH } = import.meta.env;
  try {
    isLoading.value = true;
    const response = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/orders`);
    orders.value = response.data.orders;
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
}
onMounted(() => {
  getOrders();
});

const tempOrder = ref({});
const openOrderModal = (order) => {
  tempOrder.value = { ...order };
}

const deleteOrder = (order) => {
  Swal.fire({
    title: `確定要刪除訂單${order.id}嗎？`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '確定',
    confirmButtonColor: '#d33',
    cancelButtonText: '取消',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        isLoading.value = true;
        const { VITE_URL, VITE_PATH } = import.meta.env;
        const response = await axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/admin/order/${order.id}`);
        Swal.fire({
          title: response.data.message,
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '錯誤',
          text: `${error.response.data.message || '請稍後再試'}`,
        });
      } finally {
        isLoading.value = false;
        getOrders();
      }
    }
  });
}

</script>

<template>
  <div class="position-relative container py-10">
    <VLoading :active="isLoading" :is-full-page="false"/> 
    <h2 class="text-center fw-bold">訂單管理</h2>
    <div class="table-responsive">
      <table class="table align-middle text-nowrap">
        <thead>
          <tr>
            <th>下單時間</th>
            <th>ID</th>
            <th>品項</th>
            <th>買家資訊</th>
            <th>留言</th>
            <th>總額</th>
            <th>付款</th>
            <th class="text-center">編輯</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="order in orders" :key="order.id">
            <td>{{ useDateFormat(order.create_at * 1000,'YYYY-MM-DD') }}</td>
            <td>{{ order.id }}</td>
            <td>
              <ol type="i">
                <li v-for="product in order.products" :key="product.id">
                  {{ product.product.title }} x {{ product.qty }}
                </li>
              </ol>
            </td>
            <td>
              <ul type="none">
                <li>姓名：{{ order.user.name}}</li>
                <li>電郵：{{ order.user.email}}</li>
                <li>電話：{{ order.user.tel}}</li>
                <li>用餐：{{ order.user.type}}</li>
                <li>日期：{{ order.user.reservation_date}}</li>
                <li>時間：{{ order.user.reservation_time}}</li>
              </ul>
            </td>
            <td class="order-message">{{ order.message }}</td>
            <td class="text-center"> {{ Math.floor(order.total) }} </td>
            <td class="text-center">
              <span class="text-success" v-if="order.is_paid">已付款</span>
              <span class="text-danger" v-else>尚未付款</span>
            </td>
            <td>
              <div class="btn-group" role="group" aria-label="edit button group">
                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#OrderModal" @click="openOrderModal(order)">編輯</button>
                <button type="button" class="btn btn-outline-danger" @click="deleteOrder(order)">刪除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <PaginationComponent v-if="pagination.total_pages > 1" :pagination :change-page="getOrders"/>
  </div>
  <OrderModal :order="tempOrder"/>
</template>

<style scoped lang="scss">
ol, ul {
  padding-left: 0;
  list-style-position: inside;
}

.order-message {
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

