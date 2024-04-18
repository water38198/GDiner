<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import Swal from 'sweetalert2';

const { VITE_URL, VITE_PATH } = import.meta.env;
const products = ref([]);
const isLoading = ref(false);

function getProducts() {
  isLoading.value = true;
  axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
    .then(res => {
      products.value = res.data.products.reverse();
    })
    .catch(() => {
      Swal.fire({
        title: '錯誤發生',
        icon: 'error',
        text: '請嘗試重新整理，如果此狀況持續發生，請聯絡我們',
        confirmButtonColor: '#3D081B',
      })
    })
    .finally(() => {
      isLoading.value = false;
    })
}

onMounted(() => {
  getProducts();
})
</script>

<template>
  <Loading :active="isLoading" />
  <div class="container px-4 md:px-12.5 pb-16">
    <section class="pt-6">
      <div class="mb-8">
        <h2 class="flex justify-center md:justify-start items-center mb-6 font-size-10 md:font-size-12">
          初來乍到
        </h2>
        <img
          src="https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="歡迎來到" class="md:(w-2/3 h-75) customBorder-xl rd-3 mb-4">
        <p class="md:max-w-2/3 font-size-4 md:font-size-4.5">親愛的客人，
          我們非常榮幸能夠歡迎您來到阿橘飯店！在這裡，我們致力於為您提供一個美味、舒適和難忘的美味饗宴，讓您的每一口都成為一段珍貴的回憶。如果您是第一次光臨本店，我們推薦您點餐的內容包含：
        </p>
      </div>
      <div class="mb-6 md:mb-16">
        <ul class="flex flex-wrap gap-6 font-size-6 align-middle">
          <li class="flex gap-2">
            <div class="i-emojione:green-salad"></div>沙拉
          </li>
          <li class="flex gap-2">
            <div class="i-noto-v1:stuffed-flatbread"></div>副食
          </li>
          <li class="flex gap-2">
            <div class="i-fluent-emoji:cut-of-meat"></div>主食
          </li>
          <li class="flex gap-2">
            <div class="i-noto-v1:shortcake"></div>甜點
          </li>
          <li class="flex gap-2">
            <div class="i-twemoji:tropical-drink"></div>飲料
          </li>
        </ul>
      </div>
    </section>
    <!-- 近期上新 -->
    <section class="pt-6">
      <div class="mb-8">
        <h2 class="flex justify-center md:justify-start items-center mb-6 font-size-10 md:font-size-12 ">
          近期上新
          <div class="i-ic:round-whatshot inline-block"></div>
        </h2>
        <p class="md:max-w-70% font-size-4 md:font-size-4.5">
          阿橘飯店每季都會固定更新菜單，以符合當季盛產的食材，每道新的料理都是阿橘師通經過無數次試驗，反覆調整食材搭配而成，絕對是令人驚豔的美味。
        </p>
      </div>
      <div class="mb-6 md:mb-16">
        <ul class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <li v-for="(product, index) in products.slice(0, 4)" :key="product.id" data-aos="fade-up"
            :data-aos-delay="100 * index">
            <div class="card">
              <RouterLink :to="`/product/${product.id}`" class="block">
                <div class="card-image">
                  <img :src="product.imageUrl" :alt="`${product.title} 的圖片`" class="block h-150px w-100% md:h-250px">
                </div>
                <h3 class="mb-4 tracking-wider">{{ product.title }}</h3>
                <div class="pb-4">
                  <span>NT$ {{ product.price }}</span>
                </div>
              </RouterLink>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!-- 套餐推薦 -->
    <section class="pt-6">
      <div class="mb-8">
        <h2 class="flex justify-center md:justify-start items-center mb-6 font-size-10 md:font-size-12 ">
          套餐推薦
          <div class="i-material-symbols:menu-book-outline inline-block"></div>
        </h2>
        <p class="md:max-w-70% font-size-4 md:font-size-4.5 lh-normal">
          為您推薦阿橘飯店的經典套餐，每種套餐組合都由阿橘師嚴格把關，讓阿橘師帶領您體驗一段美食風暴。
        </p>
      </div>
      <div class="mb-6 md:mb-16">
        <ul class="grid grid-cols-2   lg:grid-cols-4 gap-4">
          <li v-for="(product, index) in products.filter(item => item.category == '套餐').slice(0, 4)" :key="product.id"
            data-aos="fade-up" :data-aos-delay="100 * index">
            <div class="card">
              <RouterLink :to='`/product/${product.id}`' class="block">
                <div class="card-image">
                  <img :src="product.imageUrl" :alt="`${product.title} 的圖片`" class="block h-150px w-100% md:h-250px">
                </div>
                <h3 class="mb-4 tracking-wider">{{ product.title }}</h3>
                <div class="pb-4">
                  <span>NT$ {{ product.price }}</span>
                </div>
              </RouterLink>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="pt-6">
      <h2 class="font-size-12 mb-6">還是很餓？</h2>
      <div class="grid md:grid-cols-2">
        <div class="card">
          <RouterLink to="/products" class="block">
            <div class="card-image">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711208607404.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=R%2BibykpH3TVLUt1W68Z8h7bSXbzhjB0KJE53cpm6myt%2BRRHW1XDK75piSd6u8oJZ9SoFmiLT6oJyTURbEuXwQjedXC7xVqw7qkFYKhju00oKF6Eg38%2FfVICi7l36Z%2BmjkyupSu9i8DkMnfpuiUzRKSTpJZXFzjONKajAgS2GDJZltflhcACUj%2BvGS4iEK%2BWPI1GML4hoKn4NLCGGBDZAPbG4Uh1pg%2BdokE9o1BfHKF7xGGAfmTNjNH%2FdOM1gWYdWvw1a0%2BPXrAoOf4G1yVSac8YEXcWX5HTi6G3lQa%2Bg9Rt8xCX8fb4qRisZeLkbGI7S9LfZeES0RpwtCTzv3zVuFA%3D%3D"
                alt="" class="block h-150px w-100% md:h-250px">
            </div>
            <h4 class="mb-4 font-size-4.5 tracking-wider flex">其他料理<div
                class="i-material-symbols:arrow-right-alt inline-block">
              </div>
            </h4>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
