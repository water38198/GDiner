<script>
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  props: {
    cart: {
      type: Object,
      required:true,
    },
  },
  data() {
    return {
      coupon:'',
    }
  },
  methods: {
    async useCoupon() {
      if (this.coupon) {
        try {
          const res = await this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/coupon`, {
            data: {
              'code': this.coupon,
            }
          });
          this.$swal({
            icon: 'success',
            title: `${res.data.message}`,
            toast: true,
            position: 'bottom-end',
            timer: 1500,
            showConfirmButton: false,
          });
          this.coupon = '';
          this.getCart();
        } catch (err) {
        this.$swal({
          icon: 'error',
          title: `${err.response.data.message}`
        })
      }
      } 
    },
  }
}
</script>

<template>
  <div class="d-sm-flex border-2 border-primary border-bottom py-4 mb-4">
    <RouterLink to="/products" class="d-block text-decoration-underline text-offset-4 text-center me-4 mb-10">
      繼續購物
    </RouterLink>
    <div class="ms-auto">
      <div>
        <div class="input-group mb-4">
          <div class="form-floating">
            <input type="text" name="coupon" id="coupon"
              class="bg-secondary form-control border border-2 border-primary" placeholder="請輸入 優惠券"
              v-model.trim="coupon">
            <label for="coupon">優惠券</label>
          </div>
          <button type="button" class="btn border-2 btn-outline-primary" @click="useCoupon">使用</button>
        </div>
        <template v-if="cart.carts[0].coupon">
          <div class="mb-4 text-end">
            <p class="mb-2">已套用優惠券代碼：{{ cart.carts[0].coupon.code }}
            </p>
            <p>折扣金額： -{{ Math.floor(cart.total - cart.final_total) }}</p>
          </div>
        </template>
      </div>
      <div>
        <div class="d-flex justify-content-end align-items-center">
          <h3 class="me-5 mb-0">總計</h3>
          <p class="text-primary fs-5 mb-0" v-if="cart.total == cart.final_total">NT$ {{ cart.total }}
          </p>
          <p class="text-red-500 fs-5 mb-0" v-else>NT${{ Math.floor(cart.final_total) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>