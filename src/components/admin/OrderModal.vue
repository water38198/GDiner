<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as bootstrap from 'bootstrap';


const props = defineProps({
  order: {
    type: Object,
    required: true,
  },
})

const modalOrder = ref({...props.order});
watch(() => props.order, (newVal) => {
  modalOrder.value = { ...newVal };
});

const isLoading = ref(false);
const emit = defineEmits(['refresh']);
const modalRef = ref(null);
const confirmOrder = async () => {
  const { VITE_URL, VITE_PATH } = import.meta.env;
  try {
    isLoading.value = true;
    const response = await axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/admin/order/${modalOrder.value.id}`, { data: modalOrder.value });
    Swal.fire({
      icon: 'success',
      title: `${response.data.message}`,
      showConfirmButton: false,
      timer: 1500,
      didClose: () => {
        isLoading.value = false;
        emit('refresh');
        const modal = bootstrap.Modal.getInstance(modalRef.value);
        modal.hide();
      }
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
const isPhone = (value) => {
  const phoneNumber = /^(09)[0-9]{8}$/;
  return phoneNumber.test(value)? true : '請輸入正確的手機號碼';
}
</script>

<template>
  <div class="modal fade" id="OrderModal" tabindex="-1" aria-labelledby="OrderLabel" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-2 fw-bold" id="ProductModalLabel"> 編輯訂單</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <VForm @submit="confirmOrder" v-slot="{ errors }" id="OrderForm">
            <div class="container-fluid">
              <h4 class="text-center fs-4 fw-bold">客戶資料</h4>
              <div class="row gy-4" v-if='modalOrder.user'>
                <div class="col-12 col-md-6">
                  <label for="name" class="form-label">姓名</label>
                  <VField type="text" id="name" placeholder="請輸入姓名" v-model.trim="modalOrder.user.name" name="姓名"  rules="required" class="form-control" :class="{ 'is-invalid': errors['姓名'] }" />
                  <ErrorMessage name="姓名" class="invalid-feedback" />
                </div>
                <div class="col-12 col-md-6">
                  <label for="tel" class="form-label">電話</label>
                  <VField type="tel" id="tel" placeholder="請輸入電話" v-model.trim="modalOrder.user.tel" name="電話" class="form-control" :rules="isPhone" :class="{ 'is-invalid': errors['電話'] }" />
                  <ErrorMessage name="電話" class="invalid-feedback" />
                </div>
                <div class="col-12 col-md-6">
                  <label for="email" class="form-label">Email</label>
                  <VField type="email" id="email" placeholder="請輸入Email" v-model.trim="modalOrder.user.email" name="Email" rules="required|email" class="form-control" :class="{ 'is-invalid': errors['Email'] }" />
                  <ErrorMessage name="Email" class="invalid-feedback" />
                </div>
                <div class="col-12 col-md-6">
                  <label for="address" class="form-label">地址</label>
                  <VField type="address" id="address" placeholder="請輸入地址" v-model.trim="modalOrder.user.address" name="地址" rules="required" class="form-control" :class="{ 'is-invalid': errors['地址'] }" />
                  <ErrorMessage name="地址" class="invalid-feedback" />
                </div>
                <div class="col-12">
                  <h4>留言：</h4>
                  <p>{{ modalOrder.message }}</p>
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="is_paid" v-model="modalOrder.is_paid">
                    <label class="form-check-label" for="is_paid">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </VForm>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">取消</button>
          <button type="submit" class="btn btn-primary" form="OrderForm" :disabled="isLoading">送出</button>
        </div>
      </div>
    </div>
  </div>
</template>