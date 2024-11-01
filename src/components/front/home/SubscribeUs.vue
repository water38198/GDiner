<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';
const email = ref('');
const subscribeEmail = () => {
  Swal.fire({
    title: '訂閱成功',
    text: '感謝您的訂閱',
    icon: 'success',
    confirmButtonText: '確認',
    confirmButtonColor: '#3D081B',
  });
  email.value = '';
};
</script>

<template>
  <section class="mb-10 border-custom text-center px-4 py-10" data-aos="zoom-in">
    <h2 class="mb-4 fs-1 fw-bold">訂閱我們</h2>
    <p>現在就訂閱，您將能享受到獨家的優惠和菜單更新，與我們一同開啟美味之旅吧！</p>
    <VForm v-slot="{ errors }" @submit="subscribeEmail" class="mx-auto w-md-75 w-lg-50">
      <div class="row row-gap-8">
        <div class="col-12 col-md-9">
          <div class="form-floating">
            <VField type="email" id="Email" name="Email" class="form-control border-custom" :class="{ 'is-invalid': errors['Email'] }"
            autocomplete="off" placeholder="請輸入您的Email" v-model.trim="email" rules="email"/>
            <label for="email">Email</label>
            <ErrorMessage name="Email" class="invalid-feedback position-absolute text-start ps-2"/>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <button type="submit" class="d-inline-block w-100 h-100 btn btn-primary py-3" :disabled="!email">訂閱</button>
        </div>
      </div>
    </VForm>
  </section>
</template>

<style>
.btn:hover{
  opacity: 0.8;
}
</style>