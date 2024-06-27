/*
 * @Author: ycb
 * @Date: 2024-06-26 11:41:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-26 11:44:10
 * @Description: 
 */
import { viteMockServe } from 'vite-plugin-mock';

export function setupMock() {
  return viteMockServe({
    mockPath: 'mock'
  })
}