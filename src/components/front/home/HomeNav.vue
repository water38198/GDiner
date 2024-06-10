<template>
  <section class="mb-16">
    <h2 class="font-size-7 tracking-widest mb-7.5">
      尋找心中的美味<div class="i-fxemoji:potoffood inline-block"></div>
    </h2>
    <div class="grid gap-1.5 grid-cols-2 md:(grid-flow-col grid-cols-3 gap-3)">
      <div class="col-span-1 row-span-1" data-aos="zoom-in">
        <div class="card">
          <RouterLink to="/products" class="block">
            <div class="card-image">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711206743079.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=c6yUTZed7cSDED%2F%2BIJwocTGP1Kqc1BF9vYeZMeaIa6TSP4SC495wLe%2BRs4DYuCc9BBr%2FG2t0%2F8eLy8LBlyOoIoMH7v%2FpVa7Jk4LWgL0gtDcdxr4TtFN%2B3tujwdZrEDoSIcN2gUFdDGcV6B9OekGSuRmL4rMiNX8s9tYdJXBuFO2yb9BRSsidVvehETmli0FY0qB1bokkRQPZDryVOGR5yqgXsr6JyWPQ7wfP7eKaB3%2B%2BAaZW2R2Cqv9t%2Fjfq82OaCNvTmWapAsFbRFu1YjgPBdxc7po0k%2FllH0Q8PSuBX8jTraIuFajZTdffdUus64a3E1Jxbteck3uLB4oxt0z7dg%3D%3D"
                alt="shrimps and noodles" class="h-200px sm:h-250px md:h-400px">
            </div>
            <div class="pb-4">
              <h4 class="flex items-center font-size-5">其他好東西 <div
                  class="i-material-symbols:arrow-right-alt inline-block ms-1">
                </div>
              </h4>
            </div>
          </RouterLink>
        </div>
      </div>
      <div class="col-span-1 row-span-1" data-aos="zoom-in">
        <div class="card">
          <RouterLink to="/products?category=套餐" class="block">
            <div class="card-image">
              <img
                src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" class="h-200px sm:h-250px md:h-400px w-100%">
            </div>
            <div class="pb-4">
              <h4 class="flex items-center font-size-5">套餐<div
                  class="i-material-symbols:arrow-right-alt inline-block ms-1">
                </div>
              </h4>
            </div>
          </RouterLink>
        </div>
      </div>
      <div class="col-span-2 row-span-2" data-aos="zoom-in">
        <div class="card h-100%">
          <RouterLink to="/products?sort=最新" class="flex flex-col h-100%">
            <div class="card-image flex-1">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711206815709.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jL45KDGAo7g1MGnMeBKbEA8jDNP8xGJv5D5d4SIwMAOjaRyTmnfFaZhpPlNYuofyUs0ImxwehkOubmxBgrMu3LwgyIXUsmg%2FWT1Ju5nMTisSh5yYvWzjyQ5cWBgJyfisZXXmZ%2FTkM5DP%2FRQ0OrX7ccboe4jy01PPW3aenpl%2B9c0fSnRbgVixMIsX4W4ydFX2dPiQ9Vgwkav4dILH5YFJQ%2F%2B%2F25PmGLYEfzOEyte1t6Ov3kSUgSF55wcA4KYtHdtzvhVr5jg8NGKO%2F7UmfzzvLxdIbPMO%2B3ZuPbKDz5OSqjQYrwS6ANH0QmnP9gRQvnJbe1%2FLvcK5a8jS2g0D0GIjGg%3D%3D"
                alt="" class="md:h-100%">
            </div>
            <div class="pb-4">
              <h4 class="flex items-center font-size-5">新品上市<div
                  class="i-material-symbols:arrow-right-alt inline-block ms-1">
                </div>
              </h4>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>