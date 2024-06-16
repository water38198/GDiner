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
      this.$refs.orderModalRef.dialog.showModal();
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
    async confirmOrder(order) {
      const data = order;
      let total = 0;
      total = Object.keys(data.products).reduce((a, b) => {
        const coupon = data.products[b].coupon ? data.products[b].coupon.percent / 100 : 1 //如果有使用coupon
        return a + data.products[b].final_total * coupon
      }
        , 0);
      data.total = total; 
      try {
        const res = await this.$http.put(`${VITE_URL}/v2/api/${VITE_PATH}/admin/order/${order.id}`, { data });
        this.$refs.orderModalRef.dialog.close();
        this.$swal({
          icon: 'success',
          title: `${res.data.message}`,
          didClose: () => {
            this.getOrders();
          }
        })
      } catch (err) {
        this.$swal({
          title: '錯誤發生',
          icon: 'error',
          text: `${err.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,
          confirmButtonColor: '#3D081B',
        })
      }
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
  <div class="p-10">
    <h2 class="font-size-12">訂單</h2>
    <div class="relative min-h-100">
      <VLoading :active="isLoading" :is-full-page="false" />
      <!-- 訂單列表 -->
      <table class="w-100% mt-6">
        <thead class="border-b-1 border-black border-solid fw-bold text-left">
          <tr>
            <th width="120">下單時間</th>
            <th>ID</th>
            <th>購買品項</th>
            <th>使用者資訊</th>
            <th>留言</th>
            <th class="text-center">訂單總額</th>
            <th width="100" class="text-center">是否付款</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-#DEE2E6 border-solid" v-for="order in orders" :key="order.id">
            <td>{{ getMoment(order.create_at * 1000) }}</td>
            <td>{{ order.id }}</td>
            <td>
              <ul>
                <li v-for="product in order.products" :key="product.id">
                  {{ product.product.title }} x {{ product.qty }}
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li v-for="data, key in order.user" :key="data" class="pt-2">
                  {{ key }} : {{ data }}
                </li>
              </ul>
            </td>
            <td>
              {{ order.message }}
            </td>
            <td class="text-center">
              {{ order.total }}
            </td>
            <td class="text-center">
              <span class="text-green" v-if="order.is_paid">已付款</span>
              <span class="text-red" v-else>尚未付款</span>
            </td>
            <td>
              <div class="btn-group">
                <button type="button"
                  class="text-#0d6efd bg-transparent border-(1 #0d6efd solid r-0) rd-tl rd-bl px-2 py-1 hover:(bg-#0d6efd text-white cursor-pointer)"
                  @click="openOrderModal(order)">
                  編輯
                </button>
                <button type="button"
                  class="text-#dc3545 bg-transparent border-1 border-#de3545 border-solid rd-tr rd-br px-2 py-1 hover:(bg-#de3545 text-white cursor-pointer)"
                  @click="deleteOrder(order.id)">
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
  <OrderModal :temp-order="tempOrder" ref="orderModalRef" @confirm-order="confirmOrder" />
</template>

<style lang="postcss">
td,
th {
  padding: 8px;
}
</style>