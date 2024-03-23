<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import Swal from 'sweetalert2';

const { VITE_URL, VITE_PATH } = import.meta.env;
const hotProductsRef = ref();
const products = ref([]);
const isLoading = ref(false);
const email = ref('');

function getProducts() {
  isLoading.value = true;
  axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
    .then(res => {
      products.value = res.data.products.reverse();
    }).catch(() => {
      Swal.fire({
        title: '錯誤發生',
        icon: 'error',
        text: '請嘗試重新整理，如果此狀況持續發生，請聯絡我們',
        confirmButtonColor: '#3D081B',
      })
    }).finally(() => {
      isLoading.value = false;
    })
}
function subscribe() {
  Swal.fire({
    icon: 'success',
    title: '訂閱成功',
    text: '有任何獨家的優惠和菜單更新會馬上通知您！',
    confirmButtonColor: '#910F3F'
  })
  email.value = '';
}

onMounted(() => {
  getProducts();
})
</script>

<template>
  <Loading :active="isLoading"></Loading>
  <header class="pt-80 sm:py-12.5 mb-10">
    <div class="container">
      <div class="flex sm:(px-12.5 py-15)" data-aos="flip-up">
        <div
          class="bg-secondary px-9 py-10  border-(t-3 b-3 primary solid) sm:(max-w-550px customBorder-xl rd-3 text-start) text-primary text-center ">
          <h2 class="font-size-12 text-center mb-3 sm:mb-8 fw-bold">
            <span class="inline-block sm:(translate-x-[-40%] rotate-3)">美好飯局，</span>
            <span class="inline-block sm:(translate-x-40% rotate-[-3deg])">盡在阿橘！</span>
          </h2>
          <p class="mb-5">每道料理都是由我們阿橘大廚精心挑選、用心製作而成，且食材皆採用符合時節與產地直送，請客人放心食用。</p>
          <div>
            <RouterLink to="/recommend"
              class="inline-block customBorder rd-10 px-7.5 py-3 font-size-4 tracking-widest text-primary hover:(outline-(1 #3D081B solid))">
              開始點菜</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main class="py-6 md:py-16 px-4 md:(container px-12.5)">
    <!-- 火熱商品 -->
    <section class="relative mb-16" ref="hotProductsRef">
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
    <!-- 尋找心中的美味 -->
    <section class="mb-16">
      <h2 class="font-size-7 tracking-widest mb-7.5">
        尋找心中的美味<div class="i-fxemoji:potoffood inline-block"></div>
      </h2>
      <div class="grid gap-1.5 grid-cols-2 md:(grid-flow-col grid-cols-3 gap-3)">
        <div class="col-span-1 row-span-1" data-aos="zoom-in">
          <div class="card">
            <RouterLink to="/products" class="block">
              <div class="card-image">
                <img
                  src="https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711206743079.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=c6yUTZed7cSDED%2F%2BIJwocTGP1Kqc1BF9vYeZMeaIa6TSP4SC495wLe%2BRs4DYuCc9BBr%2FG2t0%2F8eLy8LBlyOoIoMH7v%2FpVa7Jk4LWgL0gtDcdxr4TtFN%2B3tujwdZrEDoSIcN2gUFdDGcV6B9OekGSuRmL4rMiNX8s9tYdJXBuFO2yb9BRSsidVvehETmli0FY0qB1bokkRQPZDryVOGR5yqgXsr6JyWPQ7wfP7eKaB3%2B%2BAaZW2R2Cqv9t%2Fjfq82OaCNvTmWapAsFbRFu1YjgPBdxc7po0k%2FllH0Q8PSuBX8jTraIuFajZTdffdUus64a3E1Jxbteck3uLB4oxt0z7dg%3D%3D"
                  alt="" class="h-200px sm:h-250px md:h-400px">
              </div>
              <div class="pb-4">
                <h4 class="flex items-center font-size-5">其他好東西 <div
                    class="i-material-symbols:arrow-right-alt inline-block ms-1">
                  </div>
                </h4>
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="col-span-1 row-span-1" data-aos="zoom-in">
          <div class="card">
            <RouterLink to="/products?category=套餐" class="block">
              <div class="card-image">
                <img
                  src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="" class="h-200px sm:h-250px md:h-400px w-100%">
              </div>
              <div class="pb-4">
                <h4 class="flex items-center font-size-5">套餐<div
                    class="i-material-symbols:arrow-right-alt inline-block ms-1">
                  </div>
                </h4>
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="col-span-2 row-span-2" data-aos="zoom-in">
          <div class="card h-100%">
            <RouterLink to="/products?sort=最新" class="flex flex-col h-100%">
              <div class="card-image flex-1">
                <img
                  src="https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711206815709.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jL45KDGAo7g1MGnMeBKbEA8jDNP8xGJv5D5d4SIwMAOjaRyTmnfFaZhpPlNYuofyUs0ImxwehkOubmxBgrMu3LwgyIXUsmg%2FWT1Ju5nMTisSh5yYvWzjyQ5cWBgJyfisZXXmZ%2FTkM5DP%2FRQ0OrX7ccboe4jy01PPW3aenpl%2B9c0fSnRbgVixMIsX4W4ydFX2dPiQ9Vgwkav4dILH5YFJQ%2F%2B%2F25PmGLYEfzOEyte1t6Ov3kSUgSF55wcA4KYtHdtzvhVr5jg8NGKO%2F7UmfzzvLxdIbPMO%2B3ZuPbKDz5OSqjQYrwS6ANH0QmnP9gRQvnJbe1%2FLvcK5a8jS2g0D0GIjGg%3D%3D"
                  alt="" class="md:h-100%">
              </div>
              <div class="pb-4">
                <h4 class="flex items-center font-size-5">新品上市<div
                    class="i-material-symbols:arrow-right-alt inline-block ms-1">
                  </div>
                </h4>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
    <!-- 初次嘗鮮 -->
    <section class="mb-16" data-aos="flip-right">
      <div class="flex flex-wrap customBorder-xl rd-3 overflow-hidden bg-primary">
        <div class="w-100% md:w-50%">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711208425781.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NWxF8O%2Fes5b9vlE%2BZLMUoLIM6pe7jbIYBdqtaiyGfiNRlG4MAbaD6Bxi%2B%2BkHT5ZeyXUdvdXa%2FdgIgkMYWVcQpV%2F5Iv1pV%2FzG1HYczU1AU9SalqaW2uX7U7yYQiS0XfjdOx1FJ%2By8pWHT6u0YJifDuKB7VRwzY230UumPJ%2FNlP3uzlW4RsQRSzp4P2JjPmSPb3snvXsBHDx7UUtra3tQ9DohSXSgHVcFujVl0owAke4DEnPJ%2BKUKJRy%2FpYXr5%2B63FFCRHxTjNG3EMeECFrqezTog8KWCgnSYqiHFmgSs3A69hBnNCpCkQr%2FEJuwyR%2F5dGqmJUCZrULtPe5j3xuSAk0g%3D%3D"
            alt="" class="block md:h-100%">
        </div>
        <div class="w-100% md:w-50%  bg-secondary border-(t-3 solid primary) md:border-(t-0 l-3) p-6 sm:p-10 md:p-15">
          <h4 class="font-size-10 sm:font-size-12 font-italic flex items-center gap-2 mb-5">簡單 - 快速 - 享用美味!
          </h4>
          <p class="lh-loose tracking-wider mb-5">
            當您踏入我們的餐廳時，即刻感受到一股迷人的香氣飄散在空氣中，迎接您的是一場充滿著美食與美好的饗宴。我們的料理風格融合了傳統與創新，每一道菜都是我們烹飪團隊用心打造的藝術品
          </p>
          <div class="text-center sm:text-start">
            <RouterLink to="/recommend"
              class="inline-block bg-info text-secondary px-7.5 py-3 lh-120% tracking-widest rd-10 shadow-[0_2px_0_0_#3D081B] hover:(shadow-[0_0px_1px_1px_#3D081B])">
              初次嘗鮮</RouterLink>
          </div>
        </div>
      </div>
    </section>
    <!-- 訂閱我們 -->
    <section class="mb-16">
      <div class="customBorder-xl rd-3 text-center pt-10 pb-12">
        <h2 class="mb-5 font-size-12 tracking-widest">
          訂閱我們
        </h2>
        <p class="lh-normal px-4 mb-5">現在就訂閱，您將能享受到獨家的優惠和菜單更新，與我們一同開啟美味之旅吧！</p>
        <div class="flex justify-center">
          <div class="custom-input-group">
            <input type="email" id="search" placeholder="請輸入Email" autocomplete="off" v-model.trim="email">
            <label for="search">Email</label>
            <button type="button"
              class="absolute right-2 top-1/2 translate-y--1/2 bg-transparent border-0 outline-0 px-2 font-size-6 text-primary cursor-pointer"
              @click="subscribe">
              <div class="i-material-symbols:arrow-right-alt"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-16" data-aos="flip-left">
      <div class="flex flex-wrap customBorder-xl rd-3 overflow-hidden bg-primary">
        <div
          class="w-100% md:w-50% flex flex-col justify-center bg-secondary border-(b-3 solid primary) md:border-(b-0 r-3) p-6 sm:p-10 md:p-15 ">
          <h4 class="font-size-10 sm:font-size-12 font-italic tracking-widest mb-5 ">值得信任的阿橘
          </h4>
          <p class="lh-loose tracking-wider">
            親愛的食客們，阿橘大廚受過法國、日本、韓國等專業訓練，每道料理都是阿橘精心研發、悉心呈現的絕佳組合，帶給您難忘的美食體驗。阿橘專注於每一道菜品的製作，並結合了傳統烹飪技藝和創新的烹飪理念，讓每一道菜都充滿了驚喜和美味。
          </p>
        </div>
        <div class="w-100% md:w-50%">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711208489661.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=U42Sp0kXD1CZIM43mtxmLmdIl4pKiF09D813iQelu6aJV5arvyxz59HdTYtXu9l8F4RWkMNXePZ4f5m%2BCw%2F928inztuEPI9t0jnXTo5whKWzbQnePBMRjt%2B8uWbnFr128KBrwgoeTmqCvE6nBcO0tEUG80MhVIjAoPezjBYdZbttRRnWNeY6y1oGkiwZEvkbW%2FX%2Bsxs8aew%2FuexnWtKihz9EEQ3x4ohn6cUCQnA%2B8YFrRUtnHoqX3Epz44PORpNdTUSZ5UUgvhvgE7IEOLELjklHFxgMUDdO5sLzHbq%2F%2FOYTxQUExhP9L616zEKUkNc8QR8Ro2JOStcjk01Un8x6Ig%3D%3D"
            alt="a picture of chef A-Gi" class="block md:h-100%">
        </div>
      </div>
    </section>

    <section class="mb-16">
      <div class="grid md:grid-cols-3 gap-6 md:gap-3">
        <div class="customBorder-xl rd-3 pt-6 text-center" data-aos="fade-up" data-aos-delay="100">
          <h4 class="font-size-12 text-info">
            <div class="i-material-symbols:pets inline-block"></div>
          </h4>
          <h5 class="font-size-8 text-info">精心打造</h5>
          <p class="p-6">"每一道菜都是精心打造的藝術品，不僅滿足您的味蕾，更是一場視覺和味覺的盛宴。"</p>
        </div>
        <div class="customBorder-xl rd-3 pt-6 text-center" data-aos="fade-up" data-aos-delay="300">
          <h4 class="font-size-12 text-info text-center">
            <div class="i-simple-icons:codefresh inline-block"></div>
          </h4>
          <h5 class="font-size-8 text-info">新鮮原料</h5>
          <p class="p-6">"新鮮的材料，每日用最短的時間從產地直送到餐廳。"</p>
        </div>
        <div class="customBorder-xl rd-3 pt-6 text-center" data-aos="fade-up" data-aos-delay="500">
          <h4 class="font-size-12 text-info">
            <div class="i-material-symbols:favorite inline-block"></div>
          </h4>
          <h5 class="font-size-8 text-info">用心經營</h5>
          <p class="p-6">"無論是享受個人美食之旅，還是與親朋好友共享用餐體驗，阿橘飯店都能帶給您意想不到的驚喜和愉悅。"</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
