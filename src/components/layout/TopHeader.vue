<template>
    <header class="bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-40 border-b border-purple-50">
        <div class="flex items-center gap-4">
            <button class="lg:hidden p-2 text-gray-500"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg></button>
            <h2 class="font-bold text-gray-400 text-sm hidden md:block">BẢNG ĐIỀU KHIỂN / <span class="text-purple-700">TRANG CHỦ</span></h2>
        </div>

        <div class="flex items-center gap-4 md:gap-8">
            <div class="hidden md:flex relative w-64">
                <input type="text" placeholder="Tìm nhanh..." class="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-full text-sm focus:ring-2 focus:ring-purple-200 focus:outline-none">
                <svg class="w-4 h-4 absolute left-4 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <div class="flex items-center gap-4">
                <button @click="handleLogout" class="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all" title="Đăng xuất">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                </button>
                <div class="h-8 w-[1px] bg-gray-100 mx-2"></div>
                <div class="flex items-center gap-3">
                    <div class="text-right hidden sm:block">
                        <p class="text-sm font-bold text-gray-700">Cao Đăng Khoa</p>
                        <p class="text-[10px] text-fuchsia-600 font-bold uppercase">Sinh viên năm 2</p>
                    </div>
                    <img src="https://ui-avatars.com/api/?name=Cao+Dang+Khoa&background=d946ef&color=fff" class="w-10 h-10 rounded-2xl shadow-md border-2 border-white">
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../store/authStore';

const router = useRouter();
const authStore = useAuthStore();

const handleLogout = () => {
    authStore.logout();
    router.push('/dang-nhap');
};
</script>