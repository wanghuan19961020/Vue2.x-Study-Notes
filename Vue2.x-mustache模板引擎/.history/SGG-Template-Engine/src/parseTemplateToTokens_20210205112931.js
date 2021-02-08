import Scanner from './Scanner'
/**
 * 将模板字符串变为 tokens 数组
 * @param {string} templateStr
 */
export default function parseTemplateToTokens(templateStr) {
  var tokens = []
  // 实例化一个扫描器 构造时候提供一个参数，这个参数就是模板字符串
  var scanner = new Scanner(templateStr)
  var words
  // 让扫描器工作
  while (!scanner.eos()) {
    // 收集开始标记之前的文字
    words = scanner.scanUtil('{{')
    // 存起来
    if (words !== '') tokens.push(['text', words])
    // 过双大括号
    scanner.scan('{{')
    // 收集开始标记之前的文字
    words = scanner.scanUtil('}}')
    // 存起来
    if (words !== '') {
      // 这个 words 就是 {{}} 中间的东西，判断一下首字符
      if (words[0] === '#') {
        // 存起来，从下标为1的项开始存，因为下标为0的项是#
        tokens.push(['#', words.substring(1)])
      } else if (words[0] === '/') {
        tokens.push(['/', words.substring(1)])
      } else {
        tokens.push(['text', words])
      }
    }
    // 过双大括号
    scanner.scan('}}')
  }
  return tokens
}
