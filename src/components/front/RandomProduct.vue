<script setup>
import axios from 'axios'
import { ref, onMounted, watch } from 'vue';
import Swal from 'sweetalert2'
import Loading from 'vue-loading-overlay'

const { VITE_URL, VITE_PATH } = import.meta.env;
const randomProductList = ref([]);
const products = ref([]);
const LoadingItems = ref([]);
const props = defineProps({
    exclude: {
        type: Array,
        default: () => []
    }
})

function getProducts() {
    LoadingItems.value.push('products');
    axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
        .then(res => {
            products.value = res.data.products;
            generateRandomProduct();
        })
        .catch(err => {
            Swal.fire({
                title: '錯誤發生',
                icon: 'error',
                text: `${err.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,
                confirmButtonColor: '#3D081B',
            })
        })
        .finally(() => {
            LoadingItems.value.splice(LoadingItems.value.indexOf('products'), 1)
        })
}
// 取得隨機的一個數字
function generateNumber(max) {
    const random = Math.random() * (max + 1);
    return Math.floor(random);
}
function generateRandomProduct() {
    randomProductList.value = [];//清空
    if (products.value.length === 0) return;
    const list = [...products.value];
    props.exclude.forEach(id => {   //移除已經有的產品(單一產品頁 或是 購物車內)
        list.filter(product => product.id !== id)
    });
    const length = list.length;
    const numbList = [];
    while (numbList.length < 3) { //產出 3 個不同的 index
        const num = generateNumber(length);
        if (!numbList.includes(num)) {
            numbList.push(num)
        }
    }
    numbList.forEach(num => randomProductList.value.push(list[num]))
}

onMounted(() => {
    getProducts();
})

watch(() => props.exclude, () => {
    getProducts();
})
</script>

<template>
    <template v-if="products.length > 0">
        <div class="relative">
            <Loading :active="LoadingItems.includes('products')" :is-full-page="false"></Loading>
            <h3 class="font-size-7 mb-10">誠心推薦</h3>
            <div v-if="randomProductList.length > 0">
                <ul class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <li v-for="product in randomProductList" :key="product.id" data-aos="fade-left">
                        <div class="card">
                            <RouterLink :to='`/product/${product.id}`' class="block">
                                <div class="customBorder-xl rd-3 overflow-hidden mb-4">
                                    <img :src="product.imageUrl" alt=""
                                        class="block w-100% h-150px  sm:h-350px md:h-350px">
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
        </div>
    </template>
</template>
