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
      this.$refs.couponModalRef.showModal();
    },
    editCoupon(coupon) {
      this.tempCoupon = coupon;
      this.isNew = false;
      this.$refs.couponModalRef.showModal();
    },
    async confirmCoupon(coupon) {
      const method = this.isNew ? 'post' : 'put';
      const url = this.isNew ? `${VITE_URL}/v2/api/${VITE_PATH}/admin/coupon` : `${VITE_URL}/v2/api/${VITE_PATH}/admin/coupon/${coupon.id}`;
      try {
        const res = await this.$http[method](url, { data: coupon });
        this.$swal({
          title: `${res.data.message}`,
          icon: 'success',
          didClose: () => {
            this.getCoupons();
          }
        });
        this.$refs.couponModalRef.dialog.close();
      } catch (err) {
        this.$swal({
          title: '錯誤發生',
          text: `${err.response.data.message}`,
          icon: 'error',
          target: 'dialog'
        })
      }
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
            this.$refs.couponModalRef.dialog.close();
          } catch (err) {
            console.log(err)
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
        return 'text-red'
      } else if (date - now < 3 * 24 * 60 * 60) {
        return 'text-orange'
      } else if (date - now < 7 * 24 * 60 * 60 && date - now > 3 * 24 * 60 * 60) {
        return 'text-yellow'
      } else {
        return 'text-green-700'
      }
    }
  },
  mounted() {
    this.getCoupons();
  }
}
</script>
<template>
  <div class="p-10 flex flex-col h-100%">
    <h2 class="font-size-12">優惠券</h2>
    <div class="relative min-h-100">
      <VLoading :active="isLoading" :is-full-page="false" />
      <div class="text-end mt-6">
        <!-- 新增按鈕 -->
        <button type="button"
          class="bg-#0d6efd border-0 text-white cursor-pointer inline-block px-3 py-1.5 rd font-size-4 hover:bg-#0b5ed7"
          @click="addCoupon">建立優惠券</button>
      </div>
      <!-- 優惠券列表 -->
      <table class="w-100% my-6">
        <thead class="border-b-1 border-black border-solid fw-bold text-left">
          <tr>
            <th width="120">
              名稱
            </th>
            <th>優惠碼</th>
            <th>
              到期日
            </th>
            <th>
              百分比
            </th>
            <th width="100" class="text-center">
              是否啟用
            </th>
            <th width="120">
              編輯
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-#DEE2E6 border-solid" v-for="coupon in coupons" :key="coupon.id">
            <td>{{ coupon.title }}</td>
            <td>{{ coupon.code }}</td>
            <td><span :class="dateColor(coupon.due_date)"> {{ getMoment(coupon.due_date * 1000) }}</span>
            </td>
            <td>{{ coupon.percent }}</td>
            <td class="text-center">
              <span class="text-#198754" v-if="coupon.is_enabled">啟用</span>
              <span class="text-red" v-else>未啟用</span>
            </td>
            <td>
              <div>
                <button type="button"
                  class="text-#0d6efd bg-transparent border-(1 #0d6efd solid) rd-tl rd-bl px-2 py-1 hover:(bg-#0d6efd text-white cursor-pointer)"
                  @click="editCoupon(coupon)">
                  編輯
                </button>
                <button type="button"
                  class="text-#dc3545 bg-transparent border-1 border-#de3545 border-solid rd-tr rd-br px-2 py-1 hover:(bg-#de3545 text-white cursor-pointer)"
                  @click="deleteCoupon(coupon)">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <ul class="grid gap-2">
        <li>已過期 : <span class="text-red">紅色</span></li>
        <li>三天之內 : <span class="text-orange">橘色</span></li>
        <li>三到七天內 : <span class="text-yellow">黃色</span></li>
        <li>七天以上 : <span class="text-green-700">綠色</span></li>
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