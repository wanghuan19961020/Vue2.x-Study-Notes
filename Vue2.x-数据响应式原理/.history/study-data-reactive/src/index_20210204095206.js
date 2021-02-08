var obj = {}

function defineReactive(data, key, val) {
  var temp
  Object.defineProperty(obj, 'a', {
    // getter
    get() {
      console.log('访问a')
      return val
    },
    // setter
    set(newValue) {
      console.log('改变a')
      val = newValue
    }
  })
}
