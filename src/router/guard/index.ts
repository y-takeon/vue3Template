/*
 * @Author: ycb
 * @Date: 2024-06-18 14:34:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-18 14:36:01
 * @Description: 
 */

import type { Router } from 'vue-router'
import { createProgressGuard } from './progress'
import { createRouteGuard } from './route'

export function createRouterGuard(router: Router) {
  createProgressGuard(router);
  createRouteGuard(router);
}