<script>
import moment from 'moment';
import OrderModal from '@/components/admin/OrderModal.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  components:{ OrderModal, PaginationComponent },
  data() {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
      isLoading: false,
    }
  },
  methods: {
    async getOrders( page = 1) {
      this.isLoading = true;
      try {
        const res = await this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/orders?page=${page}`);
        this.orders = res.data.orders;
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
    openOrderModal(order) {
      this.tempOrder = order;
    },
    deleteOrder(id) {
      this.$swal({
        icon: 'warning',
        title: '刪除訂單',
        text: `你確定要刪除 ${id} 這筆訂單嗎?`,
        showCancelButton: true,
        cancelButtonText: '取消',
        confirmButtonText: '確定'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await this.$http.delete(`${VITE_URL}/v2/api/${VITE_PATH}/admin/order/${id}`);
            this.$swal({
              icon: 'success',
              title: `${res.data.message}`,
              didClose: () => {
                this.getOrders();
              }
            });
          } catch (err) {
            this.$swal({
              icon: 'error',
              title: '錯誤發生',
              text: err.response.data.message,
            });
          }
        }
      })
    },
    getMoment(data) {
      return moment(data).format('YYYY-MM-DD')
    }
  },
  mounted() {
    this.getOrders();
  }
}
</script>
<template>
  <VLoading :active="isLoading" />
  <div class="py-4 py-md-10">
    <h2 class="text-center fs-1">訂單</h2>
    <!-- 訂單表格 -->
    <div class="table-responsive">
      <table class="table mt-6 text-nowrap">
        <thead>
          <tr>
            <th>下單時間</th>
            <th>ID</th>
            <th>購買品項</th>
            <th>使用者資訊</th>
            <th>留言</th>
            <th>訂單總額</th>
            <th>是否付款</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="order in orders" :key="order.id">
            <td>{{ getMoment(order.create_at * 1000) }}</td>
            <td>{{ order.id }}</td>
            <td>
              <ol>
                <li v-for="product in order.products" :key="product.id">
                  {{ product.product.title }} x {{ product.qty }}
                </li>
              </ol>
            </td>
            <td>
              <ul class="mb-0">
                <li v-for="data, key in order.user" :key="data">
                  {{ key }} : {{ data }}
                </li>
              </ul>
            </td>
            <td>{{ order.message }}</td>
            <td class="text-center"> {{ order.total }} </td>
            <td class="text-center">
              <span class="text-green" v-if="order.is_paid">已付款</span>
              <span class="text-red" v-else>尚未付款</span>
            </td>
            <td>
              <div class="btn-group" role="group" aria-label="edit button group">
                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#OrderModal" @click="openOrderModal(order)">
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger" @click="deleteOrder(order.id)">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template v-if="orders.length">
      <PaginationComponent :pages="pagination" @change-page="getOrders" />
    </template>
  </div>
  <OrderModal :temp-order="tempOrder" @get-orders="getOrders"/>
</template>

<style lang="postcss">
td,
th {
  padding: 8px;
}

</style>