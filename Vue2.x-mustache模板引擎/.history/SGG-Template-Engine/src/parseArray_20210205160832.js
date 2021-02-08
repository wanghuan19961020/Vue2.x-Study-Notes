/**
 * 处理数组，结合 renderTemplate 实现递归
 * 这个函数接受的参数是token 而不是 tokens
 * token 是什么，就是一个简单的 ['#', 'students', []]
 *
 * 这个函数要递归调用 renderTemplate 函数
 * 调用的次数由 data 的深度决定
 */
export default function parseArray(token, data) {
  console.log(token, data)
}
