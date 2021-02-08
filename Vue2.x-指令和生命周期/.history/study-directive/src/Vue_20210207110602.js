import Compiler from './Compiler'
import observe from './observe'
import Watcher from './Watcher'
export default class Vue {
  constructor(options) {
    // 把参数 options 对象存为 $options
    this.$options = options || {}
    // 数据
    this._data = options.data || undefined
    // 数据要变成响应式的
    observe(this._data)
    // 默认数据变为响应式的，这里就是生命周期
    this._initData()
    // 调用默认的 watch
    this._initWatch()
    // this._initComputed()
    // 模板编译
    new Compiler(options.el, this)
  }

  _initData() {
    var self = this
    Object.keys(this._data).forEach((key) => {
      Object.defineProperty(self, key, {
        get() {
          return self._data[key]
        },
        set(newValue) {
          self._data[key] = newValue
        }
      })
    })
  }
  _initWatch() {
    var self = this
    var watch = this.$options.watch
  }
}
