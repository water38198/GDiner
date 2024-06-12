<script>
export default {
  props: {
    filteredList: {
      type: Array,
      default() {
        return [];
      },
    },
    pages: {
      type: Object,
      required:true,
    },
    isLoading: {
      type:Boolean
    }
  }
}
</script>
<template>
  <div class="relative min-h-100 mb-12" ref="productsListRef">
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" v-if="filteredList.length > 0">
      <li v-for="product in filteredList.slice(12 * (pages.current - 1), 12 * pages.current)" :key="product.id"
        data-aos="fade-up" :data-aos-delay="500" data-aos-offset="0">
        <div class="card">
          <RouterLink :to="`/product/${product.id}`" class="block">
            <div class="card-image">
              <img :src="product.imageUrl" :alt="`${product.title}的圖片`"
                class="block w-100% h-150px sm:h-350px md:h-300px" />
            </div>
            <h3 class="mb-4 tracking-wider">{{ product.title }}</h3>
            <div class="pb-4">
              <div v-if="product.price == product.origin_price">
                <span>NT$ {{ product.price }}</span>
              </div>
              <div v-else>
                <span class="text-red me-2">NT$ {{ product.price }}</span>
                <del class="text-gray-400 font-size-3">NT$ {{ product.origin_price }}</del>
              </div>
            </div>
          </RouterLink>
        </div>
      </li>
    </ul>
    <!-- 如果沒有符合條件 -->
    <div v-else-if="filteredList.length === 0 && !isLoading">
      <h3 class="pt-10 font-size-6 text-center">很抱歉，沒有符合條件的商品。<br />(〒︿〒)</h3>
    </div>
  </div>
</template>