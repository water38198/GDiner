<script setup>
import { RouterLink } from 'vue-router';
import { useCartStore } from '@/stores/cartStore';
import { storeToRefs } from 'pinia';

import CartTable from '@/components/front/cart/CartTable.vue';
import CartCoupon from '@/components/front/cart/CartCoupon.vue';
import CartForm from '@/components/front/cart/CartForm.vue';
const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

</script>

<template>
  <div class="position-relative container py-8 min-vh-75">
    <template v-if="cart.carts?.length > 0">
      <CartTable />
      <CartCoupon />
      <CartForm />
    </template>
    <template v-else-if="cart.carts && cart.carts?.length === 0">
      <div class="text-center h-75">
        <h2 class="mb-8 text-center">目前購物車為空 (´⊙ω⊙`)</h2>
        <RouterLink to="/products" class="btn btn-info px-5 py-3">趕緊購物去</RouterLink>
      </div>
    </template>
  </div>
</template>

