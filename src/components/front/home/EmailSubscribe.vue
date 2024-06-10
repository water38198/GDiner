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
  <div class="customBorder-xl rd-3 text-center pt-10 pb-12">
    <h2 class="mb-5 font-size-12 tracking-widest">
      訂閱我們
    </h2>
    <p class="lh-normal px-4 mb-5">現在就訂閱，您將能享受到獨家的優惠和菜單更新，與我們一同開啟美味之旅吧！</p>
    <div class="flex justify-center">
      <div class="custom-input-group">
        <input type="email" id="search" placeholder="請輸入Email" autocomplete="off" v-model.trim="email">
        <label for="search">Email</label>
        <button type="button"
          class="absolute right-2 top-1/2 translate-y--1/2 bg-transparent border-0 outline-0 px-2 font-size-6 text-primary cursor-pointer"
          @click="subscribe">
          <div class="i-material-symbols:arrow-right-alt"></div>
        </button>
      </div>
    </div>
  </div>
</section>
</template>
