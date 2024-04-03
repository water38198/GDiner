import { defineStore } from "pinia";
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useCartStore = defineStore('cart', () => {
  const cart = ref({});
  const { VITE_URL, VITE_PATH } = import.meta.env;
  const isLoading = ref(false)

  function getCart() {
    isLoading.value = true;
    axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
      .then((res => {
        cart.value = res.data.data;
      }))
      .catch(err => {
        Swal.fire({
          title: '錯誤發生',
          icon: 'error',
          text: `${err.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,
          confirmButtonColor: '#3D081B',
        })
      })
      .finally(() => {
        isLoading.value = false
      })
  }
  function debounce(fn) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, 250);
    };
  }
  const updateCart = debounce((product, event) => {
    // 直接修改 input 數量時 輸入小於 1 的數量 或是 輸入非數字都會跳錯並修正為原本的數字
    console.log(product)
    if (event) {
      if (event.target.value <= 0 || typeof (+event.target.value) !== 'number') {
        Swal.fire({
          title: '數量錯誤請重新輸入',
          icon: 'error'
        })
        event.target.value = product.qty
        return
      } else {
        product.qty = +event.target.value
      }
    }
    const orderId = product.id;
    const {product_id} = product;
    const qty = product.qty;
    isLoading.value = true;
    axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${orderId}`, {
      data: {
        product_id,
        qty
      }
    })
      .then(() => {
        getCart();
      })
      .catch(() => {
        Swal.fire({
          title: '錯誤發生',
          icon: 'error',
          text: '請嘗試重新整理，如果此狀況持續發生，請聯絡我們',
          confirmButtonColor: '#3D081B',
        })
      })
  })
  function deleteCart(id) {
    axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${id}`)
      .then(() => {
        getCart();
        Swal.fire({
          title: '刪除成功',
          icon: 'success',
          toast: true,
          position: 'bottom-right',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(() => {
        Swal.fire({
          title: '錯誤發生',
          icon: 'error',
          text: '請嘗試重新整理，如果此狀況持續發生，請聯絡我們',
          confirmButtonColor: '#3D081B',
        })
      })
  }
  function deleteCartAll() {
    Swal.fire({
      title: '您確定要清空購物車嗎?',
      showCancelButton: true,
      confirmButtonText: '都給我消失吧~~!',
      confirmButtonColor: '#3D081B',
      cancelButtonText: '取消'
    }).then(result => {
      if (result.isConfirmed) {
        axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/carts`)
          .then(() => {
            getCart();
            Swal.fire({
              title: '刪除成功',
              icon: 'success',
              timer: 2000,
              confirmButtonColor: '#3D081B'
            })
          })
          .catch(() => {
            Swal.fire({
              title: '錯誤發生',
              icon: 'error',
              text: '請嘗試重新整理，如果此狀況持續發生，請聯絡我們',
              confirmButtonColor: '#3D081B',
            })
          })
      }
    })
  }
  function addCart(id, qty, goCart = false) {
    isLoading.value = true;
    axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, {
      data: {
        product_id: id,
        qty: qty
      }
    }).then(res => {
      if (!goCart) {
        Swal.fire({
          title: `${res.data.message}`,
          icon: 'success',
          timer: 1000,
          showConfirmButton: false
        })
      }
      getCart();
    }).catch(err => {
      Swal.fire({
        title: '錯誤發生',
        icon: 'error',
        text: `${err.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,
        confirmButtonColor: '#3D081B',
      })
    }).finally(() => {
      isLoading.value = false;
    })
  }

  onMounted(() => {
    getCart();
  })

  return { cart, isLoading, getCart, addCart, updateCart, deleteCart, deleteCartAll }
})