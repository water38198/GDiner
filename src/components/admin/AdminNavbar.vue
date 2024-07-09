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
  <nav class="navbar navbar-expand bg-body-tertiary text-nowrap pb-0">
    <div class="container justify-content-center justify-content-sm-between py-2">
      <span class="navbar-brand mb-0 fs-1 text-primary d-none d-sm-inline">後台</span>
      <ul class="navbar-nav gap-4">
        <li class="nav-item">
          <RouterLink to="/admin/products" class="nav-link h-100">產品</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/admin/orders" class="nav-link">訂單</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/admin/coupons" class="nav-link">優惠券</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">回前台</RouterLink>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click.prevent="logOut">登出</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active{
  color: var(--bs-primary);
  opacity: .8;
  transform: scale(1.5);
  text-decoration: underline;
  text-underline-offset: 4px;
}

</style>