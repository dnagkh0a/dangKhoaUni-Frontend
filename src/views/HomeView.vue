<template>
    <div class="min-h-screen bg-[#f8f9fc] font-sans text-gray-800 flex">
        
        <!-- Sidebar Menu -->
        <Sidebar />

        <div class="flex-1 flex flex-col min-w-0">
            <!-- Header trên cùng -->
            <TopHeader />

            <!-- Nội dung chính -->
            <main class="p-6 md:p-10 max-w-[1600px] mx-auto w-full space-y-8">
                
                <!-- Lời chào -->
                <section>
                    <h1 class="text-2xl md:text-3xl font-black text-gray-800">Chào buổi sáng, <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-fuchsia-500">Đăng Khoa!</span> 👋</h1>
                    <p class="text-gray-500 mt-1">Hôm nay bạn có 3 tiết học và 1 lịch kiểm tra cần lưu ý.</p>
                </section>

                <!-- 4 Thẻ thống kê -->
                <StatsOverview />

                <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    
                    <!-- CỘT TRÁI (Chiếm 2/3 không gian) -->
                    <div class="xl:col-span-2 space-y-8">
                        <!-- Lịch học hôm nay -->
                        <ScheduleWidget />
                        
                        <!-- Học phí & Điểm rèn luyện chia nửa -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TuitionWidget />
                            <TrainingPointWidget />
                        </div>

                        <!-- Biểu đồ học tập -->
                        <StudyChartWidget />

                        <!-- Deadline bài tập sắp tới -->
                        <UpcomingDeadlines />
                    </div>

                    <!-- CỘT PHẢI (Chiếm 1/3 không gian) -->
                    <div class="space-y-8">
                        <!-- Cố vấn học tập (Nổi bật trên cùng) -->
                        <AdvisorContact />
                        
                        <!-- Lối tắt truy cập nhanh -->
                        <QuickActions />
                        
                        <!-- Lịch thi (Cần chú ý) -->
                        <ExamSchedule />
                        
                        <!-- Điểm số mới cập nhật -->
                        <LatestGrades />
                        
                        <!-- Bảng tin tức -->
                        <NewsWidget />
                    </div>
                    
                </div>

            </main>
        </div>
    </div>
</template>

<script setup>
// Import Layout Components
import Sidebar from '../components/layout/Sidebar.vue';
import TopHeader from '../components/layout/TopHeader.vue';

// Import Dashboard Widgets (Cột trái)
import StatsOverview from '../components/dashboard/StatsOverview.vue';
import ScheduleWidget from '../components/dashboard/ScheduleWidget.vue';
import TuitionWidget from '../components/dashboard/TuitionWidget.vue';
import TrainingPointWidget from '../components/dashboard/TrainingPointWidget.vue';
import StudyChartWidget from '../components/dashboard/StudyChartWidget.vue';
import UpcomingDeadlines from '../components/dashboard/UpcomingDeadlines.vue';

// Import Dashboard Widgets (Cột phải)
import AdvisorContact from '../components/dashboard/AdvisorContact.vue';
import QuickActions from '../components/dashboard/QuickActions.vue';
import ExamSchedule from '../components/dashboard/ExamSchedule.vue';
import LatestGrades from '../components/dashboard/LatestGrades.vue';
import NewsWidget from '../components/dashboard/NewsWidget.vue';
</script>