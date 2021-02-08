import { def } from './utils'
export default class Observer {
  constructor(value) {
    // 给实例（this 一定要注意，构造函数中的 this 不是表示类本身，而是表示实例）
    // 添加了 __ob__ 属性，值是这次 new 的实例
    def(value, '__ob__', this, false)
    console.log('Observer构造器', value)
  }
}
