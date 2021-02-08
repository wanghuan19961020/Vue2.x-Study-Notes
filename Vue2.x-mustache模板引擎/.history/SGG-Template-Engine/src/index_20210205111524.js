import Scanner from './Scanner'
import parseTemplateToTokens from './parseTemplateToTokens'
window.SGG_TemplateEngine = {
  render(templateStr, data) {
    parseTemplateToTokens(templateStr, data)
  }
}
