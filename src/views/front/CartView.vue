<script>
import { mapActions,mapState } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
import CartTable from '@/components/front/cart/CartTable.vue';
import CartCoupon from '@/components/front/cart/CartCoupon.vue';
import CartForm from '@/components/front/cart/CartForm.vue';
import RandomProduct from '@/components/front/RandomProduct.vue';

export default {
  components: { RandomProduct, CartTable, CartCoupon, CartForm },
  computed: {
    ...mapState(useCartStore, ['cart', 'cartLoading']),
    excludeList() {
      const list = [];
      if (this.cart.carts) {
        this.cart.carts.forEach(product => list.push(product.product.id));
      };
      return list;
    },
  },
  methods: {
    ...mapActions(useCartStore, ['getCart', 'deleteCartAll']),
  }
}
</script>
<template>
  <div class="container px-2 py-5 py-md-10">
    <VLoading :active="cartLoading"/>
    <div class="mb-5 mb-md-10">
      <!-- 購物車有東西 -->
      <div v-if="cart.carts?.length > 0" data-aos='fade-up'>
        <div class="d-flex justify-content-between align-items-center pb-2 pb-md-8">
          <h2 class="fs-3 fs-md-1">購物車</h2>
          <button type="button" class="bg-transparent border-0 text-decoration-underline text-offset-4"
            @click="deleteCartAll">清空購物車</button>
        </div>
        <CartTable :cart/>
        <CartCoupon :cart @get-cart="getCart"/>
        <CartForm :cart @get-cart="getCart"/>
      </div>
      <!-- 購物車為空 -->
      <div class="text-center py-20" v-else-if="cart.carts && cart.carts?.length === 0">
        <h2 class="mb-7">
          目前購物車為空 (´⊙ω⊙`)
        </h2>
        <div class="text-center">
          <RouterLink to="/products" class="btn btn-info px-5 py-3">趕緊購物去</RouterLink>
        </div>
      </div>
    </div>
    <RandomProduct :exclude="excludeList" />
  </div>
</template>