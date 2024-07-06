<script>
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      isLoading: false,
    }
  },
  computed: {
    slicedProduct() {
      return this.products.slice(0, 8)
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
  <section class="position-relative mb-16" >
    <h2 class="fs-3 mb-7 d-flex">火熱商品 <i class="bi bi-fire"></i>
    </h2>
    <ul class="list-unstyled row row-cols-2 row-cols-lg-4 gy-4 ">
      <li v-for="(product, index) in slicedProduct" :key="product.id" data-aos="fade-up"
        :data-aos-delay="50 * index" data-aos-once="true">
        <div class="card">
          <RouterLink :to="`product/${product.id}`" class="d-block">
            <div class="card-image">
              <img :src="product.imageUrl" :alt="`${product.title}`" class="card-img-top">
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">NT$ {{ product.price }}</p>
            </div>
          </RouterLink>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.card{
  img{
    height: 150px;
    @media (width> 768px) {
      height: 250px;
    }
  }
}
</style>