header {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711206531765.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pgnZTmwOymp3mYzu8ht8Eo6cnKBY5zHjTi6Md22%2F%2FYE2J3e0ojerFRE25Ik0CHX328%2BMsDtfKUGRPHGL97I8i%2FIdm%2FszuAMO3W2JNQTia6HYK2qGmAJLJvvpDapce0xXip%2Bsh4MqPa4PTnpBrpep1BQIZP1k0IVFRZ8RkvGtpS9STfJRhNRk6pbNNblNB8BQ0imy4etYjTJYWTeKibPN%2FtfZQ%2Bp42ZwtjL6kzNkZXB8azC71u%2BDmdFIqFl%2FfwfGBzrMHqeztO8jDAM9XrmUpcAqOXAewCAWr3l8qnhU8Rne%2BYeMEbwROCIP4kcURVvNPCaNmEXN4fLi6MCnXOnZfnA%3D%3D');
  background-size: cover;
}



.custom-input-group {
  position: relative;
  width: max(50%, 300px);

  &::before {
    content: "";
    inset: 0;
    position: absolute;
    border: #3D081B 1px solid;
    border-radius: .75rem;
    box-shadow: 0px 2px 0px #3D081B;
    pointer-events: none;
  }

  input {
    background-color: #F2EFDD;
    border-radius: .75rem;
    color: #3D081B;
    width: 100%;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 16px;
    outline: 0;

    &:focus {
      padding-top: 18px;
      padding-bottom: 10px;
      outline: #3D081B 1.5px solid;
    }

    &:hover {
      outline: #3D081B 1.5px solid;
    }
  }

  input::placeholder {
    color: transparent
  }

  label {
    position: absolute;
    transition: transform .1s ease-in-out;
    color: #3D081B;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  input:focus~label,
  input:not(:placeholder-shown)~label {
    color: #3D081B;
    transform: scale(0.8) translateY(-1.75rem) translateX(-0.25rem);
  }
}
</style>