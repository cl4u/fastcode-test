/*
 * @Author: rk
 * @Description: 计算函数
 * @Date: 2023-03-03 16:45:24
 * @LastEditors: rk
 * @LastEditTime: 2024-08-01 16:17:43
 */

/**
 * 两数相加
 * @description 支持整数、浮点数
 * @param {Number} num1 必传
 * @param {Number} num2 必传
 * @return {Number}
 */
export const plus = (num1, num2) => {
  let r1, r2, m;
  try {
    r1 = num1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (num1 * m + num2 * m) / m;
};
