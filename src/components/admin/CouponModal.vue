<script>
import * as bootstrap from 'bootstrap';

import moment from 'moment';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  props: {
    tempCoupon: {
      type: Object,
    },
    isNew: {
      type: Boolean,
    }
  },
  emits:['getCoupons'],
  data() {
    return {
      dateTime: '',
      modalCoupon: {},
      modal: null,
      isLoading: false,
    }
  },
  computed: {
    todayDate() {
      return moment().format('YYYY-MM-DD');
    }
  },
  methods: {
    async confirmCoupon() {
      this.isLoading = true;
      const method = this.isNew ? 'post' : 'put';
      const url = this.isNew ? `${VITE_URL}/v2/api/${VITE_PATH}/admin/coupon` : `${VITE_URL}/v2/api/${VITE_PATH}/admin/coupon/${this.modalCoupon.id}`;
      try {
        const res = await this.$http[method](url, { data: this.modalCoupon });
        this.$swal({
          title: `${res.data.message}`,
          icon: 'success',
          didClose: () => {
            this.modal.hide();
            this.$emit('getCoupons');
          }
        });
        
      } catch (err) {
        this.$swal({
          title: '錯誤發生',
          text: `${err.response.data.message}`,
          icon: 'error',
        })
      } finally {
        this.isLoading = false;
      }
    },
  },
  watch: {
    tempCoupon() {
      this.modalCoupon = { ...this.tempCoupon };
      // 時間戳記轉換成日期
      if (this.modalCoupon.due_date) {
        this.dateTime = moment(this.modalCoupon.due_date * 1000).format('YYYY-MM-DD');
      } else {
        this.dateTime = moment(new Date().getTime()).format('YYYY-MM-DD');
      };
      if (!this.modalCoupon.is_enabled) {
        this.modalCoupon.is_enabled = 0;
      }
    },
    dateTime() {
      this.modalCoupon.due_date = new Date(this.dateTime).getTime() / 1000;
    }
  },
  mounted() {
    this.modal = new bootstrap.Modal('#CouponModal');
  }
}
</script>

<template>
  <div class="modal fade" id="CouponModal" tabindex="-1" aria-labelledby="CouponLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-2" id="CouponModalLabel">{{ isNew ? "新增優惠券" : "編輯優惠券" }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <VForm @submit="confirmCoupon" v-slot="{ errors }" id="CouponForm">
            <div class="row gy-6">
              <div class="col-md-6">
                <div>
                  <label for="name" class="form-label">名稱：</label>
                  <VField type="text" id="name" name="名稱" rules="required" placeholder="請輸入名稱" v-model.trim="modalCoupon.title" class="form-control" :class="{ 'is-invalid': errors['名稱'] }" />
                  <ErrorMessage name="名稱" class="invalid-feedback ps-3" />
                </div>
              </div>
              <div class="col-md-6">
                <label for="code" class="form-label">優惠碼：</label>
                <VField type="text" id="code" name="優惠碼" rules="required" placeholder="請輸入優惠碼" class="form-control"
            :class="{ 'is-invalid': errors['優惠碼'] }" v-model.trim="modalCoupon.code" />
                <ErrorMessage name="優惠碼" class="invalid-feedback ps-3" />
              </div>
              <div class="col-md-6">
                <label for="due_date" class="form-label">到期日：</label>
                <VField type="date" id="due_date" name="到期日" rules="required" pattern="yyyy-MM-dd" class="form-control"
            :class="{ 'is-invalid': errors['到期日'] }" v-model="dateTime" :min="todayDate" />
                <ErrorMessage name="到期日" class="invalid-feedback ps-3" />
              </div>
              <div class="col-md-6">
                <label for="percent" class="form-label">優惠比例：</label>
                <VField type="number" id="percent" placeholder="請輸入折扣百分比" name="優惠比例" rules="required||max_value:100||min_value:0" v-model.number="modalCoupon.percent" min="0" class="form-control" :class="{ 'invalid': errors['優惠比例'] }" max="100" />
                <ErrorMessage name="優惠比例" class="invalid-feedback ps-3" />
              </div>
              <div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" v-model="modalCoupon.is_enabled" id="is_paid" :true-value="1" :false-value="0">
                  <label class="form-check-label" for="is_paid">是否啟用</label>
                </div>

              </div>
            </div>
          </VForm>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="submit" class="btn btn-primary" form="CouponForm" :disabled="isLoading">送出</button>
        </div>
      </div>
    </div>
  </div>
  <!-- 
        <div>
          <label for="is_paid">
            <input type="checkbox" id="is_paid" v-model="modalCoupon.is_enabled" class="custom-checkbox" :true-value="1"
              :false-value="0">
            是否啟用
          </label>
        </div>
      </div>
    </VForm>
  </dialog> -->
</template>
