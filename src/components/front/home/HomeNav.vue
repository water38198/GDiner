<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="mb-10">
    <h2 class="mb-4 fs-2 fw-bold">
      尋找心中的美味<div class="i-fxemoji:potoffood inline-block"></div>
    </h2>
    <div class="row row-gap-4">
      <div class="col-12 col-md-4">
        <div class="row align-content-between row-gap-4 h-100">
          <div class="col-6 col-md-12">
            <RouterLink to="/products" class="d-block" data-aos="fade-up">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711206743079.jpg"
                  alt="link to other good things" class="mb-4 w-100 border-custom bg-primary">
              <div>
                <h4 class="card-title">其他好東西 <i class="bi bi-arrow-right"></i></h4>
              </div>
            </RouterLink>
          </div>
          <div class="col-6 col-md-12">
            <RouterLink to="/products?category=套餐" class="d-block" data-aos="fade-up">
              <img src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="link to bundle meal" class="mb-4 w-100 border-custom bg-primary">
              <div>
                <h4 class="cart-title">套餐<i class="bi bi-arrow-right"></i></h4>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8">
        <RouterLink to="/products?category=主食" class="h-100 d-flex flex-column" data-aos="fade-up">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711206815709.jpg" alt="link to new products" class="flex-fill mb-4 w-100 border-custom bg-primary">
          <div>
            <h4>主食<i class="bi bi-arrow-right"></i></h4>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.col-6 img{
  height: 200px;
  @media (min-width: 576px) {
    height: 250px;
  }
  @media (min-width: 768px) {
    height: 300px;
  }
}
.col-md-8 img{
  max-height: 450px;
  @media (min-width: 768px) {
    max-height: 100%;
  }
}

a:hover{
  h4{
    text-decoration: underline;
    text-underline-offset: 4px;
  }
}
</style>