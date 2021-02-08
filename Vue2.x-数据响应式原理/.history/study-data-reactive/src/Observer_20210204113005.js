import { def } from './utils'
import defineReactive from './defineReactive'
import { arrayMethods } from './array'
export default class Observer {
  constructor(value) {
    // 给实例（this 一定要注意，构造函数中的 this 不是表示类本身，而是表示实例）
    // 添加了 __ob__ 属性，值是这次 new 的实例
    def(value, '__ob__', this, false)
    console.log('Observer构造器', value)
    // Observer类的目的是：将一个正常的 object 转换为每个层级的属性都是响应式（可以被侦测的）的 object
    // 检查它是数组还是对象
    if (Array.isArray(value)) {
      // 如果是数组，将这个数组的原型，指向 arrayMethods
      Object.setPrototypeOf(value, arrayMethods)
      // 让这个数组变得 observe
      this.observeArray(value)
    } else {
      this.walk(value)
    }
  }

  // 遍历
  walk(value) {
    for (const key in value) {
      defineReactive(value, key)
    }
  }
  // 数组的特殊遍历
  observeArray(value) {}
}
