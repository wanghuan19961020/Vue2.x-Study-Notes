import observe from './observe'
import Watcher from './Watcher'
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
obj.a.m.n = 8
obj.g.splice(2, 1, [666, 888])
obj.g.push(66)
console.log(obj)
new Watcher(obj, 'a.m.n', (val) => {
  console.log('*********', val)
})
obj.a.m.n = 8888
// obj.b++
// console.log(obj.a.m.n)
// defineReactive(obj, 'a')

// console.log(obj.a.m.n)
