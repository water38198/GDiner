<script>
import { mapActions,mapState } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
import RandomProduct from '@/components/front/RandomProduct.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  components: { RandomProduct },
  data(){
    return {
      isLoading: false,
      userForm: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      coupon: '',
    }
  },
  computed: {
    ...mapState(useCartStore, ['cart', 'cartLoading']),
    excludeList() {
      const list = [];
      if (this.cart.carts) {
        this.cart.carts.forEach(product => list.push(product.product.id));
      }
      return list;
    },
  },
  methods: {
    ...mapActions(useCartStore,['getCart', 'updateCart', 'deleteCart' ,'deleteCartAll']),
    async submitOrder() {
      if (this.cart.carts.length === 0) {
        this.$swal({
          icon: "error",
          title: "目前沒有東西在購物車喔~",
        });
        return;
      }
      try {
        this.isLoading = true;
        const res = await this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/order`, { data: this.userForm });
        this.$swal({
          title: res.data.message,
          icon: "success",
          timer:3000,
          showConfirmButton:false,
        }).then(() => {
          this.getCart();
          this.$router.push(`order?id=${res.data.orderId}`);
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
    async useCoupon() {
      if (this.coupon) {
        try {
          const res = await this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/coupon`, {
            data: {
              'code': this.coupon,
            }
          });
          this.$swal({
            icon: 'success',
            title: `${res.data.message}`,
            toast: true,
            position: 'bottom-end',
            timer: 1500,
            showConfirmButton: false,
          });
          this.coupon = '';
          this.getCart();
        } catch (err) {
        this.$swal({
          icon: 'error',
          title: `${err.response.data.message}`
        })
      }
      } 
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "請輸入正確的電話號碼"
    }
  }
}
</script>
<template>
  <div class="container px-2 md:px-12 py-10">
    <div class="mb-10">
      <!-- 購物車有東西 -->
      <div v-if="cart.carts?.length > 0" data-aos='fade-up'>
        <div class="flex justify-between items-center pb-7.5">
          <h2 class="font-size-12">購物車</h2>
          <button type="button"
            class="bg-transparent border-0 underline underline-offset-4 cursor-pointer hover:text-primary-light"
            @click="deleteCartAll">清空購物車</button>
        </div>
        <div class="mb-10 pb-10 border-(b-1 solid primary-200)">
          <table class="block md:table w-100%">
            <thead
              class="block md:table-header-group w-100% mb-4 border-(b-1 solid primary-veryLight) text-primary-200">
              <tr class="flex md:table-row justify-between">
                <th class="text-left">料理</th>
                <th class="md:w-50% lg:w-60%"></th>
                <th class="hidden md:block text-start">數量</th>
                <th class="text-right">小計</th>
                <th class="hidden md:block"></th>
              </tr>
            </thead>
            <tbody class="block md:table-row-group border-(b-1 solid primary-200)">
              <tr v-for="product in cart.carts" :key="product.id + '123'"
                class="grid gap-2 grid-rows-[repeat(2,auto)] grid-cols-[repeat(12,1fr)] md:table-row w-100% mb-6">
                <td class="md:py-5 row-start-1 row-end-3 col-span-3">
                  <div class="w-100% h-30 me-2 md:w-25 lg:me-10">
                    <img :src="product.product.imageUrl" :alt="`${product.product.title}的照片`"
                      class="block max-w-25 w-100% h-100% border-(2 solid primary) rd-2.5">
                  </div>
                </td>
                <td class="md:py-5 align-top col-start-4 col-end-10">
                  <div>
                    <RouterLink :to="`/product/${product.product.id}`"
                      class="block mb-2 lh-normal hover:(underline underline-offset-4 decoration-2)">
                      {{ product.product.title }}
                    </RouterLink>
                    <div>
                      <span class="font-size-3.5 text-primary opacity-75 lh-150%">
                        NT${{ product.product.price }}
                      </span>
                    </div>
                  </div>
                </td>
                <td class="md:py-5 align-top col-start-4 col-end-10">
                  <div class="md:mb-6 flex">
                    <div class="relative grid grid-cols-3 w-40 customBorder rd-3 h-10 md:h-12.5">
                      <button type="button" class="block bg-transparent border-0 px-4 cursor-pointer font-size-5 fw-900"
                        @click="product.qty - 1 > 0 ? product.qty-- : ''; updateCart(product);">
                        <div class="i-ic:round-minus"></div>
                      </button>
                      <input type="number" name="" id="quantity" :value="product.qty"
                        class="block bg-transparent border-0 appearance-none outline-0 w-100% text-center font-size-4"
                        min="1" @change="updateCart(product, $event)">
                      <button type="button" class="block bg-transparent border-0 px-4 cursor-pointer font-size-5 fw-900"
                        @click="product.qty++; updateCart(product);">
                        <div class="i-ic:round-plus"></div>
                      </button>
                    </div>
                  </div>
                </td>
                <td
                  class="row-start-1 row-end-2 col-start-10 col-end-13 ps-10 md:py-5 flex justify-end md:table-cell align-top">
                  <span class="flex justify-end items-start md:items-center h-12.5 text-nowrap">NT$ {{
    Math.floor(product.final_total) }}</span>
                </td>
                <td class="col-start-10 col-end-13 md:table-cell align-top md:py-5">
                  <div class="mx-4 flex justify-end h-12.5">
                    <button type="button"
                      class="bg-transparent border-0 font-size-6 cursor-pointer px-0 hover:(opacity-60)"
                      @click="deleteCart(product.id)">
                      <div class="i-material-symbols:delete-outline"></div>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot class="block md:table-row-group">
              <tr class="block md:table-row mb-10">
                <td colspan="5" class="block md:table-cell w-100% pt-10 text-center md:text-start ">
                  <RouterLink to="/products" class="tracking-widest underline underline-offset-4 hover:decoration-2">
                    繼續購物
                  </RouterLink>
                </td>
              </tr>
              <tr class="block md:table-row">
                <td colspan="5" class="block md:table-cell w-100%">
                  <div class="w-70 ms-a">
                    <div class="custom-input-group mb-4">
                      <input type="text" name="coupon" id="coupon"
                        class="block w-100% p-(x-3 y-1.5) border-(1 solid #dee2e6) rd" placeholder="請輸入 優惠券"
                        v-model.trim="coupon">
                      <label for="coupon">優惠券</label>
                      <button type="button" class="absolute right-0 top-50% translate-y--50% block h-100% border-0 bg-transparent p-(x-3 y-1.5) border-(l-2 solid primary) 
                                            rd-(r-3) cursor-pointer hover:(bg-primary text-secondary)"
                        @click="useCoupon">使用</button>
                    </div>
                    <template v-if="cart.carts[0].coupon">
                      <div class="mb-4 text-end">
                        <p class="mb-2">已套用優惠券代碼：{{ cart.carts[0].coupon.code }}
                        </p>
                        <p>折扣金額： -{{ Math.floor(cart.total - cart.final_total) }}</p>
                      </div>
                    </template>
                  </div>
                  <div>
                    <div class="flex items-center justify-end font-size-5">
                      <h3 class="me-5">總計</h3>
                      <p class="text-primary" v-if="cart.total == cart.final_total">NT$
                        <span>{{ cart.total }}</span>
                      </p>
                      <p class="text-red-500 font-size-6" v-else>NT${{ Math.floor(cart.final_total) }}</p>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div>
          <VLoading :active="isLoading" />
          <VForm class="md:w-75% mx-auto" v-slot="{ errors }" @submit="submitOrder" autocomplete="off">
            <div class="grid grid-cols-2 gap-4">
              <h2 class="col-span-2 mb-10 font-size-10">顧客資訊</h2>
              <div class="custom-input-group mb-4 col-span-2">
                <VField type="email" name="email" id="email" :class="{ 'invalid': errors['email'] }"
                  placeholder="請輸入 Email" rules="required|email" v-model="userForm.user.email" />
                <label for="email">Email</label>
                <ErrorMessage name="email" class="absolute block left-3 bottom--5 text-red-500 font-size-3" />
              </div>
              <div class="custom-input-group mb-4">
                <VField type="text" name="姓名" id="name" :class="{ 'invalid': errors['姓名'] }" rules="required"
                  placeholder="請輸入 姓名" v-model="userForm.user.name" />
                <label for="姓名">姓名</label>
                <ErrorMessage name="姓名" class="absolute block left-3 bottom--5 text-red-500 font-size-3" />
              </div>
              <div class="custom-input-group mb-4">
                <VField type="tel" name="電話" id="tel" :class="{ 'invalid': errors['電話'] }" :rules="isPhone"
                  placeholder="請輸入 電話" v-model="userForm.user.tel" />
                <label for="電話">電話</label>
                <ErrorMessage name="電話" class="absolute block left-3 bottom--5 text-red-500 font-size-3" />
              </div>
              <div class="custom-input-group mb-4 col-span-2">
                <VField type="address" name="地址" id="address" :class="{ 'invalid': errors['地址'] }" rules="required"
                  placeholder="請輸入 地址" v-model="userForm.user.address" />
                <label for="地址">地址</label>
                <ErrorMessage name="地址" class="absolute block left-3 bottom--5 text-red-500 font-size-3" />
              </div>
              <div class="custom-input-group mb-4 col-span-2">
                <VField as="textarea" name="userForm.message" id="message" cols="30" rows="10"
                  v-model="userForm.message" placeholder="請輸入留言" />
                <label for="message">留言(非必須)</label>
              </div>
              <div class="col-span-2 text-center">
                <button type="submit"
                  class="max-w-50% w-100% h-12 p-(x-7.5 y-1.5) bg-info  shadow-[0_2px_0_0_#3D081B] text-secondary border-0 rd-10 cursor-pointer hover:(shadow-none bg-info-dark)">送出訂單</button>
              </div>
            </div>
          </VForm>
        </div>
      </div>
      <!-- 購物車為空 -->
      <div class=" pb-20" v-else>
        <h2 class="mb-7 font-size-8 md:font-size-12 lh-tight font-serif text-center ">
          目前購物車為空 (´⊙ω⊙`)</h2>
        <div class="text-center">
          <RouterLink to="/products"
            class="inline-block bg-info text-secondary tracking-widest px-5 py-3 rd-100vh shadow-[0_2px_0_0_#3D081B] hover:shadow-[0_1px_0_0_#3D081B]">
            趕緊購物去
          </RouterLink>
        </div>
      </div>
    </div>
    <RandomProduct :exclude="excludeList" />
  </div>
</template>

<style scoped lang="scss">
th {
  @apply pb-4 text-primary opacity-60
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
  appearance: none;
}
</style>