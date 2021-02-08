//把 attrsString 变为数组返回
export default function parseAttrsString(attrsString) {
  if (attrsString === undefined) return []
  return [{ name: 'class', value: '测试1' }]
}
