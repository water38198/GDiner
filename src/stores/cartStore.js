import { defineStore } from "pinia";
import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_URL, VITE_PATH } = import.meta.env;

export const useCartStore = defineStore('cart', {
  state:()=> {
    return {
      cart: {},
      cartLoading: false,
    }
  },
  actions: {
    async getCart() {
      this.cartLoading = true;
      try {
        const res = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`);
        this.cart = res.data.data;
      } catch (err) {
        Swal.fire({
          title: '錯誤發生',
          icon: 'error',
          text: `${err.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,
          confirmButtonColor: '#3D081B',
        })
      } finally {
        this.cartLoading = false;
      }
    },
    async addCart(id, qty, goCart = false) {
      this.cartLoading = true;
      try {
        const res = await axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, {
          data: {
            product_id: id,
            qty,
          }
        })
        if (!goCart) {
          Swal.fire({
            title: `${res.data.message}`,
            icon: 'success',
            timer: 1000,
            showConfirmButton: false,
          });
        };
        this.getCart();
      } catch (err) {
        Swal.fire({
          title: '錯誤發生',
          icon: 'error',
          text: `${err.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,
          confirmButtonColor: '#3D081B',
        })
      } finally {
        this.cartLoading = false;
      }
    },
    deleteCart(id) {
      Swal.fire({
        title: '您確定要刪除嗎?',
        showCancelButton: true,
        confirmButtonText: '確定',
        confirmButtonColor: '#3D081B',
        cancelButtonText: '取消'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${id}`);
            this.getCart();
            Swal.fire({
              title: `${res.data.message}`,
              icon: 'success',
              toast: true,
              position: 'bottom-right',
              showConfirmButton: false,
              timer: 1500
            });
          } catch (err) {
            Swal.fire({
              title: '錯誤發生',
              icon: 'error',
              text: '請嘗試重新整理，如果此狀況持續發生，請聯絡我們',
              confirmButtonColor: '#3D081B',
            })
          }
        }
      })
    },
    deleteCartAll() {
      Swal.fire({
        title: '您確定要清空購物車嗎?',
        showCancelButton: true,
        confirmButtonText: '都給我消失吧~~!',
        confirmButtonColor: '#3D081B',
        cancelButtonText: '取消',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/carts`);
            Swal.fire({
              title: `${res.data.message}`,
              icon: 'success',
              timer: 2000,
              confirmButtonColor: '#3D081B'
            });
            this.getCart();
          } catch (err) {
            Swal.fire({
              title: '錯誤發生',
              icon: 'error',
              text: '請嘗試重新整理，如果此狀況持續發生，請聯絡我們',
              confirmButtonColor: '#3D081B',
            })
          }
        }
      })
    },
    debounce(fn) {
      let timer;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn(...args);
        }, 250);
      };
    },
    async updateCart(product, event) {
      if (event) {
        if (event.target.value <= 0 || isNaN(event.target.value)) {
          Swal.fire({
            title: '數量錯誤請重新輸入',
            icon: 'error',
          });
          event.target.value = product.qty;
          return;
        } else {
          product.qty = +event.target.value;
        }
      }
      const orderId = product.id;
      const { product_id } = product;
      const qty = product.qty;
      this.cartLoading = true;
      try {
        const res = await axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${orderId}`, {
          data: {
            product_id,
            qty,
          }
        })
        Swal.fire({
          icon: 'success',
          toast: true,
          text: `${res.data.message}`,
          showConfirmButton: false,
          position: 'bottom-end',
          timer: 1000
        });
        this.getCart();
      } catch (err) {
        Swal.fire({
          title: '錯誤發生',
          icon: 'error',
          text: '請嘗試重新整理，如果此狀況持續發生，請聯絡我們',
          confirmButtonColor: '#3D081B',
        })
      } finally {
        this.cartLoading = false;
      }
    }
  },
  getters: {
    debouncedUpdateCart() {
      return this.debounce(this.updateCart);
    }
  }
})