<script>
const { VITE_URL } = import.meta.env;
export default {
  methods: {
    async logOut() {
      try {
        const res = await this.$http.post(`${VITE_URL}/v2/logout`);
        document.cookie = 'myToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
        this.$swal({
          icon: 'success',
          title: `${res.data.message}`,
          didClose: () => {
            this.$router.push('/');
          }
        })
      } catch (err) {
        this.$swal({
          icon: 'error',
          text: `${err.response.data.message}`
        })
      }
    }
  }
}
</script>
<template>
  <nav class="bg-secondary">
    <ul class="nav-list flex flex-col gap-10 py-8 h-full">
      <li>
        <RouterLink to="/admin/products" class="block px-8 py-4 ml-8 rd-[100vw_0_0_100vw] font-size-8">產品
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/admin/orders" class="block px-8 py-4 ml-8 rd-[100vw_0_0_100vw] font-size-8">訂單
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/admin/coupons" class="block px-8 py-4 ml-8 rd-[100vw_0_0_100vw] font-size-8">優惠券
        </RouterLink>
      </li>
      <li class="mt-auto">
        <RouterLink to="/" class="block px-8 py-4 ml-8  font-size-4">回前台
        </RouterLink>
      </li>
      <li>
        <a href="#" class="block px-8  ml-8  font-size-4" @click.prevent="logOut">登出</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-list a.router-link-active {
  background: #fff;
  position: relative;
}

.nav-list a.router-link-active::before,
.nav-list a.router-link-active::after {
  content: '';
  position: absolute;
  width: 1rem;
  height: 1rem;
  right: 0;
  background: #F2EFDD;
}

.nav-list a.router-link-active::before {
  top: -1rem;
  border-radius: 0 0 100vh 0;
  box-shadow: 4px 4px 0 4px white;
}

.nav-list a.router-link-active::after {
  bottom: -1rem;
  border-radius: 0 100vh 0 0;
  box-shadow: 4px -4px 0 4px white;
}
</style>