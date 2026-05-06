<template>
    <div class="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-[2.5rem] shadow-sm border border-red-100">
        <div class="flex justify-between items-center mb-6">
            <h3 class="font-bold text-red-800 flex items-center gap-2">
                <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                Lịch thi sắp tới
            </h3>
            <span class="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-md font-bold animate-pulse">Chú ý</span>
        </div>

        <div class="space-y-4">
            <div v-for="(exam, index) in exams" :key="index" class="bg-white p-4 rounded-2xl shadow-sm border border-red-50 flex items-center gap-4 relative overflow-hidden">
                <!-- Đường line đỏ bên trái thẻ -->
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-red-400"></div>
                
                <div class="bg-red-50 rounded-xl p-2 text-center min-w-[60px]">
                    <p class="text-xs font-bold text-red-400">{{ exam.month }}</p>
                    <p class="text-xl font-black text-red-600">{{ exam.day }}</p>
                </div>
                
                <div class="flex-1">
                    <h4 class="text-sm font-bold text-gray-800">{{ exam.subject }}</h4>
                    <div class="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-[10px] text-gray-500 font-medium">
                        <span class="flex items-center gap-1">🕒 {{ exam.time }}</span>
                        <span class="flex items-center gap-1">📍 Phòng: <strong class="text-gray-700">{{ exam.room }}</strong></span>
                        <span class="flex items-center gap-1">SBD: <strong class="text-gray-700">{{ exam.sbd }}</strong></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const exams = ref([
    { subject: 'Lập trình Web nâng cao', day: '18', month: 'Thg 5', time: '07:30 (90 phút)', room: 'Lab 402', sbd: '045' },
    { subject: 'Cơ sở dữ liệu', day: '22', month: 'Thg 5', time: '13:00 (60 phút)', room: 'A.305', sbd: '112' },
]);
</script>