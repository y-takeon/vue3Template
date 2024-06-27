/*
 * @Author: ycb
 * @Date: 2024-05-21 22:48:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-25 17:59:46
 * @Description: 
 */
const loginRoutes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/index.vue')
  }
]

export default loginRoutes;