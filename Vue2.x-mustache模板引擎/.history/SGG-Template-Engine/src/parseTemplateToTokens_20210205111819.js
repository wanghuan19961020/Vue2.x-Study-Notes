import Scanner from './Scanner'
/**
 * 将模板字符串变为 tokens 数组
 * @param {string} templateStr
 */
export default function parseTemplateToTokens(templateStr) {
  var tokens = []
  // 实例化一个扫描器 构造时候提供一个参数，这个参数就是模板字符串
  // 也就是说这个扫描器就是针对这个模板字符串工作的
  var scanner = new Scanner(templateStr)
  var words
  while (scanner.pos !== templateStr.length) {
    words = scanner.scanUtil('{{')
    console.log(words)
    scanner.scan('{{')
    words = scanner.scanUtil('}}')
    console.log(words)
    scanner.scan('}}')
  }
  return tokens
}
