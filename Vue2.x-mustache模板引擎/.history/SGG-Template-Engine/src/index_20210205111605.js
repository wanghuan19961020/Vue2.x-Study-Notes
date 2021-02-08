import Scanner from './Scanner'
import parseTemplateToTokens from './parseTemplateToTokens'
window.SGG_TemplateEngine = {
  render(templateStr) {
    var tokens = parseTemplateToTokens(templateStr)
    console.log(tokens)
  }
}
