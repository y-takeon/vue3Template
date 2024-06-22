/*
 * @Author: ycb
 * @Date: 2024-06-18 14:23:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-18 14:31:19
 * @Description: 
 */
import NProgress from 'nprogress';

export function setupNProgress() {
  NProgress.configure({ easing: 'ease', speed: 500 });

  window.NProgress = NProgress;
}