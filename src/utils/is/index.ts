/*
 * @Author: ycb
 * @Date: 2024-06-17 16:59:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-17 17:02:57
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