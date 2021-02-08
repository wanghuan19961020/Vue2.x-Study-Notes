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
      this.node2Fragment(this.$el)
    }
  }

  node2Fragment(el) {
    var fragment = document.createDocumentFragment()
    console.log(fragment)
    var child
    while ((child = el.firstChild)) {
      fragment.appendChild(child)
    }
    return fragment
  }
}
