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
      this.$refs.dialog.showModal();
    },
    editProduct(product) {
      this.tempProduct = JSON.parse(JSON.stringify(product));
      this.isNew = false;
      this.$refs.dialog.showModal();
    },
    async confirmProduct(product) {
      const method = this.isNew ? 'post' : 'put';
      const url = this.isNew ? `${VITE_URL}/v2/api/${VITE_PATH}/admin/product` : `${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${product.id}`;
      if (this.isNew) product.created = Date.now();
      try {
        const res = await this.$http[method](url, { data: product });
        this.$swal({
          title: `${res.data.message}`,
          icon: "success",
          didClose: () => {
            this.getProducts(this.pagination.current_page || 1);
          }
        });
        this.$refs.dialog.close();
      } catch (err) {
        this.$swal({
        icon: "error",
        title: "錯誤發生",
        text: `${err.response.data.message}`
        })
      }
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
  <div class="p-10">
    <h2 class="font-size-12">產品</h2>
    <div class="text-end mt-6">
      <button type="button"
        class="bg-primary border-0 text-white cursor-pointer inline-block px-3 py-1.5 rd font-size-4 hover:bg-primary-light"
        @click="addNewProduct">建立新的產品</button>
    </div>
    <!-- 產品列表 -->
    <div class="relative min-h-100">
      <VLoading :active="isLoading" :is-full-page="false" />
      <table class="w-100% mt-6">
        <thead class="border-b-1 border-black border-solid fw-bold text-left">
          <tr>
            <th width="120">縮圖</th>
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th width="120" class="text-end">原價</th>
            <th width="120" class="text-end">售價</th>
            <th width="100" class="text-center">是否啟用</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-#DEE2E6 border-solid" v-for="product in products" :key="product.id">
            <td>
              <img :src="product.imageUrl" :alt="`${product.title}的圖片`" width="120" height="100">
            </td>
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
  <ProductModal @confirm-product="confirmProduct" :temp-product="tempProduct" :is-new="isNew" ref="dialog" />
  <template v-if="products.length">
    <PaginationComponent :pages="pagination" @change-page="getProducts" />
  </template>
</template>

<style lang="postcss">
td,
th {
  padding: 8px;
  vertical-align: middle;
}
</style>