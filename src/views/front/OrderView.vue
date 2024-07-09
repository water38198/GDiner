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
      this.orderId = this.$route.query.id;
      this.getOrder(this.orderId);
    }
  }
}

</script>

<template>
  <VLoading :active="isLoading" />
  <div class="container py-10">
    <h2 class="text-center fs-2 mb-10">訂單查詢</h2>
    <div class="mx-auto mb-10 w-md-50">
      <div class="form-floating mb-3">
        <input type="text" id="orderId" placeholder="請輸入訂單ID" class="form-control bg-secondary border-custom" v-model.trim="orderId">
        <label for="orderId">訂單號碼</label>
      </div>
      <div class="text-center">
        <button class="btn btn-primary px-4" @click="getOrder(orderId)">查詢</button>
      </div>
    </div>
    <div class="mb-10" v-if="order !== null">
      <div class="row gy-4">
        <div class="col-md-6">
          <div class="border-custom h-100">
            <h3 class="fs-3 fs-md-2 lh-lg text-center mb-6 bg-primary text-secondary">訂單資訊</h3>
            <ul class="list-unstyled px-6">
              <li class="mb-2">
                <span class="me-4">號碼：</span>
                <span>{{ order.id }}</span>
              </li>
              <li class="mb-2">
                <span class="me-4">時間：</span>
                <span>{{ getTime(order.create_at * 1000) }}</span>
              </li>
              <li class="mb-2">
                <span class="me-4">留言：</span>
                <span>{{ order.message }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <div class="border-custom h-100">
            <h3 class="fs-3 fs-md-2 lh-lg text-center mb-6 bg-primary text-secondary">買家資訊</h3>
            <ul class="list-unstyled px-6">
              <li class="mb-2">
                <span class="me-4">姓名：</span>
                <span>{{ order.user.name }}</span>
              </li>
              <li class="mb-2">
                <span class="me-4">信箱：</span>
                <span>{{ order.user.email }}</span>
              </li>
              <li class="mb-2">
                <span class="me-4">地址：</span>
                <span>{{ order.user.address }}</span>
              </li>
              <li class="mb-2">
                <span class="me-4">電話：</span>
                <span>{{ order.user.tel }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div class="border-custom">
            <h3 class="fs-3 fs-md-2 lh-lg text-center bg-primary text-secondary">訂購的料理</h3>
            <table class="table align-middle mb-0">
              <thead>
                <tr>
                  <th class="text-center w-25">圖片</th>
                  <th>名稱</th>
                  <th class="text-center">數量</th>
                  <th class="text-center">小計</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="product in order.products" :key="product.id">
                  <tr>
                    <td>
                      <img :src="product.product.imageUrl" :alt="`${product.product.title}的照片`"
                        class="product-image mx-auto">
                    </td>
                    <td>{{ product.product.title }}</td>
                    <td class="text-center">{{ product.qty }} </td>
                    <td class="text-center">{{ Math.floor(product.final_total) }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
            <p class="text-center fs-5 my-3 my-md-6">
              總計：{{ Math.floor(order.total) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-image{
  width: 50px;
  height: 60px;
  border: 2px solid var(--bs-primary);
  border-radius: .625rem;
  @media (mid-width:576px) {
    width: 100px;
    height: 120px;
  }
}







</style>