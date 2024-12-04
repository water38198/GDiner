<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useDateFormat } from '@vueuse/core'
import CouponModal from '@/components/admin/CouponModal.vue';
import PaginationComponent from '@/components/front/PaginationComponent.vue';

const coupons = ref([]);
const isLoading = ref(false);
const pagination = ref({});
const getCoupons = async () => {
  const { VITE_URL, VITE_PATH } = import.meta.env;
  try {
    isLoading.value = true;
    const response = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/coupons`);
    coupons.value = response.data.coupons;
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
  getCoupons();
});

const tempCoupon = ref({}); 
const isNew = ref(true);
const addNewCoupon = () => {
  isNew.value = true;
  tempCoupon.value = {
    is_enabled: 1,
  };
};

const editCoupon = (coupon) => {
  isNew.value = false;
  tempCoupon.value = { ...coupon };
};

const deleteCoupon = (coupon) => {
  Swal.fire({
    title: `確定要刪除優惠券${coupon.title}嗎？`,
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
        const response = await axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/admin/coupon/${coupon.id}`);
        Swal.fire({
          title: response.data.message,
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          didClose: () => {
            getCoupons();
          },
        });
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
  });
};
</script>

<template>
  <div class="position-relative container min-vh-100 py-10 ">
    <VLoading :active="isLoading" :is-full-page="false"/>
    <h2 class="text-center fw-bold">優惠券</h2>
    <div class="mb-8 text-end">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#CouponModal" @click="addNewCoupon">建立優惠券</button>
    </div>
    <div class="table-responsive">
      <table class="table align-middle text-nowrap">
        <thead>
          <tr>
            <th>名稱</th>
            <th>優惠碼</th>
            <th>到期日</th>
            <th>折扣</th>
            <th>啟用</th>
            <th class="text-end">編輯</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="coupon in coupons" :key="coupon.id">
            <td>{{ coupon.title}}</td>
            <td>{{ coupon.code }}</td>
            <td>{{ useDateFormat(coupon.due_date * 1000,'YYYY-MM-DD') }}</td>
            <td>{{ coupon.percent }}</td>
            <td>
              <span class="text-success" v-if="coupon.is_enabled">啟用</span>
              <span class="text-danger" v-else>未啟用</span>
            </td>
            <td class="text-end">
              <div class="btn-group text-nowrap" v-if="coupon.title !=='RGDiner'">
                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#CouponModal"  @click="editCoupon(coupon)">編輯</button>
                <button type="button" class="btn btn-outline-danger" @click="deleteCoupon(coupon)">刪除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <PaginationComponent :pagination="pagination" @change-page="getCoupons" v-if="pagination.total_pages > 1"/>
  </div>
  <CouponModal :coupon="tempCoupon" :is-new="isNew" @refresh="getCoupons"/>
</template>