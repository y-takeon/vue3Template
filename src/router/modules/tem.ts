/*
 * @Author: ycb
 * @Date: 2024-06-25 17:55:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-25 17:59:33
 * @Description: 
 */
const temRoutes = [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/home/index.vue')
  }
]

export default temRoutes;