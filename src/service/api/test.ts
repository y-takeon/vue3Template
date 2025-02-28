/*
 * @Author: ycb
 * @Date: 2024-06-14 17:19:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-25 16:11:54
 * @Description: 
 */
import { request } from '../request';

export function getTest(secretKey: String) {
  return request({
    url: 'open-api/getDeviceRealStateByCondition.action',
    method: 'post',
    data: {
      secretKey
    }
  });
}

export function GetElectricWaveVal(params:any, data:any) {
  return request({
    url: 'open-api/TvBoard/energyReport/queryRecentDaysElectricWave.action',
    method: 'post',
    params,
    data
  });
}

export function getTest1() {
  return request({
    url: '/users',
    method: 'get'
  });
}