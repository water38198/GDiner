<script setup>
import { ref, watch, computed } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as bootstrap from 'bootstrap';
import { useDateFormat, useNow } from '@vueuse/core';


const props = defineProps({
  coupon: {
    type: Object,
    default: () => ({}),
  },
  isNew: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['refresh']);

const isLoading = ref(false);
const title = computed(() => (props.isNew ? '新增優惠券' : '編輯優惠券'));
const modalCoupon = ref({ ...props.coupon }); 

const today = useDateFormat(useNow(), 'YYYY-MM-DD');
const dueDate = ref('');

watch(() => props.coupon, (newVal) => {
  modalCoupon.value = { ...newVal };
  if (modalCoupon.value.due_date) {
    dueDate.value = useDateFormat(modalCoupon.value.due_date * 1000, 'YYYY-MM-DD').value;
  } else {
    dueDate.value = today.value;
  }
  
});

const modalRef = ref(null);
const confirmCoupon = async () => {
  const { VITE_URL, VITE_PATH } = import.meta.env;
  const method = props.isNew ? 'post' : 'put';
  const url = props.isNew ? `${VITE_URL}/v2/api/${VITE_PATH}/admin/coupon` : `${VITE_URL}/v2/api/${VITE_PATH}/admin/coupon/${modalCoupon.value.id}`;
  isLoading.value = true;
  modalCoupon.value.due_date = new Date(dueDate.value).getTime() / 1000;
  try {
    const response = await axios[method](url, { data: modalCoupon.value });
    const modal = bootstrap.Modal.getInstance(modalRef.value);
    Swal.fire({
      title: response.data.message,
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
      didClose: () => {
        modal.hide();
        emit('refresh');
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
};
</script>

<template>
  <div class="modal fade" id="CouponModal" tabindex="-1" aria-labelledby="CouponLabel" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content position-absolute">
        <VLoading :active="isLoading" :is-full-page="false"/>
        <div class="modal-header">
          <h1 class="modal-title fs-2" id="CouponModalLabel"> {{ title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <VForm @submit="confirmCoupon" v-slot="{ errors }" id="couponForm">
            <div class="container-fluid">
              <div class="row gy-4">
                <div class="col-12 col-md-6">
                  <label for="name" class="form-label">名稱：</label>
                  <VField type="text" id="name" name="名稱" rules="required" placeholder="請輸入名稱" v-model.trim="modalCoupon.title" class="form-control" :class="{ 'is-invalid': errors['名稱'] }" />
                  <ErrorMessage name="名稱" class="invalid-feedback" />
                </div>
                <div class="col-12 col-md-6">
                  <label for="code" class="form-label">優惠碼：</label>
                  <VField type="text" id="code" name="優惠碼" rules="required" placeholder="請輸入優惠碼" class="form-control" :class="{ 'is-invalid': errors['優惠碼'] }" v-model.trim="modalCoupon.code" />
                  <ErrorMessage name="優惠碼" class="invalid-feedback" />
                </div>
                <div class="col-12 col-md-6">
                  <label for="due_date" class="form-label">到期日：</label>
                  <VField type="date" id="due_date" name="到期日" rules="required" pattern="yyyy-MM-dd" class="form-control" :class="{ 'is-invalid': errors['到期日'] }" :min="today" v-model="dueDate"/>
                  <ErrorMessage name="到期日" class="invalid-feedback" />
                </div>
                <div class="col-12 col-md-6">
                  <label for="percent" class="form-label">折扣比例：</label>
                  <VField type="number" id="percent" placeholder="請輸入折扣百分比" name="折扣比例" rules="required||max_value:100||min_value:0" v-model.number="modalCoupon.percent" min="0" class="form-control" :class="{ 'invalid': errors['折扣比例'] }" max="100" />
                  <ErrorMessage name="折扣比例" class="invalid-feedback" />
                </div>
                <div class="col-12">
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" v-model="modalCoupon.is_enabled" id="is_enabled" :true-value="1" :false-value="0">
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </VForm>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="submit" class="btn btn-primary" form="couponForm" :disabled="isLoading">送出</button>
        </div>
      </div>
    </div>
  </div>
</template>