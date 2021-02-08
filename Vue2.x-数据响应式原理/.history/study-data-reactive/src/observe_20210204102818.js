// 创建 Observer 函数
export const observe = function (value) {
  // 如果 value 不是对象，什么都不做
  if (typeof value !== 'object') return
  // 定义 ob
  var ob
  if (typeof value.__ob__ !== 'undefined') {
    ob = value.__ob__
  } else {
    ob = new Observer(value)
  }
  return ob
}
