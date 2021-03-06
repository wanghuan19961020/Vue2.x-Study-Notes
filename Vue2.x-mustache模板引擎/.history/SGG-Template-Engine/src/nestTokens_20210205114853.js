/**
 * 函数的功能是折叠 tokens，将#和/之间的tokens能够整合起来
 * 作为它的下标为3的项
 * @param {array} tokens
 */
export default function nestTokens(tokens) {
  // 结果数组
  var nestedTokens = []
  // 栈结构，存放小tokens，栈顶（靠近端口的，最新进入的）的tokens数组中当前操作的这个tokens小数组
  var sections = []
  console.log(tokens)
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i]
    switch (token[0]) {
      case '#':
        // 给这个token下标为2的项创建一个数组，已收集子元素
        token[2] = []
        // 压栈（入栈）
        sections.push(token)
        console.log(token[1] + '入栈了')
        break
      case '/':
        // 弹栈（出栈）
        let section = sections.pop()
        console.log(section[1] + '出栈了')
        break
      default:
        break
    }
  }
  return tokens
}
