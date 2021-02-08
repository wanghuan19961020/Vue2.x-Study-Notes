var obj = {}

Object.defineProperty(obj, 'a', {
  // getter
  get() {
    console.log('访问')
  },
  // setter
  set() {
    console.log('改变')
  }
})

Object.defineProperty(obj, 'b', { value: 5, enumerable: true })

console.log(obj)
console.log(obj.a++, obj.b)
