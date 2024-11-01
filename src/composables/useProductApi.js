import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_URL, VITE_PATH } = import.meta.env;

export function useProductApi() {
  const isLoading = ref(false);
  const products = ref([]);
  const product = ref({});
  const pagination = ref({});
  const randomProducts = ref([]);

  const getAllProducts = async () => {
    isLoading.value = true;
    try {
      const response = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`);
      products.value = response.data.products;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '哇...',
        text: '網站出錯了！麻煩稍後一下再重新整理',
        confirmButtonColor: '#3D081B',
      });
    } finally {
      isLoading.value = false;
    };
  }
  const getProduct = async (id) => {
    isLoading.value = true;
    try {
      const response = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`);
      product.value = response.data.product;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '哇...',
        text: '網站出錯了！麻煩稍後一下再重新整理',
        confirmButtonColor: '#3D081B',
      });
    } finally {
      isLoading.value = false;
    };
  }
  const getProducts = async (category = '', page = 1) => {
    const currentCategory = category === '全部' ? '' : category;
    try {
      isLoading.value = true;
      const response = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products?category=${currentCategory}&page=${page}`);
      products.value = response.data.products;
      pagination.value = response.data.pagination;
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: '哇...',
        text: '網站出錯了！麻煩稍後一下再重新整理',
        confirmButtonColor: '#3D081B',
      });
    } finally {
      isLoading.value = false
    }
  };

  const getRandomProducts = async (id) => {
    isLoading.value = true;
    try {
      const response = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`);
      const allProducts = response.data.products.filter((product) => product.id !== id);
      randomProducts.value = getRandomElements(allProducts, 4);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '哇...',
        text: '網站出錯了！麻煩稍後一下再重新整理',
        confirmButtonColor: '#3D081B',
      });
    } finally {
      isLoading.value = false;
    }
  };

  // Fisher-Yates 洗牌演算法
  const getRandomElements = (array, count) => {
    const shuffled = array.slice();
    for(let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  };

  return {
    products,
    product,
    isLoading,
    randomProducts,
    pagination,
    getAllProducts,
    getProducts,
    getProduct,
    getRandomProducts,
  }
}