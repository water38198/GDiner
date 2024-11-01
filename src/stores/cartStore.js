import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

const { VITE_URL, VITE_PATH } = import.meta.env;

export const useCartStore = defineStore('cart', () => {
  const cart = ref({});
  const cartLoading = ref(false);
  const getCart = async () => {
    cartLoading.value = true;
    try {
      const res = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`);
      cart.value = res.data.data;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '哇...',
        text: '網站出錯了！麻煩稍後一下再重新整理',
        confirmButtonColor: '#3D081B',
      });
    } finally {
      cartLoading.value = false;
    }
  };

  const addToCart = async (productId, qty = 1) => {
    cartLoading.value = true;
    try {
      await axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, {
        data: {
          product_id: productId,
          qty,
        },
      })
      Swal.fire({
        icon: 'success',
        title: '成功加入購物車',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        toast: true,
        position: 'top',
      });
    } catch (error) { 
      Swal.fire({
        icon: 'error',
        title: '哇...',
        text: '網站出錯了！麻煩稍後一下再重新整理',
        confirmButtonColor: '#3D081B',
      });
    } finally {
      cartLoading.value = false;
      getCart();
    };
  }

  const clearCart = () => {
    Swal.fire({
      title: '確定要清空購物車嗎？',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3D081B',
      cancelButtonColor: 'gray',
      confirmButtonText: '確定',
      cancelButtonText: '取消',
    }).then(async(result) => {
      if (result.isConfirmed) {
        cartLoading.value = true;
        try {
          const response = await axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/carts`);
          console.log(response);
          Swal.fire({
            icon: 'success',
            title: `${response.data.message}`,
            confirmButtonColor: '#3D081B',
          });
        } catch (err) {
          Swal.fire({
            icon: 'error',
            title: '哇...',
            text: '網站出錯了！麻煩稍後一下再重新整理',
            confirmButtonColor: '#3D081B',
          });
        } finally {
          cartLoading.value = false;
          getCart();
        }
      }
    });
  }

  const deleteCartItem = (product) => { 
    Swal.fire({
      title: `確定要刪除${product.product.title}嗎？`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3D081B',
      cancelButtonColor: 'gray',
      confirmButtonText: '確定',
      cancelButtonText: '取消',
    }).then(async (result) => {
      if (result.isConfirmed) {
        cartLoading.value = true;
        try {
          const response = await axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${product.id}`);
          console.log(response);
          Swal.fire({
            icon: 'success',
            title: `${response.data.message}`,
            confirmButtonColor: '#3D081B',
          });
        } catch (err) {
          Swal.fire({
            icon: 'error',
            title: '哇...',
            text: '網站出錯了！麻煩稍後一下再重新整理',
            confirmButtonColor: '#3D081B',
          });
        } finally {
          cartLoading.value = false;
          getCart();
        }
      }
    })
  }

  const updateCartItem = async (cartItem, qty) => {
    if (qty <= 0 || typeof +qty !== 'number') return;
    
    try {
      cartLoading.value = true;
      const response = await axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${cartItem.id}`, {
        data: {
          "product_id": cartItem.product.id,
          qty,
        },
      });
      Swal.fire({
        icon: 'success',
        title: `${response.data.message}`,
        toast: true,
        timer: 1500,
        timerProgressBar: true,
        position: 'bottom-end',
        showConfirmButton: false,
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: '哇...',
        text: '網站出錯了！麻煩稍後一下再重新整理',
        confirmButtonColor: '#3D081B',
      });
    } finally {
      getCart();
      cartLoading.value = false;
    }
  }

  const submitCoupon = async (couponCode) => {
    try {
      const response = await axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/coupon`, {
        data: {
          code: couponCode,
        },
      });
      console.log(response);
      Swal.fire({
        icon: 'success',
        title: `${response.data.message}`,
        confirmButtonColor: '#3D081B',
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: '哇...',
        text: `${err.response.data.message}`,
        confirmButtonColor: '#3D081B',
      });
    } finally {
      getCart();
    }
  }

  return {
    cart,
    cartLoading,
    getCart,
    addToCart,
    clearCart,
    deleteCartItem,
    updateCartItem,
    submitCoupon,
  }
});