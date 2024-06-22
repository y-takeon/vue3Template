/*
 * @Author: ycb
 * @Date: 2024-05-21 23:01:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-18 14:39:05
 * @Description: 
 */
import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { createRouterGuard } from './guard'
const modules: Record<string, any> = import.meta.glob('./modules/**/*.ts', {
  eager: true
});

const routeModules: RouteRecordRaw[] = []

Object.keys(modules).forEach(key => {
  const mod = modules[key].default  || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModules.push(...modList)
})

// 创建实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: routeModules,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export async function setupRouter(app: App) {
  app.use(router);
  // 创建路由守卫
  createRouterGuard(router);
  await router.isReady()
}

export default router;