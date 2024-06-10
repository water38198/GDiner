<script>
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      isLoading: false,
    }
  },
  methods: {
    async getProducts() {
      this.isLoading = true;
      try {
        const res = await this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`);
        this.products = res.data.products.reverse();
      } catch (err) {
        this.$swal({
          title: '錯誤發生',
          icon: 'error',
          text: '請嘗試重新整理，如果此狀況持續發生，請聯絡我們',
        })
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.getProducts();
  }
}
</script>


<template>
  <VLoading :active="isLoading" />
  <section class="relative mb-16" >
  <h2 class="font-size-7 tracking-widest mb-7.5 flex">火熱商品 <div class="i-twemoji:fire inline-block">
    </div>
  </h2>
  <ul class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <li v-for="(product, index) in products.slice(0, 8)" :key="product.id" data-aos="fade-up"
      :data-aos-delay="50 * index" data-aos-once="true">
      <div class="card">
        <RouterLink :to="`/product/${product.id}`" class="block">
          <div class="card-image">
            <img :src="product.imageUrl" alt="product image" class="block w-100% h-150px md:h-250px">
          </div>
          <h3 class="mb-4 tracking-wider">{{ product.title }}</h3>
          <div class="pb-4">
            <span>NT$ {{ product.price }}</span>
          </div>
        </RouterLink>
      </div>
    </li>
  </ul>
</section>
</template>