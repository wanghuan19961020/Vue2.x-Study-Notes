import Dep from './Dep'

var uid = 0

function parsePath(str) {
  var segments = str.split('.')
  return (obj) => {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return
      obj = obj[segments[i]]
    }
    return obj
  }
}

export default class Watcher {
  constructor(target, expression, callback) {
    console.log('Watcher构造器')
    this.id = uid++
    this.target = target
    this.getter = parsePath(expression)
    this.callback = callback
    this.value = this.get()
  }
  update() {}
  get() {
    // 进入依赖收集阶段，让全局的 Dep.target 设置为 Watcher 本身，name就是进入了依赖收集阶段
    Dep.target = this
  }
}
