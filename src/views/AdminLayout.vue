<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter, RouterView } from 'vue-router';
import Loading from 'vue-loading-overlay';
import AdminNavbar from '@/components/admin/AdminNavbar.vue';

const { VITE_URL } = import.meta.env;
const router = useRouter();
const isChecked = ref(false);
const isLoading = ref(false);
function checkAdmin() {
  isLoading.value = true;
  // 取出 token
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("myToken="))
    ?.split("=")[1];
  axios.defaults.headers.common.Authorization = token
  // 發出 check 請求，如果通過則取得產品，失敗則導回燈入頁
  axios.post(`${VITE_URL}/v2/api/user/check`)
    .then(() => {
      isChecked.value = true;
    }).catch(() => {
      isChecked.value = false;
      Swal.fire({
        title: "請重新登入",
        icon: "error",
        didClose: () => {
          router.push("/login");
        }
      })
    }).finally(() => {
      isLoading.value = false;
    })
}

onMounted(() => {
  checkAdmin();
})
</script>

<template>
  <Loading :active="isLoading" :full-page="true" />
  <div class="grid grid-cols-[20rem_1fr] gap-2 h-screen">
    <AdminNavbar />
    <div v-if="isChecked">
      <RouterView />
    </div>
  </div>
</template>