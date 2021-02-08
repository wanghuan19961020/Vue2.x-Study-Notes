/**
 * 功能是可以在 dataObj 对象中，用连续点符号的 keyName 属性
 * 比如，dataObj是
 * {
 *    a: {
 *      b: {
 *        c: 100
 *      }
 *    }
 * }
 * 那么 lookup(dataObj, 'a.b.c') 结果就是 100
 * @param {object} dataObj
 * @param {string} keyName
 */
export default function lookup(dataObj, keyName) {
  // 看看 keyName 中有没有 . 符号
  if (keyName.indexOf('.') !== -1) {
    // 如果有点符号，那么拆开
    var names = keyName.split('.')
    var temp = dataObj
    console.log(names)
  }
}
