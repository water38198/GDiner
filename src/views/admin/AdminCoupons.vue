<script>
import moment from 'moment';
import CouponModal from '@/components/admin/CouponModal.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  components: { CouponModal, PaginationComponent },
  data() {
    return {
      coupons: [],
      pagination: {},
      tempCoupon: {},
      isNew: false,
      isLoading: false
    }
  },
  methods: {
    async getCoupons(page = 1) {
      this.isLoading = true;
      try {
        const res = await this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/coupons?page=${page}`);
        this.coupons = res.data.coupons;
        this.pagination = res.data.pagination;
      } catch (err) {
        console.log(err);
        this.$swal({
          icon: 'error',
          title: '錯誤發生',
          text: err.response.data.message,
        })
      } finally {
        this.isLoading = false;
      }
    },
    getMoment(data) {
      return moment(data).format('YYYY-MM-DD');
    },
    addCoupon() {
      this.isNew = true;
      this.tempCoupon = {};
    },
    editCoupon(coupon) {
      this.tempCoupon = coupon;
      this.isNew = false;
    },

    deleteCoupon(coupon) {
      const { id } = coupon;
      this.$swal({
        title: `你確定要刪除優惠券${coupon.title}`,
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: '取消',
        confirmButtonText: '確定'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await this.$http.delete(`${VITE_URL}/v2/api/${VITE_PATH}/admin/coupon/${id}`);
            this.$swal({
              title: `${res.data.message}`,
              icon: 'success',
              didClose: () => {
                this.getCoupons();
              }
            });
          } catch (err) {
            
            this.$swal({
              title: '錯誤發生',
              text: `${err.response.data.message}`,
              icon: 'error',
              target: 'dialog'
            })
          }
        }
      })
    },
    dateColor(date) {
      const now = Date.now() / 1000;
      if (date - now < 0) {
        return 'text-danger'
      } else if (date - now < 7 * 24 * 60 * 60) {
        return 'text-warning'
      } else {
        return 'text-success'
      }
    }
  },
  mounted() {
    this.getCoupons();
  }
}
</script>
<template>
  <VLoading :active="isLoading" />
  <div class="py-4 py-md-10">
    <h2 class="text-center fs-1">優惠券</h2>
    <div class="text-end mt-6">
      <!-- 新增按鈕 -->
      <button type="button"
        class="btn btn-primary px-3 py-2"
        @click="addCoupon" data-bs-toggle="modal" data-bs-target="#CouponModal">建立優惠券</button>
    </div>
    <div class="table-responsive">
      <!-- 優惠券列表 -->
      <table class="table mt-6 text-nowrap align-middle">
        <thead>
          <tr>
            <th>名稱</th>
            <th>優惠碼</th>
            <th>到期日</th>
            <th>百分比</th>
            <th class="text-center">是否啟用</th>
            <th class="text-center">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="coupon in coupons" :key="coupon.id">
            <td>{{ coupon.title }}</td>
            <td>{{ coupon.code }}</td>
            <td><span :class="dateColor(coupon.due_date)"> {{ getMoment(coupon.due_date * 1000) }}</span>
            </td>
            <td>{{ coupon.percent }}</td>
            <td class="text-center">
              <span class="text-success" v-if="coupon.is_enabled">啟用</span>
              <span class="text-danger" v-else>未啟用</span>
            </td>
            <td class="text-center">
              <div class="btn-group text-nowrap">
                <button type="button"
                  class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#CouponModal"
                  @click="editCoupon(coupon)">
                  編輯
                </button>
                <button type="button"
                  class="btn btn-outline-danger"
                  @click="deleteCoupon(coupon)">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li>已過期 & 三天之內 : <span class="text-danger">紅色</span></li>
        <li>三到七天內 : <span class="text-warning">黃色</span></li>
        <li>七天以上 : <span class="text-success">綠色</span></li>
      </ul>
    </div>
  <!--分頁  -->
    <template v-if="coupons.length">
      <PaginationComponent :pages="pagination" @change-page="getCoupons" class="mt-auto" />
    </template>
  </div>

  <!-- Modal -->
  <CouponModal :temp-coupon="tempCoupon" ref="couponModalRef" :is-new="isNew" @get-coupons="getCoupons" />


</template>

<style lang="postcss">
td,
th {
  padding: 8px;
}
</style>