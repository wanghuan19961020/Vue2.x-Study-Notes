import { def } from './utils'
// 得到 Array.prototype
const arrayPrototype = Array.prototype
// 以 Array.prototype 为原型创建 arrayMethods 对象
export const arrayMethods = Object.create(arrayPrototype)
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
  // 备份原来的方法,7个方法的功能不能被剥夺
  const original = arrayPrototype[methodName]
  // 把这个数组身上的 __ob__ 取出来，__ob__ 已经被添加了，为什么已经被添加了？因为数组肯定不是最高层
  // 比如 obj.g 属性是数组，obj 不能是数组，第一次遍历 obj 这个对象的第一层的时候，已经给 g 属性
  // （就是这个数组）添加了 __ob__ 属性
  // 定义新的方法
  def(
    arrayMethods,
    methodName,
    function () {
      console.log('lalalala')
      original.apply(this, arguments)
    },
    false
  )
})

//  arrayMethods
