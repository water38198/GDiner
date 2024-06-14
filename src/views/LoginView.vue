<script>
const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      isLoading: false,
    }
  },
  methods: {
    async login() {
      if (this.user.username === '' || this.user.password === '') {
        this.$swal({
          icon: 'warning',
          title: '請正確填寫資訊',
        });
        return;
      }
      this.isLoading = true;
      try {
        const res = await this.$http.post(`${VITE_URL}/v2/admin/signin`, this.user);
        const { expired, token } = res.data;
        document.cookie = `myToken = ${token}; expires = ${new Date(expired)} `;
        this.$swal({
          showConfirmButton: false,
          icon: "success",
          title: "登入成功",
          timer: 1000,
          didClose: () => {
            this.$router.replace('/admin/products');
          }
        })
      } catch (err) {
        this.$swal({
          title: "登入失敗",
          icon: "error",
          text: `${err?.response.data.error.message || ""}`
        })
      } finally {
        this.isLoading = false;
      }
    }
  }
}
</script>

<template>
  <VLoading :active="isLoading" :full-page="true" />
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
