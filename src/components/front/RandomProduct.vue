<script>
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  props: {
    exclude: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      products: [],
      isLoading:false,
    }
  },
  computed: {
    randomProductList() {
      let list = [];
      if (this.products.length > 0) {
        list = JSON.parse(JSON.stringify(this.products));
        this.exclude.forEach(id => {
          list = list.filter(product => product.id !== id);
        });
        const array = this.useRandomArray(list.length);
        list = list.filter((item, index) => array.includes(index));
      }
      return list;
    }
  },
  methods: {
    async getProducts() {
      this.isLoading = true;
      try {
        const res = await this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`);
        this.products = res.data.products;
      } catch (err) {
        this.$swal({
          title: '錯誤發生',
          icon: 'error',
          text: `${err.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,
          confirmButtonColor: '#3D081B',
        })
      } finally {
        this.isLoading = false;
      }
    },
    useRandomArray(max) {
      const array = [];
      while (array.length < 4) {
        const random = Math.floor(Math.random() * max);
        if (!array.includes(random)) array.push(random);
      }
      return array;
    }
  },
  mounted() {
    this.getProducts();
  }
}
</script>
<template>
  <div class="position-relative wrapper">
    <VLoading :active="isLoading" :is-full-page="false" />
      <template v-if="products.length > 0">
    <div>
      <h3 class="fs-3 mb-10">誠心推薦</h3>
      <div v-if="randomProductList.length > 0">
        <ul class="list-unstyled row row-cols-2 row-cols-md-4">
          <li v-for="(randomProduct, index) in randomProductList" :key="randomProduct.id + index" data-aos="zoom-in"
            :data-delay="100 * index">
            <div class="card">
              <RouterLink :to='`/product/${randomProduct.id}`' class="block">
                <div class="card-image">
                  <img :src="randomProduct.imageUrl" :alt="`${randomProduct.title}的圖片`">
                </div>
                <h3 class="fs-5 card-title">{{ randomProduct.title }}</h3>
                <div class="pb-4">
                  <span>NT$ {{ randomProduct.price }}</span>
                </div>
              </RouterLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  </div>
</template>

<style scoped lang="scss">
.wrapper{
  min-height: 350px;
}
.card-image{
  height: 150px;
  @media (min-width: 576px) {
    height: 250px;
  }
  @media (min-width: 768px) {
    height: 300px;
  }
}
</style>