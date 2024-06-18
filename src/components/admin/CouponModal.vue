<script>
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
    }
  },
  computed: {
    todayDate() {
      return moment().format('YYYY-MM-DD');
    }
  },
  methods: {
    showModal() {
      this.$refs.dialog.showModal();
    },
    close() {
      this.$refs.dialog.close();
    },
    autoClose(e) {
      if (e.target.nodeName === "DIALOG") {
        this.$refs.dialog.close();
      }
    },
    async confirmCoupon() {
      const method = this.isNew ? 'post' : 'put';
      const url = this.isNew ? `${VITE_URL}/v2/api/${VITE_PATH}/admin/coupon` : `${VITE_URL}/v2/api/${VITE_PATH}/admin/coupon/${this.modalCoupon.id}`;
      try {
        const res = await this.$http[method](url, { data: this.modalCoupon });
        this.$swal({
          title: `${res.data.message}`,
          icon: 'success',
          didClose: () => {
            this.$emit('getCoupons');
          }
        });
        this.close();
      } catch (err) {
        this.$swal({
          title: '錯誤發生',
          text: `${err.response.data.message}`,
          icon: 'error',
        })
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
  }
}
</script>

<template>
  <dialog ref="dialog" class="max-w-1140px w-100% border-0 rd p-0 backdrop:backdrop-blur-3" @click="autoClose">
    <VForm method="dialog" v-slot="{ errors }" @submit="confirmCoupon">
      <div class="bg-#212529 p-4 flex justify-between items-center">
        <h3 class="text-white">{{ isNew ? "新增" : "編輯" }}</h3>
        <button type="button" class="i-ic:baseline-close p-2 text-white font-size-4 cursor-pointer"
          @click="close"></button>
      </div>
      <div class="grid grid-cols-2 gap-6 p-5">
        <div class="input-group">
          <label for="name">名稱：</label>
          <VField type="text" id="name" name="名稱" rules="required" placeholder="請輸入名稱" v-model.trim="modalCoupon.title"
            :class="{ 'invalid': errors['名稱'] }" />
          <ErrorMessage name="名稱" class="block ps-3 pt-2 text-red-500 font-size-3"></ErrorMessage>
        </div>
        <div class="input-group">
          <label for="code">優惠碼：</label>
          <VField type="text" id="code" name="優惠碼" rules="required" placeholder="請輸入優惠碼"
            :class="{ 'invalid': errors['優惠碼'] }" v-model.trim="modalCoupon.code" />
          <ErrorMessage name="優惠碼" class="block ps-3 pt-2 text-red-500 font-size-3"></ErrorMessage>
        </div>

        <div class="input-group">
          <label for="due_date">到期日：</label>
          <VField type="date" id="due_date" name="到期日" rules="required" pattern="yyyy-MM-dd"
            :class="{ 'invalid': errors['到期日'] }" v-model="dateTime" :min="todayDate" />
          <ErrorMessage name="到期日" class="block ps-3 pt-2 text-red-500 font-size-3"></ErrorMessage>
        </div>
        <div class="input-group mb-4">
          <label for="percent">優惠比例：</label>
          <VField type="number" id="percent" placeholder="請輸入折扣百分比" name="優惠比例"
            rules="required||max_value:100||min_value:0" v-model.number="modalCoupon.percent" min="0"
            :class="{ 'invalid': errors['優惠比例'] }" max="100" />
          <ErrorMessage name="優惠比例" class="block ps-3 pt-2 text-red-500 font-size-3"></ErrorMessage>
        </div>
        <div>
          <label for="is_paid">
            <input type="checkbox" id="is_paid" v-model="modalCoupon.is_enabled" class="custom-checkbox" :true-value="1"
              :false-value="0">
            是否啟用
          </label>
        </div>
      </div>
      <div class="text-end p-3 border-(t solid #dee2e6)">
        <button type="button"
          class="m-1 px-3 py-1.5 bg-transparent text-#6c757d border-(1 solid #6c757d ) rd hover:(cursor-pointer bg-#5c636a text-white)"
          @click="close">取消</button>
        <button type="submit"
          class="m-1 px-3 py-1.5 text-white bg-#0d6efd border-0 rd hover:(cursor-pointer bg-#0b5ed7)">確定</button>
      </div>
    </VForm>
  </dialog>
</template>
