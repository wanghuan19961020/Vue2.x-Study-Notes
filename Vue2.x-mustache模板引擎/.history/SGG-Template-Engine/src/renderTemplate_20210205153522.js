import lookup from './lookup'
/**
 * 让 tokens数组变为 dom 字符串
 * @param {array} tokens
 * @param {object} data
 */
export default function renderTemplate(tokens, data) {
  console.log(tokens, data)
  // 结果字符串
  var resultStr = ''
  // 遍历 tokens
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i]
    // 看类型
    if (token[0] === 'text') {
      resultStr += token[1] // 拼起来
    } else if (token[0] === 'name') {
      // 如果是 name 类型，那么就直接使用它的值，当然要用 lookup
      // 防止这里有 “a.b.c” 有逗号的形式
      resultStr += lookup(data, token[1])
    } else if (token[0] === '#') {
    }
  }
  return resultStr
}
