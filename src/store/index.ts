/*
 * @Author: ycb
 * @Date: 2024-05-23 23:20:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-05-27 00:02:59
 * @Description: 
 */
import { App } from 'vue'
import { createPinia } from 'pinia'
import { resetSetupStore, setDebouncedActions } from './plugins'
const store = createPinia()
export function setupStore(app: App<Element>) {
  store.use(resetSetupStore)
  store.use(setDebouncedActions)
  app.use(store)
}

export { store }