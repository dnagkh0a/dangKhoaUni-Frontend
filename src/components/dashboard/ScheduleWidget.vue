<template>
    <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-purple-50">
        <div class="flex justify-between items-center mb-8">
            <h3 class="font-bold text-lg flex items-center gap-3 text-gray-800">
                <span class="w-2 h-8 bg-purple-600 rounded-full"></span>
                Lịch học hôm nay
            </h3>
            <button class="text-purple-600 text-sm font-bold hover:underline">Xem lịch tuần &rarr;</button>
        </div>
        <div class="space-y-4">
            <div v-for="(course, c) in todaySchedule" :key="c" 
                 class="flex items-center gap-6 p-4 rounded-3xl border border-gray-50 hover:bg-purple-50 hover:border-purple-100 transition-all group">
                <div class="text-center min-w-[70px]">
                    <p class="text-xs font-bold text-gray-400 uppercase">{{ course.time }}</p>
                    <div class="h-10 w-[1px] bg-gray-100 mx-auto my-1"></div>
                    <p class="text-[10px] font-black text-purple-600">Tiết {{ course.period }}</p>
                </div>
                <div class="flex-1">
                    <h4 class="font-bold text-gray-800 group-hover:text-purple-700 transition-colors">{{ course.name }}</h4>
                    <p class="text-xs text-gray-500 mt-1 flex items-center gap-2">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        Phòng: {{ course.room }} | GV: {{ course.teacher }}
                    </p>
                </div>
                <div class="hidden sm:block">
                    <span :class="course.statusColor" class="px-3 py-1 rounded-full text-[10px] font-bold text-white">{{ course.status }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const todaySchedule = ref([
    { name: 'Lập trình Web nâng cao (Vue.js)', time: '07:00 - 09:30', period: '1-3', room: 'Lab 402', teacher: 'ThS. Nguyễn Văn A', status: 'Đang diễn ra', statusColor: 'bg-green-500' },
    { name: 'Cấu trúc dữ liệu & Giải thuật', time: '09:45 - 12:15', period: '4-6', room: 'A.201', teacher: 'ThS. Trần Thị B', status: 'Sắp diễn ra', statusColor: 'bg-blue-400' },
    { name: 'Anh văn chuyên ngành 2', time: '13:00 - 15:30', period: '7-9', room: 'C.105', teacher: 'Ms. Emily White', status: 'Sắp diễn ra', statusColor: 'bg-gray-300' },
]);
</script>