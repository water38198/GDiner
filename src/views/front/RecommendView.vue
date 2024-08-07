<script>
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      isLoading:false,
    }
  },
  methods: {
    async getProducts() {
      this.isLoading = true;
      try {
        const res = await this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`);
        this.products = res.data.products.reverse();
      } catch (err) {
        this.$swal({
          title: '錯誤發生',
          icon: 'error',
          text: '請嘗試重新整理，如果此狀況持續發生，請聯絡我們',
        })
      } finally {
        this.isLoading = false;
      }
    }
  },
  mounted() {
    this.getProducts();
  }
}
</script>

<template>
  <VLoading :active="isLoading" />
  <div class="container pb-16">
    <section class="pt-6">
      <div class="mb-2 mb-md-8">
        <h2 class="fs-1 mb-6">初來乍到</h2>
        <div class="row">
          <div class="col-sm-10 col-lg-8">
            <img src="https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="歡迎來到" class="border-custom border-custom-large bg-primary mb-4" loading="lazy">
            <p>親愛的客人，
              我們非常榮幸能夠歡迎您來到阿橘飯店！在這裡，我們致力於為您提供一個美味、舒適和難忘的美味饗宴，讓您的每一口都成為一段珍貴的回憶。如果您是第一次光臨本店，我們推薦您點餐的內容包含：
            </p>
          </div>
        </div>
      </div>
      <div class="mb-6 mb-md-16">
        <ul class="nav gap-6 fs-5">
          <li class="nav-item d-flex align-items-center gap-2">
            <img src="@/assets/img/recommend/EmojioneGreenSalad.svg" alt="salad">沙拉
          </li>
          <li class="nav-item d-flex align-items-center gap-2">
            <img src="@/assets/img/recommend/EmojioneStuffedFlatbread.svg" alt="side dish">副食
          </li>
          <li class="nav-item d-flex align-items-center gap-2">
            <img src="@/assets/img/recommend/FluentEmojiFlatCutOfMeat.svg" alt="main">主食
          </li>
          <li class="nav-item d-flex align-items-center gap-2">
            <img src="@/assets/img/recommend/NotoV1Shortcake.svg" alt="dessert">甜點
          </li>
          <li class="nav-item d-flex align-items-center gap-2">
            <img src="@/assets/img/recommend/TwemojiTropicalDrink.svg" alt="drinks">飲料
          </li>
        </ul>
      </div>
    </section>
    <!-- 近期上新 -->
    <section class="pt-6">
      <div class="mb-8">
        <h2 class="mb-6 fs-1">
          近期上新
          <i class="bi bi-fire"></i>
        </h2>
        <div class="row">
          <p class="col-sm-10 col-lg-8">
            阿橘飯店每季都會固定更新菜單，以符合當季盛產的食材，每道新的料理都是阿橘師通經過無數次試驗，反覆調整食材搭配而成，絕對是令人驚豔的美味。
          </p>
        </div>
      </div>
      <div class="mb-6 mb-md-16">
        <ul class="list-unstyled row row-cols-2 row-cols-lg-4 gy-4">
          <li v-for="(product, index) in products.slice(0, 4)" :key="product.id" data-aos="fade-up"
            :data-aos-delay="100 * index">
            <div class="card">
              <RouterLink :to="`/product/${product.id}`" class="d-block">
                <div class="card-image">
                  <img :src="product.imageUrl" :alt="`${product.title} 的圖片`" class="w-100" loading="lazy">
                </div>
                <h3 class="card-title fs-5 mb-1 tracking-wider">{{ product.title }}</h3>
                <div class="pb-4">
                  <span>NT$ {{ product.price }}</span>
                </div>
              </RouterLink>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!-- 套餐推薦 -->
    <section class="pt-6">
      <div class="mb-8">
        <h2 class="mb-6 fs-1">
          套餐推薦 
          <i class="bi bi-heart-half"></i>
        </h2>
        <div class="row">
          <p class="col-sm-10 col-lg-8">
            為您推薦阿橘飯店的經典套餐，每種套餐組合都由阿橘師嚴格把關，讓阿橘師帶領您體驗一段美食風暴。
          </p>
        </div>
      </div>
      <div class="mb-6 mb-md-16">
        <ul class="list-unstyled row row-cols-2 row-cols-lg-4 gy-4">
          <li v-for="(product, index) in products.filter(item => item.category == '套餐').slice(0, 4)" :key="product.id"
            data-aos="fade-up" :data-aos-delay="100 * index">
            <div class="card">
              <RouterLink :to='`/product/${product.id}`' class="d-block">
                <div class="card-image">
                  <img :src="product.imageUrl" :alt="`${product.title} 的圖片`" class="d-block w-100" loading="lazy">
                </div>
                <h3 class="card-title fs-5 mb-4">{{ product.title }}</h3>
                <div class="pb-4">
                  <span>NT$ {{ product.price }}</span>
                </div>
              </RouterLink>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="pt-6">
      <h2 class="fs-1 mb-6">還是很餓？</h2>
      <div class="row row-cols-md-2">
        <div class="card">
          <RouterLink to="/products" class="d-block">
            <div class="card-image">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711208607404.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=R%2BibykpH3TVLUt1W68Z8h7bSXbzhjB0KJE53cpm6myt%2BRRHW1XDK75piSd6u8oJZ9SoFmiLT6oJyTURbEuXwQjedXC7xVqw7qkFYKhju00oKF6Eg38%2FfVICi7l36Z%2BmjkyupSu9i8DkMnfpuiUzRKSTpJZXFzjONKajAgS2GDJZltflhcACUj%2BvGS4iEK%2BWPI1GML4hoKn4NLCGGBDZAPbG4Uh1pg%2BdokE9o1BfHKF7xGGAfmTNjNH%2FdOM1gWYdWvw1a0%2BPXrAoOf4G1yVSac8YEXcWX5HTi6G3lQa%2Bg9Rt8xCX8fb4qRisZeLkbGI7S9LfZeES0RpwtCTzv3zVuFA%3D%3D"
                alt="" class="w-100" loading="lazy">
            </div>
            <h4 class="card-title mb-4">
              其他料理<i class="bi bi-arrow-right"></i>
            </h4>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.card-image{
  img{
    height: 150px;
    @media (min-width:768px) {
      height: 250px;
    }
  }
}
</style>