<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();

const coupon = ref('');

const isShow = ref(false);
const toggleShow = () => {
  isShow.value = !isShow.value;
}

const isLoading = ref(false);  
const submitCoupon = async (coupon) => {
  isLoading.value = true;
  await cartStore.submitCoupon(coupon);
  isLoading.value = false;
}

</script>

<template>
  <div class="position-relative">
    <VLoading :active="isLoading" :is-full-page="false" />
    <div class="coupon mb-8">
      <p v-show="!isShow" class="text-end"><a class="text-decoration-underline link-opacity-75-hover" href="#" @click.prevent="toggleShow">優惠券</a></p>
      <div v-show="isShow">
        <VForm v-slot="{ errors }" @submit="submitCoupon(coupon)" autocomplete="off" class="d-flex gap-2 justify-content-end">
          <div>
            <input type="text" class="form-control border-custom" :class="{ 'is-invalid': errors['優惠券'] }" name="優惠券" id="優惠券" rules="required" placeholder="請輸入優惠券代碼" v-model="coupon"/>
          </div>
          <button class="btn btn-outline-primary text-nowrap" type="submit">使用</button>
        </VForm>
      </div>
    </div>
    <div v-if="cartStore.cart.carts[0].coupon" class="text-end">
      <p>已套用優惠券：{{ cartStore.cart.carts[0].coupon.code }}</p>
      <p>餐點總價： {{ cartStore.cart.total }}</p>
      <p class="text-danger">折扣金額： {{ Math.floor(cartStore.cart.final_total - cartStore.cart.total) }}</p>
    </div>
    <h3 class="pb-4 text-end">總計：$ {{ Math.floor(cartStore.cart.final_total) }}</h3>
  </div>
  <hr>
</template>

<style scoped lang="scss">
.coupon {
  max-width: 400px;
  margin-inline-start: auto;
}
</style>