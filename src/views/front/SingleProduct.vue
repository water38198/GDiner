<script>
import { mapActions,mapState } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
import RandomProduct from '@/components/front/RandomProduct.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  components:{ RandomProduct },
  data() {
    return {
      product: {},
      quantity: 1,
      isLoading: false,
      currentImg: '',
    }
  },
  computed: {
    ...mapState(useCartStore,['cartLoading'])
  },
  methods: {
    ...mapActions(useCartStore, ['addCart']),
    async getProduct() {
      this.isLoading = true;
      try {
        const res = await this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${this.$route.params.id}`);
        this.product = res.data.product;
      } catch (err) {
        this.$swal({
          title: '錯誤發生',
          icon: 'error',
          text: `${err.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,
        })
      } finally {
        this.isLoading = false;
      };
    },
    changeQuantity(event) {
      if (event.target.value < 1 || typeof (+event.target.value) !== 'number') {
        this.$swal({
          title: '數量錯誤請重新輸入',
          icon: 'error',
          timer: 3000
        });
      event.target.value = this.quantity;
      } else {
        this.quantity = event.target.value;
        };
    },
    showBigImg(img = this.product.imageUrl) {
      this.currentImg = img;
      this.$refs.imgDialogRef.showModal();
    },
    autoClose(event) {
      if (event.target.nodeName === 'DIALOG') {
        this.$refs.imgDialogRef.close();
      }
    },
    veggieColor(veggie) {
      return veggie === '全素' ? "green" : veggie === '蛋奶素' ? "yellow" : "red"
    }
  },
  watch: {
    '$route.params'() {
      this.quantity = 1;
      this.getProduct();
    }
  },
  mounted() {
    this.getProduct();
  }
}
</script>
<template>
  <main class="py-10 container">
    <VLoading :active="isLoading" />
    <div class="row gy-6 mb-16">
      <!-- 商品圖片 -->
      <div class="col-md-5">
        <div id="carousel" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="product.imageUrl" class="product-image border-custom border-custom-large bg-primary overflow-hidden w-100" :alt="product.title" @click="showBigImg()">
            </div>
            <template v-if="product.imagesUrl">
              <div v-for="img in product.imagesUrl" :key="img" class="carousel-item">
                <img :src="img" :alt="`${product.title}的圖片`" class="product-image border-custom border-custom-large w-100"
                  @click="showBigImg(img)">
              </div>
            </template>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev" v-if="product.imagesUrl">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next" v-if="product.imagesUrl">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <!-- 文字內容 -->
      <div class="col-md-7">
        <h2 class="fs-1 mb-6">{{ product.title }}</h2>
        <div class="d-flex flex-wrap align-items-center gap-3 mb-4">
          <span class="border border-info border-2 rounded-pill px-2 py-1 px-md-4 py-md-2 text-info">{{ product.category }}</span>
          <span class="pill rounded-pill px-2 py-1 px-md-4 py-md-2" :class="`pill-${veggieColor(product.veggie)}`">
            {{product.veggie }}</span>
          <span v-for="tag in product.tags" :key="tag"
            class="pill pill-gray rounded-pill px-2 py-1 px-md-4 py-md-2">{{
        tag }}</span>
        </div>
        <div class="mb-6" v-if="product.origin_price !== product.price">
          <span class="text-danger fs-3 me-4">NT$ {{ product.price }}</span>
          <del class="text-gray">NT$ {{ product.origin_price }}</del>
        </div>
        <div v-else class="mb-6">
          <span class="fs-3"> NT$ {{ product.price }}</span>
        </div>
        <div class="mb-6">
          <label class="d-block mb-3" for="quantity">數量</label>
          <div class="d-flex justify-content-between border-custom quantity-input">
            <button class="d-block px-4 bg-transparent border-0"
              @click="quantity - 1 > 0 ? quantity-- : ''" type="button">
              <i class="bi bi-dash fs-4"></i>
            </button>
            <input type="number" name="" id="quantity" :value="quantity"
              class="d-block bg-transparent border-0 appearance-none outline-0  text-center" min="1"
              @change="changeQuantity($event)">
            <button class="d-block px-4 bg-transparent border-0" @click="quantity++"
              type="button">
              <i class="bi bi-plus fs-4"></i>
            </button>
          </div>
        </div>
        <div class="mb-6">
          <div class="row">
            <div class="col-sm-6">          <button
            class="w-100 btn btn-outline-primary px-4 py-3 rounded-pill border-custom me-sm-4 mb-4 mb-sm-0"
            @click="addCart(product.id, quantity)" :class="{ 'cart-loading': cartLoading }"
            type="button">加入購物車</button></div>
            <div class="col-sm-6">
              <RouterLink to="/cart" @click="addCart(product.id, quantity, true)"
                class="w-100 btn-shadow btn btn-info rounded-pill px-4 py-3">
                立即購買</RouterLink>
            </div>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="mb-3 fs-3">商品介紹：</h3>
          <p>{{ product.description }}</p>
        </div>
        <div>
          <h3 class="mb-3 fs-3">商品內容：</h3>
          <p>{{ product.content }}</p>
        </div>
      </div>
    </div>
    <template v-if="product.id">
      <RandomProduct :exclude="[product.id]" />
    </template>
    <dialog ref="imgDialogRef" @click="autoClose" class="bg-secondary">
      <img :src="currentImg" alt="product image" class="dialog-img">
    </dialog>
  </main>
</template>

<style lang="scss" scoped>
.product-image{
  height: 300px;
  cursor: pointer;
  @media (min-width: 992px) {
    height: 500px;
  }
}

.pill{
  border-style: solid;
  border-width: 2px;
}

.pill-green{
  border-color: var(--bs-green);
  color: var(--bs-green);
}

.pill-yellow{
  border-color: var(--bs-yellow);
  color: var(--bs-yellow);
}

.pill-red{
  border-color: var(--bs-red);
  color: var(--bs-red);
}

.pill-gray{
  border-color: var(--bs-gray-600);
  color: var(--bs-gray-600);
}

.text-gray{
  color: var(--bs-gray-500);
}

.quantity-input{
  width: 100%;
  @media (min-width: 992px) {
    width: 350px;
  }
  input{
    height: 50px;
    &:focus{
      outline: 0;
    }
  }
}

.cart-loading{
  pointer-events: none;
  opacity: .75;
}


.btn-shadow{
  box-shadow: 0 2px 0 0 #3D081B;
}

.dialog-img{
  width: 80vw;
  aspect-ratio: 1;
}

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