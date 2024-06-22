/*
 * @Author: ycb
 * @Date: 2024-04-22 17:19:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-05-31 17:10:45
 * @Description: 
 */
/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}