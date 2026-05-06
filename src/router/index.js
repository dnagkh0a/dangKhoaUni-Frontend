import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue'; // Chắc chắn đã import
import { useAuthStore } from '../store/authStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dang-nhap',
      name: 'login',
      component: LoginView,
      meta: { requiresGuest: true } // Chỉ khách mới vào được
    },
    {
      path: '/trang-chu',  // Đổi thành đúng đường dẫn bạn muốn
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true } // BẮT BUỘC ĐĂNG NHẬP
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/trang-chu' // Link bậy bạ tự đá về trang chủ
    }
  ]
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isLogged = authStore.isAuthenticated; 

  if (to.meta.requiresAuth && !isLogged) {
    // Chưa đăng nhập mà đòi vào trang chủ -> Đẩy ra đăng nhập
    next({ path: '/dang-nhap' });
  } else if (to.meta.requiresGuest && isLogged) {
    // Đã đăng nhập rồi mà cứ đòi vào trang đăng nhập -> Đẩy vào trang chủ
    next({ path: '/trang-chu' });
  } else {
    next(); // Hợp lệ, cho qua
  }
});

export default router;