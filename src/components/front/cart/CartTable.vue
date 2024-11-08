<script setup>
import { useCartStore } from '@/stores/cartStore';
import { storeToRefs } from 'pinia';

const cartStore = useCartStore();
const { cart, cartLoading } = storeToRefs(cartStore);
const {clearCart ,deleteCartItem, updateCartItem} = useCartStore();
const changeQty = (cartItem, event) => {
  let number = parseInt(event.target.value) < 1 || isNaN(parseInt(event.target.value)) ? 1 : parseInt(event.target.value);
  updateCartItem(cartItem, number);
}
</script>

<template>
  <div class="position-relative">
    <VLoading :active="cartLoading" :is-full-page="false"/>
    <div class="d-flex justify-content-between align-items-center">
      <h2 class="fw-bold">購物車</h2>
      <button type="button" class="bg-transparent border-0 text-primary text-decoration-underline" @click="clearCart">清空購物車</button>
    </div>
    <table class="table align-middle">
      <thead class="thead">
        <tr>
          <th>商品</th>
          <th class="d-none d-md-table-cell"></th>
          <th class="d-none d-md-table-cell">數量</th>
          <th class="text-end">小計</th>
        </tr>
      </thead>
      <tbody class="table-group-divider border-bottom border-primary">
        <tr v-for="cartItem in cart.carts" :key="cartItem.id" class="product-row">
          <td class="product-image">
            <img :src="cartItem.product.imageUrl" :alt="`${cartItem.product.title}的照片`" class="border border-primary">
          </td>
          <td class="product-info">
            <div class="d-flex flex-column justify-content-between">
              <h3 class="fs-5 fs-md-3">{{ cartItem.product.title }}</h3>
              <span class="text-info">{{ cartItem.product.category }}</span>
              <span class="text-primary text-opacity-75">${{ cartItem.product.price }}</span>
            </div>
          </td>
          <td class="product-qty">
            <div class="d-flex align-items-center gap-2">
              <div class="position-relative border-custom">
                <button type="button" class="position-absolute h-100 start-0 border-0 bg-transparent ps-4" :disabled="cartLoading" @click="updateCartItem(cartItem,cartItem.qty - 1)">-</button>
                <input type="number" name="qty" id="qty" v-model="cartItem.qty" @change="changeQty(cartItem,$event)" class="bg-secondary rounded" :disabled="cartLoading">
                <button type="button" class="position-absolute h-100 end-0 border-0 bg-transparent pe-4" :disabled="cartLoading" @click="updateCartItem(cartItem,cartItem.qty + 1)">+</button>
              </div>
              <button class="btn btn-primary" @click="deleteCartItem(cartItem)"><i class="bi bi-trash3"></i></button>
            </div>
          </td>
          <td class="product-total text-end">
            ${{ cartItem.final_total }}
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<style scoped lang="scss">
img{
  width: 100px;
  height: 100px;
}

input[type="number"]{
  appearance: none;
  -moz-appearance: textfield;
  outline: none;
  border: none;
  max-width: 150px;
  height: 38px;
  text-align: center;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

@media (max-width: 768px) {
  table, thead, tbody, th, td, tr {
    display: block;
  }

  thead tr{
    display: flex;
    justify-content: space-between;
  }

  tbody tr{
    td{
      border:none;
    }
    border-bottom: 1px solid #ccc;
    padding-bottom: 8px;
  }
  
  .product-row{
    display: grid;
    grid-template: repeat(2, auto) / repeat(4, 1fr);
  }
  .product-image{
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    padding-bottom: 16px;
  }
  .product-info{
    grid-column: 2 / 4;
  }
  .product-qty{
    grid-row: 2 / 3;
    grid-column: 2 / 5;
  }
  .product-total{
    grid-column: 4 / 5;
    align-content: center;
  }
}
</style>