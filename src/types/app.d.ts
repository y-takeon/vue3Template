/*
 * @Author: ycb
 * @Date: 2024-06-14 17:14:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-14 17:16:54
 * @Description: 
 */
declare namespace App {
  /** Service namespace */
  namespace Service {
    /** The backend service response data */
    type Response<T = unknown> = {
      /** The backend service response code */
      code: string;
      /** The backend service response message */
      msg: string;
      /** The backend service response data */
      data: T;
    };
  }
}