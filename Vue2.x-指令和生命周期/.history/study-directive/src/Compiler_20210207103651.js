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
    console.log(el)
  }
}
