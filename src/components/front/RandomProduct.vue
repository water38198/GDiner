<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue';
import Swal from 'sweetalert2'

const { VITE_URL, VITE_PATH } = import.meta.env;
const products = ref([]);
const props = defineProps({
  exclude: {
    type: Array,
    default: () => []
  }
})
const randomProductList = computed(() => {
  let list = [];
  if (products.value.length > 0) {
    list = JSON.parse(JSON.stringify(products.value));
    props.exclude.forEach(id => {   //移除已經有的產品(單一產品頁 或是 購物車內)
      list = list.filter(product => product.id !== id)
    });
    const array = useRandomArray(list.length);
    list = list.filter((item, index) => array.includes(index))
  }
  return list;
});

function getProducts() {
  axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
    .then(res => {
      products.value = res.data.products;
    })
    .catch(err => {
      Swal.fire({
        title: '錯誤發生',
        icon: 'error',
        text: `${err.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,
        confirmButtonColor: '#3D081B',
      })
    })

}
// 取得隨機陣列
function useRandomArray(max) {
  const array = [];
  while (array.length < 3) {
    const random = Math.floor(Math.random() * (max));
    if (!array.includes(random)) array.push(random)
  }
  return array
}

onMounted(() => {
  getProducts();
})
</script>

<template>
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
</template>
