//把 attrsString 变为数组返回
export default function parseAttrsString(attrsString) {
  if (attrsString === undefined) return []
  // 当前是否在引号内
  var isYinHao = false
  // 断点
  var point = 0
  // 遍历attrsString，而不是你想的用 split 这种暴力方法
  for (let i = 0; i < attrsString.length; i++) {
    let char = attrsString[i]
    if (char === '"') {
      isYinHao = !isYinHao
    }
  }
  return [{ name: 'class', value: '测试1' }]
}
