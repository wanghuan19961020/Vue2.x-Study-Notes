import defineReactive from './defineReactive'

var obj = {
  a: {
    m: {
      n: 10
    }
  }
}

defineReactive(obj, 'a')

console.log(obj.a.m.n)
