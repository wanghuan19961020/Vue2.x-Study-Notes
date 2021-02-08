import Watcher from './Watcher'
export default class Compiler {
  constructor(el, vue) {
    // vue 实例
    this.$vue = vue
    // 挂载点
    this.$el = document.querySelector(el)
    // 如果用户传入了挂载点
    if (this.$el) {
      // 调用函数，让节点变为 fragment，类似于 mustache 中的 tokens
      // 实际上使用的是 AST，这里是轻量级的，fragment
      let $fragment = this.node2Fragment(this.$el)
      // 编译模板
      this.compile($fragment)
      // 替换好的内容要上树
      this.$el.appendChild($fragment)
    }
  }

  node2Fragment(el) {
    var fragment = document.createDocumentFragment()
    var child
    // 让 el 中所有 dom 节点都进入 fragment
    while ((child = el.firstChild)) {
      fragment.appendChild(child)
    }
    return fragment
  }

  compile(el) {
    // 得到子元素
    var childNodes = el.childNodes
    var self = this
    var reg = /\{\{(.*)\}\}/
    childNodes.forEach((node) => {
      var text = node.textContent
      if (node.nodeType === 1) {
        self.compileElement(node)
      } else if (node.nodeType === 3 && reg.test(text)) {
        let name = text.match(reg)[1]
        self.compileText(node, name)
      }
    })
  }

  compileElement(node) {
    // 这里的方便之处在于不是讲HTML结构看作是字符串，而是真正的属性列表
    var nodeAttrs = node.attributes
    // 类数组对象变为数组
    ;[].slice.call(nodeAttrs).forEach((attr) => {
      // 这里分析指令
      var attrName = attr.name
      var attrValue = attr.value
      // 指令都是 v- 开头的
      var dir = attrName.substring(2)
      // 看看是不是指令 也可用 attrName.startsWith('v-')
      if (attrName.indexOf('v-') === 0) {
        // v- 开头的指令
        if (dir === 'model') {
          new Watcher(this.$vue, attrValue, (value) => {
            node.value = value
          })
          var v = this.getVueVal(this.$vue, attrValue)
          node.value = v
          node.addEventListener('input', (e) => {
            var newVal = e.target.value
            this.setVueVal(this.$vue, attrValue, newVal)
          })
        } else if (dir === 'if') {
        }
      }
    })
  }

  compileText(node, name) {
    node.textContent = this.getVueVal(this.$vue, name)
    new Watcher(this.$vue, name, (value) => {
      node.textContent = value // 触发了视图更新
    })
  }

  getVueVal(vue, exp) {
    var val = vue
    exp = exp.split('.')
    exp.forEach((k) => {
      val = val[k]
    })
    return val
  }

  setVueVal(vue, exp, value) {
    var val = vue
    exp = exp.split('.')
    exp.forEach((k, i) => {
      if (i < exp.length - 1) {
        val = val[k]
      } else {
        val[k] = value
      }
    })
  }
}
