import { def } from './utils'
import defineReactive from './defineReactive'
export default class Observer {
  constructor(value) {
    // 给实例（this 一定要注意，构造函数中的 this 不是表示类本身，而是表示实例）
    // 添加了 __ob__ 属性，值是这次 new 的实例
    def(value, '__ob__', this, false)
    console.log('Observer构造器', value)
    // Observer类的目的是：将一个正常的 object 转换为每个层级的属性都是响应式（可以被侦测的）的 object
    this.walk(value)
  }

  // 遍历
  walk(value) {
    for (const key of value) {
    }
  }
}
