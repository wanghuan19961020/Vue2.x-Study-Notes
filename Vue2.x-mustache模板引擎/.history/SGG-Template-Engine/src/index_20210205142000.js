import parseTemplateToTokens from './parseTemplateToTokens'
window.SGG_TemplateEngine = {
  // 渲染方法
  render(templateStr, data) {
    // 调用 parseTemplateToTokens 函数，让模板字符串能够变成 tokens 数组
    var tokens = parseTemplateToTokens(templateStr)
    // 调用 renderTemplate 函数，让 tokens数组变为 dom 字符串
    console.log(tokens, data)
  }
}
