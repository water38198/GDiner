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
          list = list.filter(product => product.id !== id)
        });
        const array = this.useRandomArray(list.length);
        list = list.filter((item, index) => array.includes(index))
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
      while (array.length < 3) {
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
  <div class="position-relative min-h-350px">
    <VLoading :active="isLoading" :is-full-page="false" />
      <template v-if="products.length > 0">
    <div class="relative">
      <h3 class="font-size-7 mb-10">誠心推薦</h3>
      <div v-if="randomProductList.length > 0">
        <ul class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <li v-for="(randomProduct, index) in randomProductList" :key="randomProduct.id + index" data-aos="zoom-in"
            :data-delay="100 * index">
            <div class="card">
              <RouterLink :to='`/product/${randomProduct.id}`' class="block">
                <div class="customBorder-xl rd-3 overflow-hidden mb-4">
                  <img :src="randomProduct.imageUrl" :alt="`${randomProduct.title}的圖片`"
                    class="block w-100% h-150px  sm:h-350px md:h-350px">
                </div>
                <h3 class="mb-4 tracking-wider">{{ randomProduct.title }}</h3>
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
