<script>
import moment from 'moment';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      orderId: '',
      order:null,
    }
  },
  methods: {
    async getOrder(id) {
      this.isLoading = true;
      try {
        const res = await this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/order/${id}`);
        if (res.data.order === null) {
          this.$swal({
            title: '號碼錯誤',
            icon: 'error',
            text: `您的訂單號碼可能輸入錯誤，請嘗試重新輸入`,
          });
        } else {
          this.order = res.data.order;
        }
      } catch (err) {
        this.$swal({
          title: '錯誤發生',
          icon: 'error',
          text: `${err.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,
        })
      } finally {
        this.isLoading = false;
      }
    },
    getTime(stamp) {
      return moment(stamp).format('YYYY-MM-DD')
    }
  },
  mounted() {
    if (this.$route.query.id) {
      this.orderId = this.route.query.id;
      this.getOrder(this.orderId);
    }
  }
}

</script>

<template>
  <VLoading :active="isLoading" />
  <div class="container px-4 md:px-12.5">
    <h2 class="text-center font-size-12 mb-10">訂單查詢</h2>
    <div class="mb-10">
      <div class="custom-input-group w-50% mx-a">
        <input type="text" id="orderId" placeholder="請輸入訂單ID" v-model.trim="orderId">
        <label for="orderId">訂單號碼</label>
        <button
          class="absolute h-100% right-0 top-1/2 translate-y--1/2 block px-6 border-(l-3 solid primary) rd-(tr-4 br-4) hover-(bg-primary text-secondary)"
          @click="getOrder(orderId)">查詢</button>
      </div>
    </div>
    <div class="grid md:grid-cols-2 gap-10 mb-10" v-if="order !== null">
      <div class="col-span-2 md:col-span-1">
        <h3 class="font-size-8 mb-4">訂單資訊</h3>
        <ul class="grid gap-4">
          <li>
            <span class="inline-block w-25">訂單號碼：</span>
            <span>{{ order.id }}</span>
          </li>
          <li>
            <span class="inline-block w-25">下單時間：</span>
            <span>{{ getTime(order.create_at * 1000) }}</span>
          </li>
          <li>
            <span class="inline-block w-25">留言：</span>
            <span>{{ order.message }}</span>
          </li>
        </ul>
      </div>
      <div class="col-span-2 md:col-span-1">
        <h3 class="font-size-8 mb-4">買家資訊</h3>
        <ul class="grid gap-4">
          <li>
            <span class="inline-block w-25">姓名：</span>
            <span>{{ order.user.name }}</span>
          </li>
          <li>
            <span class="inline-block w-25">Email：</span>
            <span>{{ order.user.email }}</span>
          </li>
          <li>
            <span class="inline-block w-25">地址：</span>
            <span>{{ order.user.address }}</span>
          </li>
          <li>
            <span class="inline-block w-25">電話：</span>
            <span>{{ order.user.tel }}</span>
          </li>
        </ul>
      </div>
      <div class="col-span-2">
        <h3 class="font-size-8 mb-4">訂購的料理</h3>
        <table class="w-full">
          <thead class="border-(b-1 solid primary-veryLight)">
            <tr class="opacity-60 text-left">
              <th class="w-30 md:w-35">圖片</th>
              <th>名稱</th>
              <th>數量</th>
              <th class="text-right">小計</th>
            </tr>
          </thead>
          <tbody class="border-(b-1 solid primary-veryLight)">
            <template v-for="product in order.products" :key="product.id">
              <tr>
                <td>
                  <div class="w-100% h-30 md:w-25">
                    <img :src="product.product.imageUrl" :alt="`${product.product.title}的照片`"
                      class="block max-w-25 w-100% h-100% border-(2 solid primary) rd-2.5">
                  </div>
                </td>
                <td>{{ product.product.title }}</td>
                <td>{{ product.qty }} </td>
                <td class="text-right">{{ Math.floor(product.final_total) }}</td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-right font-size-6"> 總計：{{ Math.floor(order.total) }} </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
th,
td {
  padding: 20px 0;
  vertical-align: middle;
}
</style>