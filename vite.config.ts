/*
 * @Author: ycb
 * @Date: 2024-04-22 17:19:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-18 13:43:07
 * @Description: 
 */
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.vue', '.ts']
  },
  plugins: [vue()],
  server: {
    port: 3000,
    hmr: true
  },
  build: {
    chunkSizeWarningLimit: 2000,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
