var uid = 0

function parsePath(str) {
  var segments = str.split('.')
  return (obj) => {
    for (let i = 0; i < segments.length; i++) {
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
  }
  update() {}
}
