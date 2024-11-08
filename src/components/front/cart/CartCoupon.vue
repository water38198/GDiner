<script setup>
import { ref, watch, computed } from 'vue';
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

const props = defineProps({
  userForm: {
    type: Object,
    required: true,
  }
});
const userForm = ref(props.userForm);
watch(() => props.userForm, (value) => {
  userForm.value = value;
});
const shipping = computed(() => {
  let total = 0;
  if (userForm.value.user.type === '外帶') total = 60;
  if (cartStore.cart.final_total >= 1000) total = 0;
  return total;
});
</script>

<template>
  <div class="position-relative">
    <VLoading :active="isLoading" :is-full-page="false" />
    <div class="coupon mb-8">
      <p v-show="!isShow" class="text-end"><a class="text-decoration-underline link-opacity-75-hover" href="#" @click.prevent="toggleShow">優惠券</a></p>
      <div v-show="isShow">
        <VForm v-slot="{ errors }" @submit="submitCoupon(coupon)" autocomplete="off" class="d-flex gap-2 justify-content-end">
          <div>
            <VField type="text" class="form-control border-custom" :class="{ 'is-invalid': errors['優惠券'] }" name="優惠券" id="優惠券" rules="required" placeholder="請輸入優惠券代碼" v-model="coupon"/>
            <ErrorMessage name="優惠券" class="invalid-feedback" />
          </div>
          <button class="btn btn-outline-primary text-nowrap" type="submit">使用</button>
        </VForm>
      </div>
    </div>
    <div v-if="cartStore.cart.carts[0].coupon" class="text-end">
      <p>已套用優惠券：{{ cartStore.cart.carts[0].coupon.code }}</p>
      <p class="text-danger">折扣金額： {{cartStore.cart.final_total - cartStore.cart.total }}</p>
    </div>
    <p class="text-end">餐點總額：{{ cartStore.cart.final_total }}</p>
    <p class="text-end">運費：{{ shipping }}</p>
    <h3 class="pb-4 text-end">總計：$ {{ cartStore.cart.final_total + shipping }}</h3>
  </div>
  <hr>
</template>

<style scoped lang="scss">
.coupon {
  max-width: 400px;
  margin-inline-start: auto;
}
</style>