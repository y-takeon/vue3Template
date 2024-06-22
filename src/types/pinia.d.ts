/*
 * @Author: ycb
 * @Date: 2024-05-26 22:11:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-05-26 22:27:15
 * @Description: 
 */
import 'pinia'
declare module 'pinia' {
  export interface DefineStoreOptionsBase<S, Store> {
    /**
     * 注：Partial 将类型定义的所有属性都修改为可选
     * 例如：type Coord = Partial<Record<'x' | 'y', number>>
     * 等同于
     * type Coord = {
     *  x?: number,
     *  y?: number
     * }
     * 
    */
    debounce?: Partial<Record<keyof StoreActions<Store>, number>>
  }
}