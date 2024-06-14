<!-- <script setup>
import AdminNavbar from '@/components/admin/AdminNavbar.vue';


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
</script> -->
<script>
import AdminNavbar from '@/components/admin/AdminNavbar.vue';

const { VITE_URL } = import.meta.env;

export default {
  components:{ AdminNavbar},
  data() {
    return {
      isChecked: false,
      isLoading: false,
    }
  },
  methods: {
    async checkLogin() {
      this.isLoading = true;
      const token = document.cookie.split("; ").find((row) => row.startsWith("myToken="))?.split("=")[1];
      this.$http.defaults.headers.common.Authorization = token;
      try {
        const res = await this.$http.post(`${VITE_URL}/v2/api/user/check`);
        if (res.data.success) {
          this.isChecked = true;
          this.$swal({
            position: 'bottom-end',
            toast: true,
            icon: 'success',
            title: '驗證成功',
            showConfirmButton: false,
            timer: 1500,
          });
        };
      } catch (err) {
        this.isChecked = false;
        this.$swal({
          title: '請重新登入',
          icon: "error",
          text: `${err.response.data.message || '登入錯誤'}`,
          didClose: () => {
            this.$router.push('/login');
          }
        })
      } finally {
        this.isLoading = false;
      }
    }
  },
  mounted() {
    this.checkLogin();
  }
}
</script>


<template>
  <VLoading :active="isLoading" :full-page="true" />
  <div class="grid grid-cols-[20rem_1fr] gap-2 h-screen">
    <AdminNavbar />
    <div v-if="isChecked">
      <RouterView />
    </div>
  </div>
</template>