var obj = {}

Object.defineProperty(obj, 'a', {
  // getter
  get() {
    console.log('访问a')
  },
  // setter
  set() {
    console.log('改变a')
  }
})

Object.defineProperty(obj, 'b', { value: 5, enumerable: true })

console.log(obj)
console.log(obj.a++, obj.b)
