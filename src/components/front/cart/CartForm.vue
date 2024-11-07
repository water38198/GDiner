<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useCartStore } from '@/stores/cartStore';
import CartCoupon from './CartCoupon.vue';

const userForm = ref({
  user: {
    email: '',
    name: '',
    tel: '',
    address: '阿橘飯店',
    type: '內用',
    seat_number: '',
  },
  message: '',
});
const formRef = ref(null);
const isPhone = (value) => {
  const phoneNumber = /^(09)[0-9]{8}$/;
  return phoneNumber.test(value) ? true : "請輸入正確的電話號碼";
}

const isLoading = ref(false);
const cartStore = useCartStore();
const submitOrder = async () => {
  const { VITE_URL, VITE_PATH } = import.meta.env;

  try {
    isLoading.value = true;
    const response = await axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/order`, { data: userForm.value });
    formRef.value.resetForm();
    Swal.fire({
      icon: 'success',
      title: `${response.data.message}`,
      text: `感謝您的訂購，訂單號碼： ${response.data.orderId}`,
      confirmButtonColor: '#3D081B',
    });
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '錯誤',
      text: `${error.response.data.message}`,
      confirmButtonColor: '#3D081B',
    });
  } finally {
    isLoading.value = false;
    cartStore.getCart();
  }
}
</script>

<template>
  <div class="position-relative container">
    <VLoading :active="isLoading" :is-full-page="false"/>
    <VForm v-slot="{ errors }" @submit="submitOrder" autocomplete="off" ref="formRef">
      <div class="container">
        <div class="mb-8 row gy-8">
          <div class="col-12 col-md-8">
            <h3 class="mb-8 fw-bold">顧客資訊</h3>
            <div class="row gy-8">
              <div class="col-12">
                <div class="form-floating">
                  <VField type="email" name="Email" id="email" class="form-control border-custom" :class="{ 'is-invalid': errors['Email'] }" placeholder="請輸入 Email" rules="required|email" v-model="userForm.user.email"/>
                  <label for="email">Email</label>
                  <ErrorMessage name="Email" class="invalid-feedback"/>
                </div>
              </div>
              <div class="col-6">
                <div class="form-floating">
                  <VField type="text" name="姓名" id="name" class="form-control border-custom" :class="{ 'is-invalid': errors['姓名'] }" rules="required"
                    placeholder="請輸入 姓名" v-model="userForm.user.name" />
                  <label for="姓名">姓名</label>
                  <ErrorMessage name="姓名" class="invalid-feedback"/>
                </div>
              </div>
              <div class="col-6">
                <div class="form-floating">
                  <VField type="tel" name="電話" id="tel" class="form-control border-custom" :class="{ 'is-invalid': errors['電話'] }" :rules="isPhone"
                    placeholder="請輸入 電話" v-model="userForm.user.tel" />
                  <label for="tel">電話</label>
                  <ErrorMessage name="電話" class="invalid-feedback"/>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <VField as="textarea" name="userForm.message" id="message" cols="30" rows="10" class="form-control border-custom" v-model="userForm.message" placeholder="請輸入留言" />
                  <label for="message">備註</label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <h3 class="mb-8 fw-bold">用餐方式</h3>
            <div class="border-custom p-4 fs-5">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="type" id="here" value="內用" checked v-model="userForm.user.type" />
                <label class="form-check-label" for="here">內用</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="type" id="to_go" value="外帶" v-model="userForm.user.type">
                <label class="form-check-label" for="to_go">外帶</label>
              </div>
            </div>
            <div v-if="userForm.user.type === '內用'" class="mt-4">
              <div class="form-floating">
                <VField type="number" name="座位號碼" id="seat_number" class="form-control border-custom" :class="{ 'is-invalid': errors['座位號碼'] }" placeholder="請輸入座位號碼" list="list" v-model="userForm.user.seat_number" rules="required" />
                <label for="seat_number">座位號碼</label>
                <ErrorMessage name="座位號碼" class="invalid-feedback"/>
                <datalist id="list">
                  <option v-for="i in 10" :key="i" :value="i" ></option>
                </datalist>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary btn-lg">結帳</button>
        </div>
      </div>
    </VForm>
    <hr>
    <CartCoupon :user-form="userForm"/>
  </div>
</template>

<style scoped lang="scss">

textarea {
  height: 300px !important;
  @media screen and (max-width: 768px) {
    height: 200px !important;
  }
}

[type="number"]{
  appearance: none;
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
}
</style>