/*
 * @Author: ycb
 * @Date: 2024-06-18 14:13:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-18 15:27:05
 * @Description: 
 */

import type { Router } from 'vue-router'
export function createProgressGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    window.NProgress?.start?.();
    next();
  })
  router.afterEach((to, from) => {
    window.NProgress?.done?.();
  })
}