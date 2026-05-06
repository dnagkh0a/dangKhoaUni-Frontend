// src/store/authStore.js
import { defineStore } from 'pinia';
import { loginAPI } from '../api/authApi';
import Cookies from 'js-cookie';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: Cookies.get('token') || null, 
    isLoading: false,
    errorMessage: ''
  }),

  getters: {
    isAuthenticated: (state) => !!state.token
  },

  actions: {
    async loginUser(credentials) {
      this.isLoading = true;
      this.errorMessage = '';

      try {
        const data = await loginAPI(credentials);
        
        // SỬA CHÍNH TẠI ĐÂY: API trả về 'access_token' chứ không phải 'token'
        const myToken = data.access_token; 

        if (myToken) {
          // Lưu vào state của Pinia
          this.token = myToken;
          this.user = data.user;
          
          // Lưu vào Cookie để giữ đăng nhập
          Cookies.set('token', myToken, { expires: 7, path: '/' });
          
          return { success: true };
        } else {
           throw new Error("Không tìm thấy token từ API trả về");
        }
      } catch (error) {
        this.errorMessage = error.message;
        return { success: false, message: error.message };
      } finally {
        this.isLoading = false;
      }
    },

    logout() {
      this.user = null;
      this.token = null;
      Cookies.remove('token', { path: '/' });
    }
  }
});