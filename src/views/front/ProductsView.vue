<script>
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data() {
    return {
      isLoading: false,
      products:[],
      sortBy: '最新',
      filterCategories: [],
      lowPrice: null,
      highPrice: null,
      priceRangeText: '',
      searchText: '',
      pages: {
        current: 1,
        total:0
      }
    }
  },
  computed: {
    filteredList() {
      let newList = []
      // 分類：主食、甜點、湯品
      if (this.filterCategories.length > 0) {
        newList = this.products.filter((product) => this.filterCategories.includes(product.category))
      } else {
        newList = this.products;
      }
      // 價格
      if (this.lowPrice > 0) {
        newList = newList.filter((product) => product.price >= this.lowPrice);
      };
      if (this.highPrice > 0) {
        newList = newList.filter((product) => product.price <= this.highPrice);
      };
    // 排序
      if (this.sortBy === '最新') newList = newList.sort((a, b) => b.created - a.created)
      if (this.sortBy === '最舊') newList = newList.sort((a, b) => a.created - b.created)
      if (this.sortBy === '最高價格') newList = newList.sort((a, b) => b.price - a.price)
      if (this.sortBy === '最低價格') newList = newList.sort((a, b) => a.price - b.price)
      // 搜尋
      if (this.searchText) {
        newList = newList.filter((product) => product.title.includes(this.searchText))
      }
      return newList
        }
  },
  methods: {
    async getProducts() {
      this.isLoading = true;
      try {
        const res = await this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`);
        this.products = res.data.products;
      } catch (err) {
        this.$swal({
          title: '錯誤發生',
          icon: 'error',
          text: `${err.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,
        })
      } finally {
        this.isLoading = false;
      }
    },
    deleteCategory(category) {
      this.filterCategories = this.filterCategories.filter(item => item !== category);
    },
    resetCategory() {
      this.filterCategories = [];
    },
    resetPriceRange() {
      this.lowPrice = null;
      this.highPrice = null;
      this.priceRangeText = '';
    },
    resetSearch() {
      this.searchText.value = '';
      this.$router.push('/products');
    },
    resetFilter() {
      this.resetCategory();
      this.resetPriceRange();
      this.resetSearch();
    },
    changePage(action) {
      if (typeof action === 'number') {
        this.pages.current = action
      } else if (action === '+') {
        this.pages.current++
      } else {
        this.pages.current--
      }
      window.scrollTo({
        top: 0
      })
    },
    getPriceText() {
      // 計算價格範圍
      let lowText = this.lowPrice;
      let highText = this.highPrice;
      if (lowText == undefined || lowText == null) {
        lowText = '';
      }
      if (highText == undefined || highText == null) {
        highText = '';
      }
      if (lowText == '' && highText == '') {
        this.priceRangeText = '';
      } else {
        this.priceRangeText = `${lowText} ~ ${highText}`
      }
    }
  },
  watch: {
    $router() {
      if (this.$route.query.search) {
        this.searchText.value = this.$route.query.search;
      }
    },
    filteredList() {
      this.pages.total = Math.ceil(this.filteredList.length / 12);
      this.pages.current = 1;
    },
    lowPrice() {
      this.getPriceText();
    },
    highPrice() {
      this.getPriceText();
    }
  },
  mounted() {
  // 抓取任何的篩選、分類、搜尋
  if (this.$route.query.category) {
    this.filterCategories.push(this.$route.query.category)
  }
  if (this.$route.query.sort) {
    this.sortBy = this.$route.query.sort;
  }
  if (this.$route.query.search) {
    this.searchText = this.$route.query.search;
  }
    this.getProducts();
  }
}

</script>

