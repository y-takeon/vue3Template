/*
 * @Author: ycb
 * @Date: 2024-05-21 15:02:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-05-21 15:10:59
 * @Description: 
 */
import type { App } from 'vue';
import {
  create,
  NButton,
  NDatePicker
} from 'naive-ui'
const naive = create({
  components: [
    NButton,
    NDatePicker
  ]
})
export function setupNaive(app: App<Element>) {
  app.use(naive)
}