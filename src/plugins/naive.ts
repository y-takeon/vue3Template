/*
 * @Author: ycb
 * @Date: 2024-05-21 15:02:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-25 17:42:45
 * @Description: 
 */
import type { App } from 'vue';
import {
  create,
  NConfigProvider,
  NButton,
  NDatePicker,
  NCard
} from 'naive-ui'
const naive = create({
  components: [
    NConfigProvider,
    NButton,
    NDatePicker,
    NCard
  ]
})
export function setupNaive(app: App<Element>) {
  app.use(naive)
}