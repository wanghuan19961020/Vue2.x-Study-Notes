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
  /*
  // 看看 keyName 中有没有 . 符号
  if (keyName.indexOf('.') !== -1) {
    // 如果有点符号，那么拆开
    var keys = keyName.split('.')
    // 这只一个临时变量，用于周转，一层一层找下去
    var temp = dataObj
    // 每找一层，更新临时变量
    for (let i = 0; i < keys.length; i++) {
      temp = temp[keys[i]]
    }
    return temp
  }
  // 如果这里没有 . 符号
  return dataObj[keyName]
  */
  // 这里其实可以不用加是否包含 . 符号的判断 因为 'abc'.split('.') = ["abc"]
  // 只有一个元素不影响最终结果，不影响循环语句最终结果
  // 另外，这里的特征是：当前的值要依赖前一个的值，所以可以用 reduce
  // 一行代码搞定
  return keyName.split('.').reduce((prev, current) => prev[current], dataObj)
}
