import { def } from './utils'
// 得到 Array.prototype
const arrayPrototype = Array.prototype
// 以 Array.prototype 为原型创建 arrayMethods 对象
const arrayMethods = Object.create(arrayPrototype)
// 要被改写的7个数组方法
const methodsNeedChange = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

methodsNeedChange.forEach((methodName) => {
  // 备份原来的方法
  const original = arrayPrototype[methodName]
  // 定义新的方法
})
