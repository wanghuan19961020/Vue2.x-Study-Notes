import observe from './observe'
var obj = {
  a: {
    m: {
      n: 10
    }
  },
  b: 20
}

observe(obj)
obj.b++
console.log(obj.a.m.n)
// defineReactive(obj, 'a')

// console.log(obj.a.m.n)
