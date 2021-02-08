import defineReactive from './defineReactive'
import Observer from './Observer'
var obj = {
  a: {
    m: {
      n: 10
    }
  }
}

// 创建 Observer 函数

defineReactive(obj, 'a')

console.log(obj.a.m.n)
