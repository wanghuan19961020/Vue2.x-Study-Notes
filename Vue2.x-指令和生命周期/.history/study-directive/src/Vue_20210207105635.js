import Compiler from './Compiler'
import observe from './observe'
export default class Vue {
  constructor(options) {
    // 把参数 options 对象存为 $options
    this.$options = options || {}
    // 数据
    this._data = options.data || undefined
    // 数据要变成响应式的
    observe(this._data)
    // 模板编译
    new Compiler(options.el, this)
  }
}
