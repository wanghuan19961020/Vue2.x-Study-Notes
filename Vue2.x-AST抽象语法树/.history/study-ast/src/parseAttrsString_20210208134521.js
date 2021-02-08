//把 attrsString 变为数组返回
export default function parseAttrsString(attrsString) {
  if (attrsString === undefined) return []
  // 当前是否在引号内
  var isYinHao = false
  // 断点
  var point = 0
  var result = []
  // 遍历attrsString，而不是你想的用 split 这种暴力方法
  for (let i = 0; i < attrsString.length; i++) {
    let char = attrsString[i]
    if (char === '"') {
      isYinHao = !isYinHao
    } else if (char === ' ' && !isYinHao) {
      // 遇见了空格，并且不在引号中
      console.log(i)
      if (!/^\s*$/.test(attrsString.substring(point, i))) {
        result.push(attrsString.substring(point, i).trim())
      }
      point = i
    }
  }
  // 循环结束之后，最后还剩一个属性 k="v"
  result.push(attrsString.substring(point).trim())
  result = result.map((item) => {
    // 根据等号拆分
    const o = item.match(/^(.+)="(.+)"$/)
    return {
      name: o[1],
      value: o[2]
    }
  })
  console.log(result)
  return [{ name: 'class', value: '测试1' }]
}
