<script>
import CategoryFilter from '@/components/front/products/CategoryFilter.vue';
import PriceFilter from '@/components/front/products/PriceFilter.vue';
import SortFilter from '@/components/front/products/SortFilter.vue';
import ProductsList from '@/components/front/products/ProductsList.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  components:{CategoryFilter, PriceFilter, SortFilter, ProductsList, PaginationComponent, },
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
        current_page: 1,
        total_pages:0
      }
    }
  },
  computed: {
    filteredList() {
      let newList = [];
      // 分類：主食、甜點、湯品
      if (this.filterCategories.length > 0) {
        newList = this.products.filter((product) => this.filterCategories.includes(product.category));
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
      return newList;
    },
    isEmptySelected() {
      return this.filterCategories.length !== 0 || this.priceRangeText !== '' || this.searchText !== ''
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
    resetSearch() {
      this.searchText = '';
    },
    resetFilter() {
      this.filterCategories = [];
      this.lowPrice = null;
      this.highPrice = null;
      this.resetSearch();
    },
    changePage(action) {
      if (typeof action === 'number') {
        this.pages.current_page = action
      } else if (action === '+') {
        this.pages.current_page++
      } else {
        this.pages.current_page--
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
    '$route.query.search'() {
      if (this.$route.query.search) {
        this.searchText = this.$route.query.search;
      }
    },
    filteredList() {
      this.pages.total_pages = Math.ceil(this.filteredList.length / 12);
      this.pages.current_page = 1;
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
    this.filterCategories.push(this.$route.query.category);
    };
  if (this.$route.query.sort) {
    this.sortBy = this.$route.query.sort;
    };
  if (this.$route.query.search) {
    this.searchText = this.$route.query.search;
    };
  this.getProducts();
  },
}
</script>

<template>
  <VLoading :active="isLoading" />
  <div class="container min-vh-100">
    <h2 class="py-6 fs-1">料理</h2>
    <!-- 篩選 -->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <form class="d-flex items-center gap-2">
        <CategoryFilter v-model="filterCategories" />
        <!-- 價格範圍 -->
        <PriceFilter v-model:high="highPrice" v-model:low="lowPrice" />
        <!-- 排序 -->
        <SortFilter v-model="sortBy" />
      </form>
      <span class="ms-auto">{{ filteredList.length }} 項料理</span>
    </div>
    <!-- 已選擇的篩選 -->
    <div class="d-flex gap-2 mb-6" v-if="isEmptySelected">
      <button type="button" class="d-flex align-items-center btn btn-outline-primary border-2 rounded-pill fs-7"
        v-for="category in filterCategories" :key="category" @click="deleteCategory(category)">
        {{ category }}
        <div class="i-material-symbols:close"></div>
      </button>
      <button type="button" class="d-flex align-items-center btn btn-outline-primary border-2 rounded-pill fs-7"
        v-if="priceRangeText !== ''" @click="resetPriceRange">
        {{ priceRangeText }}
        <div class="i-material-symbols:close"></div>
      </button>
      <template v-if="searchText !== ''">
        <button type="button"
          class="d-flex align-items-center btn btn-outline-primary border-2 rounded-pill fs-7"
          @click="resetSearch">
          搜尋：{{ searchText }}
          <div class="i-material-symbols:close"></div>
        </button>
      </template>
      <button type="button" @click="resetFilter"
        class="bg-transparent  text-decoration-underline text-offset-4 )">
        清除全部
      </button>
    </div>
    <!-- 料理列表 -->
    <ProductsList :pages :filtered-list="filteredList" :is-loading="isLoading"/>
    <!-- 分頁 -->
    <PaginationComponent :pages @change-page="changePage"/>
  </div>
</template>
