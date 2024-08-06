/*
 * @Author: rk
 * @Description:
 * @Date: 2024-07-31 15:43:38
 * @LastEditors: rk
 * @LastEditTime: 2024-08-01 17:51:52
 */
/**
 * 匹配字典的方法
 * @param {*} index 索引值
 * @param {Array} dictionary 字典数据
 * @returns
 */
export function dictionaryMatch(index, dictionary) {
  let label = "";
  let value = "";
  dictionary.forEach((item) => {
    // ?? 如果左侧是null或者undefined才会继续，如果是0，则取值为0
    value = item.value ?? item.dictValue ?? item.id ?? item.type;
    if (value === index) {
      label = item.label || item.name || item.dictLabel;
    }
  });
  return label;
}
