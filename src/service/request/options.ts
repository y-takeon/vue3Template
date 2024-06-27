/*
 * @Author: ycb
 * @Date: 2024-06-14 14:19:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-25 16:13:37
 * @Description: 
 */
import type { CreateAxiosDefaults } from 'axios';
import { stringify } from 'qs';
export function createAxiosConfig(config?: Partial<CreateAxiosDefaults>) {
  const axiosConfig:CreateAxiosDefaults  = {
    timeout: 10 * 1000,
    baseURL: '/mock',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    paramsSerializer: params => {
      return stringify(params);
    }
  };
  Object.assign(axiosConfig, config);
  return axiosConfig;
}