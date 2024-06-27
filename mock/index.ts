/*
 * @Author: ycb
 * @Date: 2024-06-25 16:07:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-25 16:32:06
 * @Description: 
 */

import Mock from "mockjs";
const data = Mock.mock({
  "data|5": [
      {   // 生成id，自增10，起始值为100
          "id|+10": 100,
          // 随机生成姓名（中文）
          "name": "@cname",
          "phone": /^1(3|4|5|6|7|8|9)[0-9]\d{8}$/,
          // 随机生成邮箱
          "email": "@email"
      }
  ]
})
export default [
  {
    url: '/mock/users',
    method: 'get',
    response: () => {
      return {
        data,
      };
    },
  },
]