var obj = {}

function defineReactive(data, key, val) {
  Object.defineProperty(data, key, {
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

console.log(obj.a)
obj.a = 10
obj.a++
console.log(obj.a)
