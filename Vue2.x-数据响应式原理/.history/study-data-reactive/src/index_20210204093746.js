var obj = {}

Object.defineProperty(obj, 'a', { value: 3, enumerable: false })
Object.defineProperty(obj, 'b', { value: 5 })

console.log(obj)
console.log(obj.a, obj.b)

for (const key in obj) {
  console.log(key)
}
