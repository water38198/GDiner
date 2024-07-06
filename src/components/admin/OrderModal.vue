<script>
import * as bootstrap from 'bootstrap';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  props: {
    tempOrder: {
      type: Object,
    }
  },
  emits:['getOrders'],
  data() {
    return {
      modalOrder: {
        user:{}
      },
      isLoading: false,
      modal:null,
    }
  },
  computed: {
    isChanged() {
      return JSON.stringify(this.tempOrder) === JSON.stringify(this.modalOrder);
    }
  },
  methods: {
    changePrice(product) {
      const { id } = product;
      this.modalOrder.products[id].final_total = this.modalOrder.products[id].qty * this.modalOrder.products[id].product.price;
      this.modalOrder.products[id].total = this.modalOrder.products[id].final_total;
    },
    async confirmOrder() {
      let total = 0;
      total = Object.keys(this.modalOrder.products).reduce((a, b) => {
        const coupon = this.modalOrder.products[b].coupon ? this.modalOrder.products[b].coupon.percent / 100 : 1 //如果有使用coupon
        return a + this.modalOrder.products[b].final_total * coupon
      }, 0);
      this.modalOrder.total = total; 
      this.isLoading = true
      try {
        const res = await this.$http.put(`${VITE_URL}/v2/api/${VITE_PATH}/admin/order/${this.modalOrder.id}`, { data:this.modalOrder });
        this.$swal({
          icon: 'success',
          title: `${res.data.message}`,
          didClose: () => {
            this.modal.hide();
            this.$emit('getOrders');
          }
        })
      } catch (err) {
        this.$swal({
          title: '錯誤發生',
          icon: 'error',
          text: `${err.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,
          confirmButtonColor: '#3D081B',
        })
      } finally {
        this.isLoading = false;
      }
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入正確的電話號碼';
    }
  },
  watch: {
    tempOrder() {
      this.modalOrder = JSON.parse(JSON.stringify(this.tempOrder));
    }
  },
  mounted() {
    this.modal = new bootstrap.Modal('#OrderModal');
  }
}
</script>
<template>
  <div class="modal fade" id="OrderModal" tabindex="-1" aria-labelledby="OrderLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-2" id="OrderModalLabel">編輯訂單</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <VForm @submit="confirmOrder" v-slot="{ errors }" id="OrderForm">
            <div class="row">
              <div class="col-md-6" v-if='tempOrder.user'>
                <h4 class="text-center fs-4 mb-2">客戶資料</h4>
                <div class="mb-4">
                  <label for="name" class="form-label">姓名</label>
                  <VField type="text" id="name" placeholder="請輸入姓名" v-model.trim="modalOrder.user.name" name="姓名"
              rules="required" class="form-control" :class="{ 'is-invalid': errors['姓名'] }" />
                  <ErrorMessage name="姓名" class="text-danger ps-3" />
                </div>
                <div class="mb-4">
                  <label for="tel" class="form-label">電話</label>
                  <VField type="tel" id="tel" placeholder="請輸入電話" v-model.trim="modalOrder.user.tel" name="電話" class="form-control" :rules="isPhone"
              :class="{ 'is-invalid': errors['電話'] }" />
                  <ErrorMessage name="電話" class="text-danger ps-3" />
                </div>
                <div class="mb-4">
                  <label for="email" class="form-label">Email</label>
                  <VField type="email" id="email" placeholder="請輸入Email" v-model.trim="modalOrder.user.email" name="Email"
              rules="required|email" class="form-control" :class="{ 'is-invalid': errors['Email'] }" />
                  <ErrorMessage name="Email" class="text-danger ps-3" />
                </div>
                <div class="mb-4">
                  <label for="address" class="form-label">地址</label>
                  <VField type="address" id="address" placeholder="請輸入地址" v-model.trim="modalOrder.user.address" name="地址"
                    rules="required" class="form-control" :class="{ 'is-invalid': errors['地址'] }" />
                  <ErrorMessage name="地址" class="text-danger ps-3" />
                </div>
                <div>
                  <h4>留言：</h4>
                  <p>{{ modalOrder.message }}</p>
                </div>
              </div>
              <div class="col-md-6">
                <h4 class="text-center fs-4 mb-3">購買的商品</h4>
                <table class="table table-borderless align-middle text-nowrap">
                  <thead>
                    <tr>
                      <th class="text-center">商品名稱</th>
                      <th>數量</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in modalOrder.products" :key="product.id">
                      <td class="text-center">
                          {{ product.product.title }}
                      </td>
                      <td>
                        <div class="input-group">
                          <input type="number" class="form-control" min="1" v-model.number="product.qty"  @change="changePrice(product)">
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </VForm>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="submit" class="btn btn-primary" form="OrderForm" :disabled="isLoading">送出</button>
        </div>
      </div>
    </div>
  </div>
</template>