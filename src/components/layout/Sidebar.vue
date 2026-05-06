<template>
    <aside class="hidden lg:flex w-72 bg-white border-r border-purple-50 flex-col sticky top-0 h-screen z-50">
        <!-- Logo Section -->
        <div class="p-8 flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">DKU</div>
            <h1 class="text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-fuchsia-600 tracking-tighter">ĐĂNG KHOA UNI</h1>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 px-4 space-y-1.5 overflow-y-auto scrollbar-hide pb-4">
            <div v-for="(item, i) in menuItems" :key="i" class="flex flex-col">
                
                <!-- Main Menu Item - Thêm $event vào hàm click -->
                <a href="#" 
                   @click.prevent="handleMenuClick(item, $event)"
                   :class="[
                       item.active ? 'bg-purple-50 text-purple-700' : 'text-gray-500 hover:bg-gray-50 hover:text-purple-600',
                       item.isOpen ? 'bg-gray-50 text-purple-600' : ''
                   ]"
                   class="flex items-center justify-between px-4 py-3 rounded-2xl font-semibold transition-all group cursor-pointer w-full">
                    <div class="flex items-center gap-4">
                        <span class="group-hover:scale-110 transition-transform" :class="item.active || item.isOpen ? 'text-purple-600' : ''" v-html="item.icon"></span>
                        {{ item.name }}
                    </div>
                    
                    <svg v-if="item.children" 
                         :class="item.isOpen ? 'rotate-180 text-purple-600' : 'text-gray-400'"
                         class="w-4 h-4 transition-transform duration-300 ease-in-out" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>

                <!-- Dropdown Children Menu - Đã xóa các class before: tạo chấm tròn và sửa thành pl-12 -->
                <div v-if="item.children" 
                     v-show="item.isOpen" 
                     class="mt-1 space-y-1 overflow-hidden transition-all duration-300 origin-top">
                    <a v-for="(child, j) in item.children" :key="j" href="#"
                       class="block px-4 py-2.5 pl-12 text-sm font-medium text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors">
                        {{ child.name }}
                    </a>
                </div>
            </div>
        </nav>

        <!-- Support Section -->
        <div class="p-6 mt-auto">
            <div class="bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-3xl p-5 text-white relative overflow-hidden shadow-xl">
                <div class="relative z-10">
                    <p class="text-xs opacity-80 mb-1">Cần hỗ trợ?</p>
                    <p class="font-bold text-sm mb-3">Liên hệ Phòng Đào tạo</p>
                    <button class="bg-white text-purple-700 text-xs font-bold py-2 px-4 rounded-xl hover:bg-opacity-90 transition-all active:scale-95">Hotline: 1900 1234</button>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { ref, nextTick } from 'vue'; // Import thêm nextTick

// Thêm biến event vào để lấy DOM element
const handleMenuClick = async (clickedItem, event) => {
    if (clickedItem.children) {
        // Đóng các menu khác
        menuItems.value.forEach(item => {
            if (item !== clickedItem && item.children) {
                item.isOpen = false;
            }
        });
        
        // Bật/tắt menu hiện tại
        clickedItem.isOpen = !clickedItem.isOpen; 

        // Nếu menu đang mở, tiến hành cuộn chuột
        if (clickedItem.isOpen) {
            // Chờ Vue render xong các submenu (DOM cập nhật chiều cao)
            await nextTick();
            
            // Lấy phần tử bọc ngoài cùng (thẻ div flex-col) để cuộn cho chuẩn
            const parentContainer = event.currentTarget.parentElement;
            if (parentContainer) {
                parentContainer.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' // Cuộn ở mức vừa đủ để thấy hết nội dung
                });
            }
        }
    } else {
        menuItems.value.forEach(item => item.active = false);
        clickedItem.active = true;
    }
};

const menuItems = ref([
    { 
        name: 'Bảng điều khiển', 
        icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>', 
        active: true 
    },
    { 
        name: 'Hồ sơ sinh viên', 
        icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>', 
        active: false,
        isOpen: false,
        children: [
            { name: 'Lý lịch sinh viên' },
            { name: 'Cập nhật thông tin' },
            { name: 'Sổ tay sinh viên' }
        ]
    },
    { 
        name: 'Lịch học & Lịch thi', 
        icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>', 
        active: false,
        isOpen: false,
        children: [
            { name: 'Lịch học trong tuần' },
            { name: 'Lịch thi học kỳ' }
        ]
    },
    { 
        name: 'Kết quả học tập', 
        icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>', 
        active: false,
        isOpen: false,
        children: [
            { name: 'Bảng điểm học kỳ' },
            { name: 'Bảng điểm toàn khóa' }
        ]
    },
    { 
        name: 'Học phí & Lệ phí', 
        icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>', 
        active: false,
        isOpen: false,
        children: [
            { name: 'Tra cứu công nợ' },
            { name: 'Thanh toán trực tuyến' },
            { name: 'Biên lai điện tử' }
        ]
    },
    { 
        name: 'Tin tức & Thông báo', 
        icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>', 
        active: false 
    },
    { 
        name: 'Dịch vụ trực tuyến', 
        icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>', 
        active: false,
        isOpen: false,
        children: [
            { name: 'Xin giấy xác nhận SV' },
            { name: 'Đăng ký ký túc xá' },
            { name: 'Miễn giảm học phí' }
        ]
    },
    { 
        name: 'Cài đặt hệ thống', 
        icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>', 
        active: false 
    },
]);
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>