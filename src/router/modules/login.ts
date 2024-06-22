/*
 * @Author: ycb
 * @Date: 2024-05-21 22:48:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-05-21 23:01:32
 * @Description: 
 */
const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/index.vue')
  }
]

export default routes;