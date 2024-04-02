<script setup>
import { ref } from 'vue'

import { useRouter } from 'vue-router'
import axios from 'axios'
import Swal from 'sweetalert2'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const { VITE_URL } = import.meta.env;
const router = useRouter();
const user = ref({
  username: "",
  password: ""
});
const isLoading = ref(false);

function login() {
  // 未正確填寫則跳出警示
  if (user.value.username === "" || user.value.password === "") {
    Swal.fire({
      icon: "warning",
      title: "請正確填寫資訊"
    })
    return
  }
  isLoading.value = true;
  axios.post(`${VITE_URL}/v2/admin/signin`, user.value)
    .then(res => {
      const { expired, token } = res.data;
      document.cookie = `myToken = ${token}; expires = ${new Date(expired)} `;
      Swal.fire({
        showConfirmButton: false,
        icon: "success",
        title: "登入成功",
        timer: 1000,
        didClose: () => {
          router.replace("/admin")
        }
      })
    }).catch(err => {
      Swal.fire({
        title: "登入失敗",
        icon: "error",
        text: `${err?.response.data.error.message || ""}`
      })
    }).finally(() => {
      isLoading.value = false;
    })
}
</script>

<template>
  <Loading :active="isLoading" :full-page="true"></Loading>
  <main>
    <div class="container">
      <form action="" ref="loginForm" class="max-w-100 mx-auto pt-20">
        <h1 class="text-center font-size-12 mb-8 font-medium">登入</h1>
        <div class="custom-input-group mb-4">
          <input type="email" id="email" placeholder="Email address" v-model="user.username">
          <label for="email">Email
            address</label>
        </div>
        <div class="custom-input-group mb-4 position-relative">
          <input type="password" id="password" placeholder="Password" v-model="user.password" @keyup.enter="login">
          <label for="password">Password</label>
        </div>
        <button type="button" @click="login"
          class="block w-100% text-white bg-primary  hover:bg-primary-light border-0 rd-3 px-4 py-2 font-size-5 cursor-pointer">登入</button>
      </form>
    </div>
  </main>
</template>
