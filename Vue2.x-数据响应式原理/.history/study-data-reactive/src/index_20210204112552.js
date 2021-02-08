import observe from './observe'
import array from './array'
var obj = {
  a: {
    m: {
      n: 10
    }
  },
  b: 20,
  g: [22, 33, 55]
}

observe(obj)
obj.g.push(66)
console.log(obj)
// obj.b++
// console.log(obj.a.m.n)
// defineReactive(obj, 'a')

// console.log(obj.a.m.n)
