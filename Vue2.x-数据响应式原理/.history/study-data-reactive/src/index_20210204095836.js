function defineReactive(data, key, val) {
  // 闭包环境
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
    }
  })
}

var obj = {
  a: {
    m: {
      n: 10
    }
  }
}

console.log(obj.a)
