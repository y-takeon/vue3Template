/*
 * @Author: ycb
 * @Date: 2024-06-18 13:54:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-18 13:54:44
 * @Description: 路由守卫
 */

import type { Router } from 'vue-router'
export function createRouteGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    // 路由守卫逻辑
    // TODO
    next()
  })
}