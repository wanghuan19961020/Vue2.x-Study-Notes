import { def } from './utils'
export default class Observer {
  constructor(value) {
    console.log('Observer构造器', value)
    // 给实例（this 一定要注意，构造函数中的 this 不是表示类本身，而是表示实例）
    def(value)
  }
}
