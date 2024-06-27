/*
 * @Author: ycb
 * @Date: 2024-06-26 11:17:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-26 11:50:25
 * @Description: 
 */
import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import { setupUnocss } from './unocss';
import { setupMock } from './mock'

export function setupVitePlugins() {
  const plugins: PluginOption = [
    vue(),
    setupUnocss(),
    setupMock()
  ];
  return plugins;
}