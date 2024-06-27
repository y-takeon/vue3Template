/*
 * @Author: ycb
 * @Date: 2024-06-17 16:59:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-25 12:38:17
 * @Description: 
 */
const toString = Object.prototype.toString;

/**
 * @description: 判断值是否未某个类型
 */
 export function is(val:any, type?:string) {
	return toString.call(val) === `[object ${type}]`;
}

/**
 * @description:  是否为函数
 */
 export function isFunction(val:any) {
	return is(val, "Function");
}

/**
 * @description: 是否为对象
 */
 export const isObject = (val:any) => {
	return val !== null && is(val, "Object");
};

/**
 * @description:  是否为数值
 */
 export function isNumber(val:any) {
	return is(val, "Number");
}

/**
 * @description:  是否为字符串
 */
 export function isString(val:any) {
	return is(val, "String");
}

/**
 * @description:  是否为数组
 */
 export function isArray(val:any) {
	return val && Array.isArray(val);
}

/**
 * @description:  空数组 | 空字符串 | 空对象 | 空Map | 空Set
 */
export function isAllEmpty(val: any) {
  if (isArray(val) || isString(val)) {
    return val.length === 0
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0
  }

  return false
}