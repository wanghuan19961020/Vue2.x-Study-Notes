var obj = {}
var temp
Object.defineProperty(obj, 'a', {
  // getter
  get() {
    console.log('访问a')
    return temp
  },
  // setter
  set(newValue) {
    console.log('改变a')
    temp = newValue
  }
})
