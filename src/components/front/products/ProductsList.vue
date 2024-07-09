<script>
export default {
  props: {
    filteredList: {
      type: Array,
      default:()=> [],
    },
    pages: {
      type: Object,
      required:true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    isEmptyList() {
      return this.filteredList.length === 0 && !this.isLoading;
    }
  }
}
</script>
<template>
  <div class="mb-12">
    <ul class="list-unstyled row row-cols-2 row-cols-md-3 row-cols-lg-4 gy-4" v-if="filteredList.length > 0">
      <li v-for="product in filteredList.slice(12 * (pages.current_page - 1), 12 * pages.current_page)" :key="product.id"
        data-aos="fade-up" :data-aos-delay="500" data-aos-offset="0">
        <div class="card">
          <RouterLink :to="`/product/${product.id}`" class="block">
            <div class="card-image">
              <img :src="product.imageUrl" :alt="`${product.title}的圖片`" />
            </div>
            <h3 class="fs-5 card-title">{{ product.title }}</h3>
            <div class="pb-4">
              <div v-if="product.price == product.origin_price">
                <span>NT$ {{ product.price }}</span>
              </div>
              <div v-else>
                <span class="text-danger me-2">NT$ {{ product.price }}</span>
                <del class="fs-7">NT$ {{ product.origin_price }}</del>
              </div>
            </div>
          </RouterLink>
        </div>
      </li>
    </ul>
    <!-- 如果沒有符合條件 -->
    <div v-else-if="isEmptyList">
      <h3 class="pt-10 fs-4 text-center">很抱歉，沒有符合條件的商品。<br />(〒︿〒)</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card{
  img{
    height: 150px;
    @media (min-width: 576px) {
      height: 350px;
    }
    @media (min-width: 768px) {
      height: 300px;
    }
  }
}
</style>