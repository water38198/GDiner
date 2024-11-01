<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useImage } from '@vueuse/core'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const product = ref(props.product);
const {isLoading} = useImage({src:product.value.imageUrl});
</script>

<template>
  <RouterLink :to="`/product/${product.id}`" class="d-block">
    <div class="card">
      <div class="border-custom image-container overflow-hidden">
        <div v-if="isLoading" class="position-relative h-100 bg-secondary">
          <VLoading :active="isLoading" :is-full-page="false"/>
        </div>
        <img v-else :src="product.imageUrl" :alt="`${product.title}的圖片`" class="w-100">
      </div>
      <div class="card-body">
        <h3 class="fs-5 card-title">{{ product.title }}</h3>
        <div v-if="product.price == product.origin_price">
          <span>NT$ {{ product.price }}</span>
        </div>
        <div v-else>
          <span class="text-danger me-2">NT$ {{ product.price }}</span>
          <del class="fs-7">NT$ {{ product.origin_price }}</del>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
a:hover{
  h3{
    text-decoration: underline;
    text-underline-offset: 4px;
  }
  img{
    transform: scale(1.1);
  }
}
.card{
  img{
    transition: transform 0.5s;
    height: 150px;
    @media (min-width: 576px) {
      height: 200px;
    }
    @media (min-width: 768px) {
      height: 300px;
    }
  }
}
.image-container{
  height: 150px;
  @media (min-width: 576px) {
    height: 200px;
  }
  @media (min-width: 768px) {
    height: 300px;
  }
}
</style>