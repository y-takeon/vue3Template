/*
 * @Author: ycb
 * @Date: 2024-06-03 14:23:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-17 17:53:59
 * @Description: 
 */
import axios from 'axios';
import type { AxiosError, CreateAxiosDefaults } from 'axios';
import { createAxiosConfig } from './options';
import { AxiosCanceler } from '../helper/axiosCancel';

const axiosCanceler = new AxiosCanceler();

function createCommonRequest<ResponseData = any>(axiosConfig?: CreateAxiosDefaults) {
  const axiosConf = createAxiosConfig(axiosConfig)
  // 创建axios实例
  const instance = axios.create(axiosConf);
  /** 请求拦截 */
  instance.interceptors.request.use(
    config => {
      // * 将当前请求添加到 pending 中
      axiosCanceler.addPending(config);
      // TODO
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  )
  /** 响应拦截 */
  instance.interceptors.response.use(
    response => {
      const { data, config } = response;
      // * 在请求结束后，移除本次请求
			axiosCanceler.removePending(config);
      // TODO
      return Promise.resolve(data);
    },
    (error: AxiosError<ResponseData>) => {
      return Promise.reject(error);
    }
  )

  return instance;
}

export const request = createCommonRequest<App.Service.Response>({
  baseURL: 'http://122.112.160.41:8080/idev/'
});