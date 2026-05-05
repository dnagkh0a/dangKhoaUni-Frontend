import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    // Trỏ đường dẫn xuất file vào thư mục public của Laravel
    // outDir: path.resolve(__dirname, '../dangKhoaUni_backend/public'),
    
    // QUAN TRỌNG: Phải để false! 
    // Nếu để true, Vite sẽ xóa sạch thư mục public của Laravel (bao gồm cả index.php và .htaccess của backend)
    emptyOutDir: false, 
    
    assetsDir: 'assets',
  },
  base: '/', // Dùng '/' vì bạn đang chạy trên Vhost gốc
})