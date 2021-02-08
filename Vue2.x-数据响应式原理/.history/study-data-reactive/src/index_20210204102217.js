import Observer from './Observer'
var obj = {
  a: {
    m: {
      n: 10
    }
  },
  b: 20
}

// 创建 Observer 函数
function observe(value) {
  // 如果 value 不是对象，什么都不做
  if (typeof value !== 'object') return
  // 定义 ob
  var ob
  if (typeof value.__ob__ !== 'undefined') {
    ob = value.__ob__
  } else {
    ob = new Observer(value)
  }
  return ob
}

observe(obj)
// defineReactive(obj, 'a')

// console.log(obj.a.m.n)
