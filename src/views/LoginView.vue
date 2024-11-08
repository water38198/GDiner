<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

const isLoading = ref(false);
const user = ref({
  username: '',
  password: '',
});

const { VITE_URL } = import.meta.env;
const router = useRouter();
const submitLogin = async() => {
  try {
    isLoading.value = true;
    const response = await axios.post(`${VITE_URL}/v2/admin/signin`, user.value);
    const { expired, token } = response.data;
    document.cookie = `RGToken = ${token}; expires = ${new Date(expired)};path=/; `;
    Swal.fire({
      icon: 'success',
      title: '登入成功',
      text: '歡迎回來',
      confirmButtonColor: '#3D081B',
    });
    router.push({ name: 'admin' });
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: error.response.data.message,
      text: 'Email 或是密碼錯誤',
      confirmButtonColor: '#3D081B',
    })
  } finally {
    isLoading.value = false;
  }
};

</script>

<template>
  <VLoading :active="isLoading" />
  <main class="container min-vh-100 content-center py-10 ">
    <div class="login-container mx-auto border-custom">
      <VForm v-slot="{errors}" @submit="submitLogin" class="p-4">
        <h1 class="mb-8 fw-bold text-center">後台登入</h1>
        <div class="mb-8 form-floating">
          <VField type="email" id="email" name="email" class="form-control border-custom" :class="{ 'is-invalid': errors['email'] }" autocomplete="off" placeholder="Email address" v-model="user.username" rules="required|email" />
          <label for="email">Email</label>
          <ErrorMessage name="email" class="invalid-feedback"/>
        </div>
        <div class="mb-8 form-floating">
          <VField type="password" id="password" name="password" class="form-control border-custom" :class="{ 'is-invalid': errors['password'] }" placeholder="Password" v-model="user.password" rules="required" />
          <label for="password" class="">Password</label>
          <ErrorMessage name="password" class="invalid-feedback"/>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary btn-lg">登入</button>
        </div>
      </VForm>
      
    </div>
  </main>
</template>

<style>
.login-container{
  max-width: 500px;
}
</style>