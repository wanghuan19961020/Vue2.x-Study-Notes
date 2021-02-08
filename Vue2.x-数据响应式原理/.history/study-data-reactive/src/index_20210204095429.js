var obj = {}

function defineReactive(data, key, val) {
  Object.defineProperty(data, key, {
    // 可枚举
    enumerable: true,
    // 可以被配置
    configurable: true,
    // getter
    get() {
      console.log('访问a')
      return val
    },
    // setter
    set(newValue) {
      console.log('改变a')
      if (val === newValue) return
      val = newValue
    }
  })
}
defineReactive(obj, 'a')
console.log(obj.a)
obj.a = 10
obj.a++
console.log(obj.a)
