<script>
import { mapActions } from 'pinia';
import { useCartStore } from '@/stores/cartStore';

export default {
  props: {
    cart: {
      type: Object,
      required:true,
    }
  },
  methods: {
    ...mapActions(useCartStore,['updateCart', 'deleteCart']),
  }
}
</script>
<template>
  <div class="table-responsive">
    <table class="table align-middle">
      <thead>
        <tr>
          <th class="text-left th-product" scope="col">料理</th>
          <th scope="col">數量</th>
          <th scope="col" class="text-end">小計</th>
          <th scope="col">刪除</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="product in cart.carts" :key="product.id">
          <td>
            <div class="d-flex gap-4">
              <img :src="product.product.imageUrl" :alt="`${product.product.title}的照片`" class="product-image border border-primary rounded-3">
              <div>
                <div class="opacity-75 fs-5 mb-3">
                  <RouterLink :to="`/product/${product.product.id}`">{{ product.product.title }}</RouterLink>
                </div>
                <p class="opacity-50">NT${{ product.product.price }}</p>
              </div>
            </div>
          </td>
          <td>
            <div class=" d-flex justify-content-between border-custom quantity-input">
              <button type="button" class="d-block px-4 bg-transparent border-0"
                @click="product.qty - 1 > 0 ? product.qty-- : ''; updateCart(product);">
                <i class="bi bi-dash fs-4"></i>
              </button>
              <input type="number" id="quantity" :value="product.qty"
                class="d-block bg-transparent border-0 appearance-none outline-0  text-center"
                min="1" @change="updateCart(product, $event)">
              <button type="button" class="d-block px-4 bg-transparent border-0"
                @click="product.qty++; updateCart(product);">
                <i class="bi bi-plus fs-4"></i>
              </button>
            </div>
          </td>
          <td class="text-end">
            <span>NT$ {{ Math.floor(product.final_total) }}</span>
          </td>
          <td class="text-end">
            <button type="button" @click="deleteCart(product.id)"><i class="bi bi-trash fs-4"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped lang="scss">
th {
  color:var(--bs-primary);
  opacity: .6;
}

th,td{
  text-wrap: nowrap;
  padding-block: 1rem;
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
  appearance: none;
}

.th-product{
  min-width: 300px;
  width: 60%
}

.product-image{
  width: 100px;
  height: 120px;
}
td a:hover{
  text-decoration: underline;
  text-underline-offset: 4px;
}
.quantity-input{
  width: fit-content;
  input{
    width: 50px;
    @media (min-width: 768px) {
      width: 100px;
    }
    height: 50px;
    &:focus{
      outline: 0;
    }
  }
}
</style>