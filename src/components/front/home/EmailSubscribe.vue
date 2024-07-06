<script>
export default {
  data() {
    return {
      email:'',
    }
  },
  methods: {
    subscribe() {
      if (this.email) {
        this.$swal({
          icon: 'success',
          title: '訂閱成功',
          text: '有任何獨家的優惠和菜單更新會馬上通知您！',
          // confirmButtonColor: '#910F3F'
        });
      } else {
        this.$swal({
          icon: 'error',
          title: '請輸入正確的 Email',
        })
      }
      this.email = '';
    }
  }
}
</script>
<template>
  <section class="mb-16">
  <div class="custom-border custom-border-large text-center pt-10 pb-12">
    <h2 class="mb-5 fs-1">
      訂閱我們
    </h2>
    <p class="lh-normal px-4 mb-5">現在就訂閱，您將能享受到獨家的優惠和菜單更新，與我們一同開啟美味之旅吧！</p>
    <VForm class="d-flex justify-content-center" @submit="subscribe">
      <div class="form-floating w-80 w-md-50 w-lg-25 me-3">
        <VField type="email" name="email" rules="email" class="form-control custom-border bg-secondary" id="email" placeholder="請輸入Email" autocomplete="off" v-model.trim="email" />
        <label for="email">Email</label>
        <ErrorMessage name="email" class="position-absolute start-0 text-danger"/>
      </div>
      <button type="submit" class="btn btn-primary px-md-5">訂閱</button>
    </VForm>
  </div>
  </section>
</template>