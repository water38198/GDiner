<script setup>
import { ref, watch,onMounted } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cartStore';
import { useProductApi } from '@/composables/useProductApi';
import Swal from 'sweetalert2';
import RandomProducts from '@/components/front/RandomProducts.vue';

const route = useRoute();

const cartStore = useCartStore();

const { getProduct, product, isLoading } = useProductApi();

onMounted(() => {
  getProduct(route.params.id);
});

watch(() => route.params.id, () => {
  getProduct(route.params.id);
});

const veggieColor = (veggie) => {
  switch (veggie) {
    case '全素':
      return 'success';
    case '蛋奶素':
      return 'warning';
    default:
      return 'danger';
  }
};

const quantity = ref(1);
const changeQuantity = (type) => {
  if (type === '+') {
    quantity.value++;
  } else if(type === '-'){
    quantity.value--;
  }
  if (quantity.value < 1 || typeof quantity.value !== 'number' ) {
    quantity.value = 1;
    Swal.fire({
      icon: 'warning',
      title: '數量不得小於1',
      confirmButtonColor: '#3D081B',
      timer: 1500,
    });
  }
};

const router = useRouter();
const BuyNow = async() => {
  await cartStore.addToCart(product.value.id, quantity.value);
  router.push('/cart');
};
</script>

<template>
  <main class="position-relative container py-10 min-vh-100">
    <VLoading :active="isLoading" :is-full-page="false"/>
    <div class="row gy-4">
      <div class="col-12 col-md-5">
        <div id="carousel" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="product.imageUrl" :alt="product.title" class="border-custom">
            </div>
            <template v-if="product.imagesUrl">
              <div v-for="image in product.imagesUrl" :key="image" class="carousel-item">
                <img :src="image" :alt="`${product.title}的圖片`" class="border-custom">
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">上一張</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">下一張</span>
              </button>
            </template>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-7">
        <h2 class="mb-8 fs-1">{{ product.title }}</h2>
        <div class="mb-4 d-flex gap-2">
          <span class="badge text-bg-info fs-6">{{ product.category }}</span>
          <span class="badge fs-6" :class="`text-bg-${veggieColor(product.veggie)}`">{{ product.veggie }}</span>
          <span v-for="tag in product.tags" :key="tag" class="badge text-bg-primary bg-opacity-75 fs-6"> {{ tag }} </span>
        </div>
        <div class="mb-8">
          <template v-if="product.origin_price !== product.price">
            <span class="text-danger fs-3 me-4">NT$ {{ product.price }}</span>
            <del class="text-gray">NT$ {{ product.origin_price }}</del>
          </template>
          <template v-else>
            <span class="fs-3">NT$ {{ product.price }}</span>
          </template>
        </div>
        <div class="mb-4 w-md-75 "> 
          <label class="mb-2 d-block fw-bold" for="quantity">數量</label>
          <div class="d-flex justify-content-between border-custom quantity-input">
            <button type="button" class="d-block px-4 bg-transparent border-0" @click="changeQuantity('-')"><i class="bi bi-dash fs-4"></i></button>
            <input type="number" name="" id="quantity" v-model="quantity" min="1" class="d-block flex-shrink-0 bg-transparent border-0 text-center" @change="changeQuantity">
            <button type="button" class="d-block px-4 bg-transparent border-0" @click="changeQuantity('+')"><i class="bi bi-plus fs-4"></i></button>
          </div>
        </div>
        <div class="mb-8 d-flex gap-2">
          <button type="button" class="flex-fill btn btn-outline-primary border-custom rounded-pill py-3" @click="cartStore.addToCart(product.id, quantity)">加入購物車</button>
          <button type="button" class="flex-fill btn btn-info rounded-pill py-3 btn-shadow" @click="BuyNow">立即購買</button>
        </div>
        <div class="mb-8">
          <h3 class="mb-2 fs-3 fw-bold">商品介紹：</h3>
          <p>{{ product.description }}</p>
        </div>
        <div>
          <h3 class="mb-2 fs-3 fw-bold">商品內容：</h3>
          <p>{{ product.content }}</p>
        </div>
      </div>
    </div>
    <RandomProducts :id="product.id"/>
  </main>

</template>

<style scoped lang="scss">
img{
  width: 100%;
  margin-inline: auto;
  height: 300px;
  @media (min-width: 768px){
    height: 400px;
  }
  @media (min-width: 992px){
    height: 500px;
  }
}

input[type="number"]{
  appearance: none;
  -moz-appearance: textfield;
  outline: none;
  max-width: 100px;
  height: 50px;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

.btn-shadow{
  box-shadow: 0 2px 0 0 #3D081B;
}
</style>