/*
 * @Author: ycb
 * @Date: 2024-04-22 17:19:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-18 14:40:17
 * @Description: 
 */
import { createApp } from 'vue';
import './style.css';
import './style/tailwind.css';
import App from './App.vue';

import { setupNaive, setupNProgress } from '@/plugins';
import { setupStore } from '@/store';
import { setupRouter } from '@/router';
const app = createApp(App);

async function setupApp() {
  setupNProgress();
  setupStore(app);
  setupNaive(app);
  await setupRouter(app);
  app.mount('#app');
}
setupApp()