<template>
  <VLoading :active="isLoading" />
  <div class="container px-4 lg:px-12.5">
    <h2 class="py-6 font-size-10 md:(font-size-15)">料理</h2>
    <!-- 篩選 -->
    <div class="flex flex-wrap items-center justify-between mb-6">
      <form action="" class="flex items-center gap-2 sm:gap-4">
        <details class="relative">
          <summary class="flex list-none text-primary-light cursor-pointer hover:(underline underline-offset-4)">
            <span class="text-primary-light hover:text-primary">分類</span>
            <div class="i-material-symbols:keyboard-arrow-down"></div>
          </summary>
          <div class="absolute top-10 left-[-40px] sm:left-[-1.2rem] z-2 w-80 rd-4 customBorder rd-2 bg-secondary">
            <div class="flex justify-between px-5 py-4 border-(b-1 solid primary-200)">
              <span>0 已選取</span>
              <button type="button"
                class="bg-transparent border-0 underline underline-offset-4 tracking-widest hover:(cursor-pointer decoration-2)"
                @click="resetCategory">
                重置
              </button>
            </div>
            <ul class="px-5 py-1">
              <li>
                <label for="主食" class="relative flex gap-3 py-2.5 lh-tight cursor-pointer">
                  <input type="checkbox" id="主食" value="主食" v-model="filterCategories"
                    class="appearance-none m-0 size-5 rd-1 cursor-pointer" />
                  主食
                </label>
              </li>
              <li>
                <label for="沙拉" class="relative flex gap-3 py-2.5 lh-tight cursor-pointer">
                  <input type="checkbox" id="沙拉" value="沙拉" v-model="filterCategories"
                    class="appearance-none m-0 size-5 rd-1 cursor-pointer" />
                  沙拉
                </label>
              </li>
              <li>
                <label for="湯品" class="relative flex gap-3 py-2.5 lh-tight cursor-pointer">
                  <input type="checkbox" id="湯品" value="湯品" v-model="filterCategories"
                    class="appearance-none m-0 size-5 rd-1 cursor-pointer" />
                  湯品
                </label>
              </li>
              <li>
                <label for="副食" class="relative flex gap-3 py-2.5 lh-tight cursor-pointer">
                  <input type="checkbox" id="副食" value="副食" v-model="filterCategories"
                    class="appearance-none m-0 size-5 rd-1 cursor-pointer" />
                  副食
                </label>
              </li>
              <li>
                <label for="甜點" class="relative flex gap-3 py-2.5 lh-tight cursor-pointer">
                  <input type="checkbox" id="甜點" value="甜點" v-model="filterCategories"
                    class="appearance-none m-0 size-5 rd-1 cursor-pointer" />
                  甜點
                </label>
              </li>
              <li>
                <label for="飲料" class="relative flex gap-3 py-2.5 lh-tight cursor-pointer">
                  <input type="checkbox" id="飲料" value="飲料" v-model="filterCategories"
                    class="appearance-none m-0 size-5 rd-1 cursor-pointer" />
                  飲料
                </label>
              </li>
              <li>
                <label for="套餐" class="relative flex gap-3 py-2.5 lh-tight cursor-pointer">
                  <input type="checkbox" id="套餐" value="套餐" v-model="filterCategories"
                    class="appearance-none m-0 size-5 rd-1 cursor-pointer" />
                  套餐
                </label>
              </li>
            </ul>
          </div>
        </details>
        <!-- 價格範圍 -->
        <details class="relative">
          <summary class="flex list-none text-primary-light hover:(cursor-pointer underline underline-offset-4)">
            <span class="text-primary-light hover:text-primary">價格</span>
            <div class="i-material-symbols:keyboard-arrow-down"></div>
          </summary>
          <div class="absolute top-10 left-[-120px] sm:left-[-1.2rem] z-2 w-80 rd-4 customBorder rd-2 bg-secondary">
            <div class="flex justify-between px-5 py-4 border-(b-1 solid primary-200)">
              <span>價格範圍</span>
              <button type="button"
                class="bg-transparent border-0 underline underline-offset-4 tracking-widest hover:(cursor-pointer decoration-2)"
                @click="resetPriceRange">
                重置
              </button>
            </div>
            <div class="flex items-center p-5">
              <span class="me-1">$</span>
              <div class="price-group">
                <input type="number" id="lowPrice" v-model.trim="lowPrice" class="w-100%" placeholder="最低價" min="0" />
                <label for="lowPrice">最低價</label>
              </div>
              <span class="ms-5 me-1">$</span>
              <div class="price-group">
                <input type="number" id="highPrice" v-model.trim="highPrice" class="w-100%" placeholder="最高價" min="0" />
                <label for="highPrice">最高價</label>
              </div>
            </div>
          </div>
        </details>
        <div>
          <select name="sortBy" id="sortBy" @change="sortProduct" v-model="sortBy"
            class="bg-transparent border-0 cursor-pointer font-size-4" ref="sortRef">
            <option value="最高價格">最高價格</option>
            <option value="最低價格">最低價格</option>
            <option value="最新" selected>最新</option>
            <option value="最舊">最舊</option>
          </select>
        </div>
      </form>
      <span class="ms-auto">{{
    filteredList.length === products.length
      ? `${filteredList.length} 項料理`
      : `${filteredList.length} 項料理`
  }}</span>
    </div>
    <!-- 已選擇的篩選 -->
    <div class="flex gap-4 mb-6" v-if="filterCategories.length !== 0 || priceRangeText !== '' || searchText !== ''">
      <button type="button"
        class="flex items-center gap-0.5 px-2 py-1 bg-transparent border-(1px solid primary-200) rd-6 font-size-3 cursor-pointer"
        v-for="category in filterCategories" :key="category" @click="deleteCategory(category)">
        {{ category }}
        <div class="i-material-symbols:close"></div>
      </button>
      <button type="button"
        class="flex items-center gap-0.5 px-2 py-1 bg-transparent border-(1px solid primary-200) rd-6 font-size-3 cursor-pointer"
        v-if="priceRangeText !== ''" @click="resetPriceRange">
        {{ priceRangeText }}
        <div class="i-material-symbols:close"></div>
      </button>
      <template v-if="searchText !== ''">
        <button type="button"
          class="flex items-center gap-0.5 px-2 py-1 bg-transparent border-(1px solid primary-200) rd-6 font-size-3 cursor-pointer"
          @click="resetSearch">
          {{ searchText }}
          <div class="i-material-symbols:close"></div>
        </button>
      </template>
      <button type="button" @click="resetFilter"
        class="bg-transparent border-0 font-size-3 underline underline-offset-4 cursor-pointer hover:(decoration-2)">
        清除全部
      </button>
    </div>
    <!-- 料理列表 -->
    <div class="relative min-h-100 mb-12" ref="productsListRef">
      <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" v-if="filteredList.length > 0">
        <li v-for="product in filteredList.slice(12 * (pages.current - 1), 12 * pages.current)" :key="product.id"
          data-aos="fade-up" :data-aos-delay="500" data-aos-offset="0">
          <div class="card">
            <RouterLink :to="`/product/${product.id}`" class="block">
              <div class="card-image">
                <img :src="product.imageUrl" :alt="`${product.title}的圖片`"
                  class="block w-100% h-150px sm:h-350px md:h-300px" />
              </div>
              <h3 class="mb-4 tracking-wider">{{ product.title }}</h3>
              <div class="pb-4">
                <div v-if="product.price == product.origin_price">
                  <span>NT$ {{ product.price }}</span>
                </div>
                <div v-else>
                  <span class="text-red me-2">NT$ {{ product.price }}</span>
                  <del class="text-gray-400 font-size-3">NT$ {{ product.origin_price }}</del>
                </div>
              </div>
            </RouterLink>
          </div>
        </li>
      </ul>
      <!-- 如果沒有符合條件 -->
      <div v-else-if="filteredList.length === 0 &&
    (filterCategories.length !== 0 || priceRangeText !== '' || searchText !== '')
    ">
        <h3 class="pt-10 font-size-6 text-center">很抱歉，沒有符合條件的商品。<br />(〒︿〒)</h3>
      </div>
    </div>
    <!-- 分頁 -->
    <div class="mb-12" v-if="pages.total > 1">
      <nav role="navigation" aria-label="Pagination">
        <ul class="flex justify-center font-size-5 fw-bold">
          <li v-if="pages.current !== 1">
            <a href="#" class="block px-2 fw-400" @click.prevent="changePage('-')">
              <div class="i-ic:round-keyboard-arrow-left"></div>
            </a>
          </li>
          <li v-for="i in pages.total" :key="`${i}+123`" :class="{
    'underline underline-offset-6 decoration-2 pointer-events-none': i == pages.current
  }">
            <a href="#" class="block px-4" @click.prevent="changePage(i)">
              {{ i }}
            </a>
          </li>
          <li v-if="pages.current !== pages.total">
            <a href="#" class="block px-2 fw-400" @click.prevent="changePage('+')">
              <div class="i-ic:round-keyboard-arrow-right"></div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
