var obj = {}

Object.defineProperty(obj, 'a', {
  get() {
    console.log('访问')
  },
  set() {
    console.log('改变')
  }
})
Object.defineProperty(obj, 'b', { value: 5, enumerable: true })

console.log(obj)
console.log(obj.a, obj.b)
console.log('a' in obj)
console.log(obj.hasOwnProperty('a'))
for (const key in obj) {
  console.log(key)
}
