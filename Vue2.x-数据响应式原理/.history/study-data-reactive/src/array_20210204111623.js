// 得到 Array.prototype
const arrayPrototype = Array.prototype
// 以 Array.prototype 为原型创建 arrayMethods 对象
const arrayMethods = Object.create(arrayPrototype)
const methodsNeedChange = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
