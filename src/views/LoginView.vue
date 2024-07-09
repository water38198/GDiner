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
    async handleLogin() {
      if (!this.user.username || !this.user.password ) {
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
        document.cookie = `myToken = ${token}; expires = ${new Date(expired)};path=/; `;
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
          text: `${err?.response.data.error.message || "發生錯誤"}`
        })
      } finally {
        this.isLoading = false;
      }
    }
  },
  mounted() {
    document.cookie = 'myToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;';
  }
}
</script>

<template>
  <VLoading :active="isLoading" />
  <main>
    <div class="container">
      <div class="row">
        <VForm class="col-10 col-md-6 mx-auto pt-20" v-slot="{errors}" @submit="handleLogin">
          <h1 class="text-center fs-1 mb-8">後台登入</h1>
          <div class="form-floating mb-4">
            <VField type="email" id="email" name="email" class="form-control border-custom" :class="{ 'is-invalid': errors['email'] }" autocomplete="off" placeholder="Email address" v-model="user.username" rules="required|email" />
            <label for="email">Email</label>
            <ErrorMessage name="email" class="invalid-feedback ps-3"/>
          </div>
          <div class="form-floating mb-4">
            <VField type="password" id="password" name="password" class="form-control border-custom" :class="{ 'is-invalid': errors['password'] }" placeholder="Password" v-model="user.password" @keyup.enter="handleLogin" rules="required" />
            <label for="password" class="">Password</label>
            <ErrorMessage name="password" class="invalid-feedback ps-3"/>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary px-4 py-2 fs-5">登入</button>
          </div>
        </VForm>
      </div>
    </div>
  </main>
</template>
