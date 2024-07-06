<script>
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  props: {
    cart: {
      type:Object
    }
  },
  emits:['getCart'],
  data() {
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
    }
  },
  methods: {
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
          timer:2000,
          showConfirmButton:false,
        }).then(() => {
          this.$emit('getCart');
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
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "請輸入正確的電話號碼"
    }
  }
}
</script>

<template>
  <div class="py-10 px-4">
    <VLoading :active="isLoading" />
    <VForm class="w-md-50 mx-auto" v-slot="{ errors }" @submit="submitOrder" autocomplete="off" ref="CartForm">
      <div class="row gy-4 gy-md-6">
        <h2 class="text-center">顧客資訊</h2>
        <div>
          <div class="form-floating">
            <VField type="email" name="Email" id="email" class="form-control custom-border" :class="{ 'is-invalid': errors['Email'] }"
              placeholder="請輸入 Email" rules="required|email" v-model="userForm.user.email" />
            <label for="email">Email</label>
            <ErrorMessage name="Email" class="text-danger ms-3" />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-floating">
            <VField type="text" name="姓名" id="name" class="form-control custom-border" :class="{ 'is-invalid': errors['姓名'] }" rules="required"
              placeholder="請輸入 姓名" v-model="userForm.user.name" />
            <label for="姓名">姓名</label>
            <ErrorMessage name="姓名" class="text-danger ms-3" />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-floating">
            <VField type="tel" name="電話" id="tel" class="form-control custom-border" :class="{ 'is-invalid': errors['電話'] }" :rules="isPhone"
              placeholder="請輸入 電話" v-model="userForm.user.tel" />
            <label for="電話">電話</label>
            <ErrorMessage name="電話" class="text-danger ms-3" />
          </div>
        </div>
        <div>
          <div class="form-floating">
            <VField type="address" name="地址" id="address" class="form-control custom-border" :class="{ 'is-invalid': errors['地址'] }" rules="required"
              placeholder="請輸入 地址" v-model="userForm.user.address" />
            <label for="地址">地址</label>
            <ErrorMessage name="地址" class="text-danger ms-3" />
          </div>
        </div>
        <div>
          <div class="form-floating">
            <VField as="textarea" name="userForm.message" id="message" cols="30" rows="10" class="form-control custom-border"
              v-model="userForm.message" placeholder="請輸入留言" />
            <label for="message">留言(非必須)</label>
          </div>
        </div>
        <div class="text-center pt-6">
          <button type="submit"
            class="btn btn-info px-4 py-2">送出訂單</button>
        </div>
      </div>
    </VForm>
  </div>
</template>