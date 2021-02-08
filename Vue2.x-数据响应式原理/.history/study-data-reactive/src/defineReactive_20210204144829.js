import observe from './observe'
import Dep from './Dep'
export default function (data, key, val) {
  const dep = new Dep()
  // 闭包环境
  if (arguments.length === 2) {
    val = data[key]
  }
  // 子元素要进行 observe，至此形成了递归，这个地柜不是函数自己调用自己，而是多个函数、类循环调用
  let childOb = observe(val)

  Object.defineProperty(data, key, {
    // 可枚举
    enumerable: true,
    // 可以被配置
    configurable: true,
    // getter
    get() {
      console.log('访问' + key)
      return val
    },
    // setter
    set(newValue) {
      console.log('改变' + key, newValue)
      if (val === newValue) return
      val = newValue
      // 当设置了新值，这个新值也要被 observe
      childOb = observe(newValue)
    }
  })
}
