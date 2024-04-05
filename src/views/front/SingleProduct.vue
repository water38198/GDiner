<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router'
import axios from 'axios'
import Swal from 'sweetalert2'
import Loading from 'vue-loading-overlay'
import { useCartStore } from '@/stores/cartStore'
import { storeToRefs } from 'pinia'
import RandomProduct from '@/components/front/RandomProduct.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;
const store = useCartStore();
const { isLoading } = storeToRefs(store);
const { addCart } = store;
const route = useRoute();
const product = ref({});
const quantity = ref(1);
const LoadingItems = ref([]);
const imgDialogRef = ref();
const currentImg = ref('');

function getProduct() {
  LoadingItems.value.push('product');
  axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${route.params.id}`)
    .then(res => {
      product.value = res.data.product;
    })
    .catch(err => {
      Swal.fire({
        title: '錯誤發生',
        icon: 'error',
        text: `${err.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,
        confirmButtonColor: '#3D081B',
      })
    })
    .finally(() => {
      LoadingItems.value.splice(LoadingItems.value.indexOf('product'), 1);
    })
}
function changeQuantity(event) {
  if (event.target.value < 1 || typeof (+event.target.value) !== 'number') {
    Swal.fire({
      title: '數量錯誤請重新輸入',
      icon: 'error',
      timer: 3000
    })
    event.target.value = quantity.value;
  } else {
    quantity.value = event.target.value;
  }
}
function showBigImg(img = product.value.imageUrl) {
  currentImg.value = img;
  imgDialogRef.value.showModal();
}
function autoClose(e) {
  if (e.target.nodeName === "DIALOG") {
    imgDialogRef.value.close();
  }
}
function veggieColor(veggie) {
  return veggie === '全素' ? "green-700" : veggie === '蛋奶素' ? "yellow-500" : "red-700"
}

onMounted(() => {
  getProduct();
})

// url的產品id變動時重新抓API
watch(() => route.params, () => {
  quantity.value = 1;
  getProduct();
})
</script>

<template>
  <main class="py-10">
    <div class="container px-4 md:px-12.5 ">
      <div class="grid md:grid-cols-[40%_60%] gap-10 mb-16">
        <Loading :active="LoadingItems.includes('product')"></Loading>
        <!-- 商品圖片 -->
        <div>
          <div class="mb-8">
            <img
              class="product-image customBorder-xl bg-primary bg-cover bg-center rd-3 overflow-hidden w-100% h-300px lg:h-500px cursor-pointer"
              :src="product.imageUrl" @click="showBigImg()">
          </div>
          <template v-if="product.imagesUrl">
            <div class="grid grid-cols-4 gap-4 mb-4">
              <div v-for="img in product.imagesUrl" :key="img">
                <img :src="img" :alt="`${product.title}的圖片`" class="block w-100% h-25 rd-3 cursor-pointer"
                  @click="showBigImg(img)">
              </div>
            </div>
          </template>
        </div>
        <!-- 文字內容 -->
        <div>
          <h2 class="mb-6 font-size-10 font-serif">{{ product.title }}</h2>
          <div class="flex flex-wrap items-center gap-3 mb-4 font-size-3">
            <p class="border-(2 solid info) px-2 py-1 md:(px-4 py-2) rd-10 text-info">{{ product.category }}</p>
            <p class="border-(2 solid) px-2 py-1 md:(px-4 py-2) rd-10" :class="`text-${veggieColor(product.veggie)}`">
              {{
          product.veggie }}</p>
            <p v-for="tag in product.tags" :key="tag"
              class="border-(2 solid primary-200) px-2 py-1 md:(px-4 py-2) rd-10">{{
          tag }}</p>
          </div>
          <div class="mb-6" v-if="product.origin_price !== product.price">
            <span class="text-red font-size-7 me-4">NT$ {{ product.price }}</span>
            <del class="text-gray-400">NT$ {{ product.origin_price }}</del>
          </div>
          <div v-else class="mb-6">
            <span class="font-size-7"> NT$ {{ product.price }}</span>
          </div>
          <div class="mb-6">
            <label class="block mb-3 font-size-3 text-primary-light" for="quantity">數量</label>
            <div class="relative grid grid-cols-3 w-40 customBorder rd-3 h-12.5">
              <button class="block px-4 bg-transparent border-0 cursor-pointer font-size-5 fw-900"
                @click="quantity - 1 > 0 ? quantity-- : ''" type="button">
                <div class="i-ic:round-minus"></div>
              </button>
              <input type="number" name="" id="quantity" :value="quantity"
                class=" block w-100% bg-transparent border-0 appearance-none outline-0  text-center" min="1"
                @change="changeQuantity($event)">
              <button class="block px-4 bg-transparent border-0 cursor-pointer font-size-5 fw-900" @click="quantity++"
                type="button">
                <div class="i-ic:round-plus"></div>
              </button>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 md:max-w-100 w-100% mb-6">
            <button
              class="block w-100%  py-3 customBorder rd-10 bg-transparent cursor-pointer font-size-4 hover:(bg-primary text-secondary)"
              @click="addCart(product.id, quantity)" :class="{ 'pointer-events-none opacity-75': isLoading }"
              type="button">加入購物車</button>
            <RouterLink to="/cart" @click="addCart(product.id, quantity, true)"
              class="flex justify-center items-center w-100% px-2 py-4 rd-10 bg-info text-secondary hover:(bg-info-dark)">
              立即購買</RouterLink>
          </div>
          <div class="mb-6">
            <h3 class="mb-3 font-size-5">商品介紹：</h3>
            <p>{{ product.description }}</p>
          </div>
          <div>
            <h3 class="mb-3 font-size-5">商品內容：</h3>
            <p>{{ product.content }}</p>
          </div>
        </div>
      </div>
      <template v-if="product.id">
        <RandomProduct :exclude="[product.id]" />
      </template>
    </div>
    <dialog ref="imgDialogRef" @click="autoClose" class="bg-secondary">
      <img :src="currentImg" alt="關閉" class="block max-h-80vh">
    </dialog>
  </main>
</template>

<style lang="scss" scoped>
[type=number]::-webkit-outer-spin-button,
[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

[type=number] {
  -moz-appearance: textfield;
  appearance: none;
}

::backdrop {
  opacity: 1;
  backdrop-filter: blur(2px);
}
</style>