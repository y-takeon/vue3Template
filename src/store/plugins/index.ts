/*
 * @Author: ycb
 * @Date: 2024-05-25 15:54:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-05-27 09:24:58
 * @Description: 将插件添加到pinia实例中
 */

import type { PiniaPluginContext } from 'pinia'
import { SetupStoreId } from '@/enum'
import { cloneDeep, debounce } from 'lodash-es'

/**
 * 此插件重置store的state数据
 * @param context 
 */

export function resetSetupStore(context: PiniaPluginContext) {
  const setupSyntaxIds = Object.values(SetupStoreId) as string[]
  if (setupSyntaxIds.includes(context.store.$id)) {
    const { $state } = context.store
    const defaultStore = cloneDeep($state)
    context.store.$reset = () => {
      context.store.$patch(defaultStore)
    }
  }
}


/**
 * 次插件可以创建一个 debounce 选项，允许您对任何操作进行防抖
 * @param context 
 * @returns Object
 */
type DebounceOption = {
  [action: string]: Function;
}
export function setDebouncedActions(context: PiniaPluginContext) {
  const { options, store } = context;
  if (options.debounce) {
    return Object.keys(options.debounce).reduce((debouncedActions:DebounceOption, action) => {
      debouncedActions[action] = debounce(
        store[action], 
        options.debounce?.[action],
        {
          'leading': true,
          'trailing': false
        }
      )
      return debouncedActions
    }, {})
  }
}
