<script>
import ProductModal from '@/components/admin/ProductModal.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  components: { ProductModal, PaginationComponent },
  data() {
    return {
      products: [],
      tempProduct: {},
      isNew: true,
      pagination: {},
      isLoading:false,
    }
  },
  methods: {
    async getProducts(page = 1) {
      this.isLoading = true;
      try {
        const res = await this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/products?page=${page}`);
        this.products = res.data.products;
        this.pagination = res.data.pagination;
      } catch (err) {
        this.$swal({
          icon: 'error',
          title: '錯誤發生',
          text: err.response.data.message,
        })
      } finally {
        this.isLoading = false;
      }
    },
    addNewProduct() {
      this.isNew = true;
      this.tempProduct = {};
    },
    editProduct(product) {
      this.tempProduct = JSON.parse(JSON.stringify(product));
      this.isNew = false;     
    },
    deleteProduct(product) {
      this.$swal({
        title: `你確定要刪除 ${product.title} 嗎?`,
        showCancelButton: true,
        confirmButtonText: "確定",
        cancelButtonText: "取消",
      }).then( async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await this.$http.delete(`${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${product.id}`);
            this.$swal({
              icon: "success",
              text: res.data.message,
              didClose: () => {
                this.getProducts(this.pagination.current_page || 1);
              }
            })
          } catch(err) {
            this.$swal({
              icon: "error",
              text: err.response.data.message,
            })
          }
        }
      })
    }
  },
  mounted() {
    this.getProducts();
  }
}
</script>
<template>
  <VLoading :active="isLoading" />
  <div class="py-4 py-md-10">
    <h2 class="text-center fs-1">產品</h2>
    <div class="text-end mt-6">
      <button type="button"
        class="btn btn-primary px-3 py-2"
        @click="addNewProduct" data-bs-toggle="modal" data-bs-target="#ProductModal">建立新的產品</button>
    </div>
    <!-- 產品表格 -->
    <div class="table-responsive">
      <table class="table mt-6 text-nowrap align-middle">
        <thead>
          <tr>
            <th>縮圖</th>
            <th>分類</th>
            <th>產品名稱</th>
            <th class="text-end">原價</th>
            <th class="text-end">售價</th>
            <th class="text-center">是否啟用</th>
            <th class="text-center" width="120">編輯</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="product in products" :key="product.id">
            <td>
              <img :src="product.imageUrl" :alt="`${product.title}的圖片`" class="product-image rounded-2">
            </td>
            <td>{{ product.category }}</td>
            <td>{{ product.title }}</td>
            <td class="text-end">{{ product.origin_price }}</td>
            <td class="text-end">{{ product.price }}</td>
            <td class="text-center">
              <span class="text-success" v-if="product.is_enabled">啟用</span>
              <span class="text-danger" v-else>未啟用</span>
            </td>
            <td class="text-end">
              <div class="btn-group text-nowrap" role="group" aria-label="edit button group">
                <button type="button" class="btn btn-outline-primary" @click="editProduct(product)" data-bs-toggle="modal" data-bs-target="#ProductModal">
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger" @click="deleteProduct(product)">
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
  <ProductModal @get-products="getProducts" :temp-product="tempProduct" :is-new="isNew" ref="dialog" />
  <template v-if="products.length">
    <PaginationComponent :pages="pagination" @change-page="getProducts" />
  </template>
</template>

<style scoped>
.product-image{
  width: 120px;
  min-width: 120px;
  height: 100px;
}


</style>