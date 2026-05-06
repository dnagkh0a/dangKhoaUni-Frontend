<template>
    <!-- White Mode: Nền xám rất nhạt giúp các khối màu trắng nổi bật hơn -->
    <div class="min-h-screen bg-[#f8f9fc] font-sans text-gray-800 selection:bg-fuchsia-500 selection:text-white">

        <!-- Header -->
        <header
            class="bg-white py-4 shadow-sm flex flex-col items-center justify-center border-b border-purple-100 relative z-10">
            <div class="flex items-center gap-4">
                <!-- Logo bo tròn, gradient tím hồng -->
                <div
                    class="w-12 h-12 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-[0_4px_10px_rgba(217,70,239,0.3)]">
                    DKU
                </div>
                <!-- Chữ sử dụng gradient đậm hơn để dễ đọc trên nền sáng -->
                <h1
                    class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-fuchsia-600 uppercase tracking-widest">
                    Đăng Khoa Uni
                </h1>
            </div>
        </header>

        <!-- Main Content -->
        <main class="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-10">

            <!-- CỘT TRÁI: Form đăng nhập (Đã được chuyển lên trước) -->
            <div class="w-full md:w-1/3 relative order-1">
                <!-- Soft Colored Shadow đằng sau form -->
                <div
                    class="absolute -inset-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-[2rem] blur-xl opacity-20">
                </div>

                <div class="relative bg-white p-8 rounded-3xl shadow-xl border border-purple-50">
                    <div class="text-center mb-8">
                        <h2 class="text-purple-900 font-bold text-xl tracking-wide">CỔNG THÔNG TIN</h2>
                        <h3
                            class="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-fuchsia-600 font-black mt-1 text-lg">
                            ĐĂNG NHẬP HỆ THỐNG</h3>
                    </div>

                    <!-- Login Form -->
                    <form @submit.prevent="handleLogin" class="space-y-5">
                        <!-- Trường Email thay cho Mã sinh viên -->
                        <div>
                            <input v-model="loginForm.email" type="email" placeholder="Nhập địa chỉ email"
                                class="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 placeholder-gray-400 transition-all"
                                required />
                        </div>
                        <div>
                            <input v-model="loginForm.password" type="password" placeholder="Nhập mật khẩu"
                                class="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 placeholder-gray-400 transition-all"
                                required />
                        </div>

                        <div class="flex justify-end items-center gap-2">
                            <input type="checkbox" id="graduated" v-model="loginForm.is_graduated"
                                class="w-4 h-4 text-purple-600 bg-gray-50 border-gray-300 rounded focus:ring-purple-500 focus:ring-offset-0 cursor-pointer">
                            <label for="graduated"
                                class="text-sm text-gray-600 cursor-pointer hover:text-purple-700 transition-colors">Đã
                                tốt nghiệp</label>
                        </div>

                        <!-- Captcha Area -->
                        <div class="flex gap-3">
                            <input v-model="loginForm.captcha" type="text" placeholder="Nhập mã"
                                class="w-1/2 px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 placeholder-gray-400 transition-all" />
                            <div
                                class="w-1/2 flex items-center justify-between bg-purple-50 border border-purple-100 rounded-xl px-3">
                                <button type="button"
                                    class="text-purple-600 hover:text-fuchsia-600 font-bold text-xl transition-all">&#x21BB;</button>
                                <div
                                    class="text-purple-900 font-serif font-bold tracking-widest px-2 line-through decoration-fuchsia-500 select-none">
                                    9711
                                </div>
                            </div>
                        </div>

                        <!-- Error Message -->
                        <p v-if="authStore.errorMessage"
                            class="text-red-600 text-sm text-center bg-red-50 py-2 rounded-lg border border-red-100">{{
                            authStore.errorMessage }}</p>

                        <!-- Nút Submit -->
                        <button type="submit"
                            class="w-full bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 text-white font-bold py-3.5 rounded-xl shadow-[0_4px_12px_rgba(168,85,247,0.3)] hover:shadow-[0_6px_16px_rgba(217,70,239,0.4)] transform hover:-translate-y-0.5 transition-all duration-300 tracking-wide"
                            :disabled="authStore.isLoading">
                            <span v-if="authStore.isLoading" class="flex items-center justify-center gap-2">
                                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                                ĐANG XỬ LÝ...
                            </span>
                            <span v-else>ĐĂNG NHẬP</span>
                        </button>
                    </form>

                    <!-- Extra Links -->
                    <div class="mt-6 flex flex-col items-center gap-4 text-sm border-t border-gray-100 pt-6">
                        <button
                            class="w-full bg-purple-50 text-purple-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-purple-100 transition-all">Dành
                            cho phụ huynh</button>

                        <div class="w-full text-center mt-2">
                            <p class="text-gray-500 mb-3 text-xs uppercase tracking-widest font-semibold">Tải App Đăng
                                Khoa Uni</p>
                            <div
                                class="flex items-center justify-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100">
                                <div class="w-14 h-14 bg-white p-1 rounded-lg shadow-sm">
                                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=dangkhoauni"
                                        alt="QR" class="w-full h-full rounded">
                                </div>
                                <div class="flex flex-col gap-2">
                                    <div
                                        class="bg-white text-gray-700 text-xs px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm flex items-center gap-2 hover:border-purple-300 hover:text-purple-700 cursor-pointer transition-all">
                                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path
                                                d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-1.09.68-1.87 1.83-1.87 3.12 0 1.63 1.33 3.01 2.93 3.44-.39 1.15-.98 2.24-1.91 3.12zM15.14 5.37c.71-.85 1.18-2.04 1.05-3.23-1.02.04-2.28.68-3.02 1.55-.65.75-1.2 1.96-1.05 3.17 1.14.09 2.31-.64 3.02-1.49z" />
                                        </svg>
                                        App Store
                                    </div>
                                    <div
                                        class="bg-white text-gray-700 text-xs px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm flex items-center gap-2 hover:border-purple-300 hover:text-purple-700 cursor-pointer transition-all">
                                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path
                                                d="M3.609 1.814L13.792 12 3.61 22.186a1.984 1.984 0 0 1-.508-1.306V3.12c0-.505.183-.967.507-1.306zm.937.195l8.608 4.966L14.73 8.55 4.546 2.01zm9.638 5.56l5.727 3.305a1.233 1.233 0 0 1 0 2.146l-5.727 3.304-1.63-1.63 3.255-3.255-3.255-3.255 1.63-1.63zm-9.638 14.22l10.184-6.54-1.576-1.576-8.608 8.116z" />
                                        </svg>
                                        Google Play
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            class="w-full mt-2 text-gray-500 bg-transparent py-2 rounded-xl hover:text-purple-700 hover:underline transition-all text-sm font-medium">
                            Hướng dẫn sử dụng App
                        </button>
                    </div>
                </div>
            </div>

            <!-- CỘT PHẢI: Tin tức / Thông báo (Đã được chuyển xuống sau) -->
            <div class="w-full md:w-2/3 order-2">
                <!-- Tabs -->
                <div class="flex border-b border-gray-200 mb-8">
                    <!-- Tab Active -->
                    <button class="px-6 py-3 text-purple-700 font-bold border-b-2 border-purple-600 transition-all">GÓC
                        SINH VIÊN</button>
                    <button class="px-6 py-3 text-gray-500 font-semibold hover:text-purple-600 transition-all">BIỂU MẪU
                        - VĂN BẢN</button>
                    <button class="px-6 py-3 text-gray-500 font-semibold hover:text-purple-600 transition-all">THÔNG
                        BÁO</button>
                </div>

                <!-- News List -->
                <div class="space-y-6">
                    <!-- Item 1 -->
                    <div
                        class="flex gap-5 border-b border-gray-100 pb-5 group bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-purple-100">
                        <div class="flex flex-col items-center min-w-[80px]">
                            <div
                                class="bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white text-xs py-1.5 px-2 w-full text-center rounded-t-xl">
                                Tháng 03</div>
                            <div
                                class="bg-purple-50 w-full text-center border border-t-0 border-purple-100 rounded-b-xl py-2 text-3xl font-light text-purple-900 group-hover:bg-purple-100 transition-colors">
                                11</div>
                        </div>
                        <div>
                            <h3
                                class="text-lg font-bold text-gray-800 group-hover:text-purple-700 cursor-pointer transition-all">
                                Hướng dẫn sinh viên nộp học phí online <span
                                    class="text-fuchsia-600 text-xs italic font-medium">new</span></h3>
                            <a href="#"
                                class="text-fuchsia-600 text-sm mt-1 inline-block hover:underline transition-colors">Xem
                                chi tiết</a>
                        </div>
                    </div>

                    <!-- Item 2 -->
                    <div
                        class="flex gap-5 border-b border-gray-100 pb-5 group bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-purple-100">
                        <div class="flex flex-col items-center min-w-[80px]">
                            <div
                                class="bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white text-xs py-1.5 px-2 w-full text-center rounded-t-xl">
                                Tháng 03</div>
                            <div
                                class="bg-purple-50 w-full text-center border border-t-0 border-purple-100 rounded-b-xl py-2 text-3xl font-light text-purple-900 group-hover:bg-purple-100 transition-colors">
                                11</div>
                        </div>
                        <div>
                            <h3
                                class="text-lg font-bold text-gray-800 group-hover:text-purple-700 cursor-pointer transition-all">
                                Sinh viên trong tương lai <span
                                    class="text-fuchsia-600 text-xs italic font-medium">new</span></h3>
                            <p class="text-sm text-gray-600 mt-2 leading-relaxed">Kính gửi quý đồng nghiệp, các bậc phụ
                                huynh và các em sinh viên thân mến!</p>
                            <a href="#"
                                class="text-fuchsia-600 text-sm mt-1 inline-block hover:underline transition-colors">Xem
                                chi tiết</a>
                        </div>
                    </div>

                    <!-- Item 3 -->
                    <div
                        class="flex gap-5 border-b border-gray-100 pb-5 group bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-purple-100">
                        <div class="flex flex-col items-center min-w-[80px]">
                            <div
                                class="bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white text-xs py-1.5 px-2 w-full text-center rounded-t-xl">
                                Tháng 03</div>
                            <div
                                class="bg-purple-50 w-full text-center border border-t-0 border-purple-100 rounded-b-xl py-2 text-3xl font-light text-purple-900 group-hover:bg-purple-100 transition-colors">
                                11</div>
                        </div>
                        <div>
                            <h3
                                class="text-lg font-bold text-gray-800 group-hover:text-purple-700 cursor-pointer transition-all">
                                Các câu lạc bộ sinh viên <span
                                    class="text-fuchsia-600 text-xs italic font-medium">new</span></h3>
                            <p class="text-sm text-gray-600 mt-2 leading-relaxed">Phát triển mô hình các Câu lạc bộ
                                (CLB) trong trường học là một phần quan trọng trong công tác xây dựng và phát triển của
                                nhà trường.</p>
                            <a href="#"
                                class="text-fuchsia-600 text-sm mt-1 inline-block hover:underline transition-colors">Xem
                                chi tiết</a>
                        </div>
                    </div>
                </div>

                <div class="text-right mt-6">
                    <button
                        class="text-purple-700 font-bold hover:text-fuchsia-600 transition-all uppercase tracking-wider text-sm hover:underline">Xem
                        Thêm &rarr;</button>
                </div>
            </div>

        </main>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/authStore';

const router = useRouter();
const authStore = useAuthStore();

// Đổi biến student_id thành email
const loginForm = reactive({
    email: '',
    password: '',
    is_graduated: false,
    captcha: ''
});

// LoginView.vue (Bên trong thẻ <script setup>)
const handleLogin = async () => {
    const result = await authStore.loginUser({
        email: loginForm.email,
        password: loginForm.password
    });

    if (result.success) {
        // Đã đăng nhập thành công -> Chuyển hướng về Trang chủ
        router.push('/trang-chu');
    } else {
        // Có thể hiển thị thêm thông báo lỗi nếu cần
        console.error("Đăng nhập thất bại:", result.message);
    }
};
</script>