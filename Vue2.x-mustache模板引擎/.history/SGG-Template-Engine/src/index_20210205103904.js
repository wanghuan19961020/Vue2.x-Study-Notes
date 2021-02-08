import Scanner from './Scanner'
window.SGG_TemplateEngine = {
  render(templateStr, data) {
    console.log('render函数被调用，命令Scanner工作')
    var scanner = new Scanner()
    console.log(templateStr, data)
  }
}
