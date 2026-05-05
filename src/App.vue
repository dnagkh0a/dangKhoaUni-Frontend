<template>
  bản 1
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4 text-blue-600">Danh sách Sinh viên</h1>
    
    <ul class="list-disc pl-5">
      <li v-for="student in students" :key="student.id" class="text-gray-700">
        {{ student.id }} - {{ student.name }}
      </li>
    </ul>

    <button 
      @click="fetchStudents" 
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Tải Dữ Liệu
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

// Khởi tạo biến chứa danh sách sinh viên
const students = ref([]);

const fetchStudents = async () => {
  try {
    // Thay đổi URL này thành URL VirtualHost của bạn (dangkhoauni.test)
    // Lưu ý: Route của bạn nằm trong api.php nên phải có tiền tố /api/
    const response = await axios.get('[http://dangkhoauni.test/api/students')
    
    // Gán dữ liệu trả về từ API vào biến students
    students.value = response.data;
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu:", error);
    alert("Không thể kết nối đến Backend!");
  }
};
</script>