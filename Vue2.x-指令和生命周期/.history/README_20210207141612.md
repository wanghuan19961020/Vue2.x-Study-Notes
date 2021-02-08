# Vue2.x-指令和生命周期
## 使用 `webpack` 和 `webpack-dev-server` 构建
- 新建目录 `study-directive`
- `cd study-directive`
- `npm init -yes`
- `npm i -D webpack@5 webpack-cli@3 webpack-dev-server@3`
- 新建 `webpack.config.js` 文件
- 将如下配置拷贝到 `webpack.config.js` 中
  ```js
  const path = require('path')

  module.exports = {
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
      // 虚拟打包路径，就是说文件夹不会真正生成，而是在 8080 端口虚拟生成，不会真正的物理生成
      publicPath: 'xuni',
      // 打包出来的文件名
      filename: 'bundle.js'
    },
    devServer: {
      // 端口号
      port: 8080,
      // 静态资源文件夹
      contentBase: 'www'
    }
  }
  ```
- 新建 `src/index.js` 文件
  ```js
  alert(123)
  ```
- 新建 `www/index.html` 文件
  ```html
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>

  <body>
    <h1>你好!!!</h1>
    <script src="xuni/bundle.js"></script>
  </body>

  </html>
  ```
- `package.json` 文件中新增命令:
  ```json
  {
    "scripts": {
      "dev": "webpack-dev-server",
    }
  }
  ```
- 终端运行 `npm run dev`
- 访问：`http://localhost:8080/` 和 `http://127.0.0.1:8080/xuni/bundle.js`， 可以看到 `www/index.html` 和 `xuni/bundle.js` 文件的内容
## 前置条件
- 将**Vue2.x 数据响应式原理**中实现的数据响应式相关的的模块复制到`src`目录下
- 文章地址：https://blog.csdn.net/wanghuan1020/article/details/113650876
## 实现
- `www/index.html` - 测试数据
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div id="app">
    你好{{b.m.n}}
    <ul>
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
    <input type="text" v-model="b.m.n">
    <br>
  </div>
  <button onclick="add()">按我加1</button>
  <script src="xuni/bundle.js"></script>
  <script>
    var vm = new Vue({
      el: '#app',
      data: {
        a: 10,
        b: {
          m: {
            n: 7
          }
        }
      },
      watch: {
        a() {
          console.log('a改变了')
        }
      }
    })
    function add() {
      vm.b.m.n++
    }
  </script>
</body>

</html>
```
- `src/index.js` - 将 `Vue` 挂在到全局对象 `Window` 上
```js
import Vue from './Vue'
window.Vue = Vue
```
- `src/Vue.js` - `Vue` 类的实现（为实现数据的响应式绑定，需使用 `observe` 和 `Watcher` 模块）
```js
import Compiler from './Compiler'
import observe from './observe'
import Watcher from './Watcher'
export default class Vue {
  constructor(options) {
    // 把参数 options 对象存为 $options
    this.$options = options || {}
    // 数据
    this._data = options.data || undefined
    // 数据要变成响应式的
    observe(this._data)
    // 默认数据变为响应式的，这里就是生命周期
    this._initData()
    // 调用默认的 watch
    this._initWatch()
    // 模板编译
    new Compiler(options.el, this)
  }

  _initData() {
    var self = this
    Object.keys(this._data).forEach((key) => {
      Object.defineProperty(self, key, {
        get() {
          return self._data[key]
        },
        set(newValue) {
          self._data[key] = newValue
        }
      })
    })
  }
  _initWatch() {
    var self = this
    var watch = this.$options.watch
    Object.keys(watch).forEach((key) => {
      new Watcher(self, key, watch[key])
    })
  }
}
```
- `src/Compiler.js` - 模板编译
```js
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
```