summary::marker {
  content: '';
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}

details[open]>summary::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 2;
  background-color: transparent;
  display: block;
}

[type='checkbox']::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  outline: 1px solid rgba(61, 8, 27, 0.2);
}

[type='checkbox']:checked::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 10px;
  border-right: 2px solid #3d081b;
  border-bottom: 2px solid #3d081b;
  transform: rotate(45deg);
  top: 12px;
  left: 7px;
}

.price-group {
  display: flex;
  flex: 1;
  position: relative;

  input {
    @apply customBorder;
    border-width: 2px;
    background: transparent;
    border-radius: 12px;
    outline: 0;
    padding: 0.75rem;

    &::placeholder {
      color: transparent;
    }

    &:hover {
      outline: 1px solid #3d081b;
    }
  }

  label {
    transition: transform 0.1s ease-in-out;
    user-select: none;
    position: absolute;
    top: 50%;
    left: 0.75rem;
    transform: translateY(-50%);
  }

  input:not(:placeholder-shown),
  input:focus {
    padding-top: 18px;
    padding-bottom: 6px;
  }

  input:focus~label,
  input:not(:placeholder-shown)~label {
    color: rgba(61, 8, 27, 0.6);
    transform: scale(0.75) translateY(-25px) translateX(-4px);
  }
}
</style>
