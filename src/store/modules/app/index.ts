/*
 * @Author: ycb
 * @Date: 2024-05-24 11:15:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-05-27 00:05:07
 * @Description: 
 */
import { defineStore } from 'pinia'
import { SetupStoreId } from '@/enum';

export const useAppStore = defineStore(SetupStoreId.App, {
  state: () => ({
    count: 1
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  },
  debounce: {
    increment: 1000
  }
})