<script setup>
import { ref, onMounted } from 'vue';

import Swal from 'sweetalert2'
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import ProductModal from '@/components/admin/ProductModal.vue';
import PaginationComp from '@/components/PaginationComp.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;
const products = ref([]);
const dialog = ref();
const tempProduct = ref({});
const isNew = ref(true);
const pagination = ref({});
const isLoading = ref(false);


function getProducts(page = 1) {
    isLoading.value = true;
    axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/products?page=${page}`)
        .then(res => {
            products.value = res.data.products;
            pagination.value = res.data.pagination;
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: '錯誤發生',
                text: err.response.data.message,
            })
        })
        .finally(() => {
            isLoading.value = false;
        })
}
function addNewProduct() {
    dialog.value.dialog.showModal();
    tempProduct.value = {};
    isNew.value = true
}
function editProduct(product) {
    tempProduct.value = JSON.parse(JSON.stringify(product));
    isNew.value = false
    dialog.value.dialog.showModal();
}
function confirmProduct(product) {

    // 新增用 post ，修改用 put
    if (isNew.value) {
        product.created = Date.now();

        axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/admin/product`, {
            data: product
        }).then(res => {
            Swal.fire({
                title: `${res.data.message}`,
                icon: "success",
                didClose: () => {
                    getProducts(pagination.value.current_page || 1);
                }
            })
            dialog.value.dialog.close();
            tempProduct.value = {};
        }).catch(err => {
            Swal.fire({
                icon: "error",
                title: "錯誤發生",
                text: `${err}`
            })
        })
    } else {
        const { id } = product;
        axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${id}`, {
            data: product
        })
            .then(res => {
                Swal.fire({
                    title: `${res.data.message}`,
                    icon: "success",
                    didClose: () => {
                        getProducts(pagination.value.current_page || 1);
                    }
                })
                dialog.value.dialog.close();
                tempProduct.value = {};
            }).catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "錯誤發生",
                    text: `${err.response.data.message}`
                })
            })
    }
}
function deleteProduct(product) {
    Swal.fire({
        title: `你確定要刪除 ${product.title} 嗎?`,
        showCancelButton: true,
        confirmButtonText: "確定",
        cancelButtonText: "取消"
    }).then(result => {
        if (result.isConfirmed) {
            axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${product.id}`).then(res => {
                Swal.fire({
                    icon: "success",
                    text: res.data.message,
                    didClose: () => {
                        getProducts(pagination.value.current_page || 1);
                    }
                })
            }).catch(err => {
                Swal.fire({
                    icon: "error",
                    text: err.response.data.message
                })
            })
        }
    })
}
onMounted(() => {
    getProducts()
})
</script>
<template>
    <div class="p-10">
        <h2 class="font-size-12">產品</h2>
        <div class="text-end mt-6">
            <!-- 新增按鈕 -->
            <button type="button"
                class="bg-primary border-0 text-white cursor-pointer inline-block px-3 py-1.5 rd font-size-4 hover:bg-primary-light"
                @click="addNewProduct()">建立新的產品</button>
        </div>
        <!-- 產品列表 -->
        <div class="relative min-h-100">
            <Loading :active="isLoading" :is-full-page="false"></Loading>
            <table class="w-100% mt-6">
                <thead class="border-b-1 border-black border-solid fw-bold text-left">
                    <tr>
                        <th width="120">
                            分類
                        </th>
                        <th>產品名稱</th>
                        <th width="120" class="text-end">
                            原價
                        </th>
                        <th width="120" class="text-end">
                            售價
                        </th>
                        <th width="100" class="text-center">
                            是否啟用
                        </th>
                        <th width="120">
                            編輯
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-#DEE2E6 border-solid" v-for="product in products" :key="product.id">
                        <td>{{ product.category }}</td>
                        <td>{{ product.title }}</td>
                        <td class="text-end">{{ product.origin_price }}</td>
                        <td class="text-end">{{ product.price }}</td>
                        <td class="text-center">
                            <span class="text-#198754" v-if="product.is_enabled">啟用</span>
                            <span class="text-red" v-else>未啟用</span>
                        </td>
                        <td>
                            <div>
                                <button type="button"
                                    class="text-#0d6efd bg-transparent border-(1 #0d6efd solid) rd-tl rd-bl px-2 py-1 hover:(bg-#0d6efd text-white cursor-pointer)"
                                    @click="editProduct(product)">
                                    編輯
                                </button>
                                <button type="button"
                                    class="text-#dc3545 bg-transparent border-1 border-#de3545 border-solid rd-tr rd-br px-2 py-1 hover:(bg-#de3545 text-white cursor-pointer)"
                                    @click="deleteProduct(product)">
                                    刪除
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
    <!-- Modal -->
    <ProductModal @confirm-product="confirmProduct" :temp-product="tempProduct" :is-new="isNew" ref="dialog">
    </ProductModal>
    <template v-if="products.length">
        <PaginationComp :pages="pagination" @change-page="getProducts"></PaginationComp>
    </template>
</template>
<style lang="postcss">
td,
th {
    padding: 8px;
}
</style>