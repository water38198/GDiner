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
  <div class="border-custom border-custom-large text-center pt-10 pb-12">
    <h2 class="mb-5 fs-1">
      訂閱我們
    </h2>
    <p class="lh-normal px-4 mb-5">現在就訂閱，您將能享受到獨家的優惠和菜單更新，與我們一同開啟美味之旅吧！</p>
    <VForm class="row gy-4 mx-4"  v-slot="{ errors }" @submit="subscribe">
      <div class="col-sm-9">
        <div class="form-floating w-80 w-md-50 w-lg-25">
            <VField type="email" id="email" name="email" class="form-control border-custom" :class="{ 'is-invalid': errors['email'] }" autocomplete="off" placeholder="Email address" v-model.trim="email" rules="email" />
            <label for="email">Email</label>
            <ErrorMessage name="email" class="invalid-feedback ps-3"/>
        </div>
      </div>
      <div class=" col-sm-3 mx-auto">
        <div>
          <button type="submit" class="w-100 py-3 py-sm-4 btn btn-primary text-nowrap">訂閱</button>
        </div>

      </div>
    </VForm>
  </div>
  </section>
</template>