import Scanner from './Scanner'
window.SGG_TemplateEngine = {
  render(templateStr, data) {
    console.log('render函数被调用，命令Scanner工作')
    // 实例化一个扫描器 构造时候提供一个参数，这个参数就是模板字符串
    // 也就是说这个扫描器就是针对这个模板字符串工作的
    var scanner = new Scanner(templateStr)
    scanner.scanUtil('{{')
    console.log(scanner.pos, scanner.tail)
    // console.log(templateStr, data)
  }
}
