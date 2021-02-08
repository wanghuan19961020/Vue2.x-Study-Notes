// parse函数，就是主函数
export default function parse(templateStr) {
  templateStr = templateStr.trim()
  // 指针
  var index = 0
  // 剩余部分
  var rest = ''
  // 开始标记
  var startRegExp = /^\<(\w+)\>/
  // 结束标记
  var endRegExp = /^\<\/(\w+)\>/
  // 抓取结束标记前的文字
  var wordRegExp = /^([^\<]+)\<\/\w+\>/
  // 准备2个栈
  var stack1 = [],
    stack2 = [{ children: [] }]
  while (index < templateStr.length - 1) {
    rest = templateStr.substring(index)
    // 识别遍历到的这个字符，是不是一个开始标签
    if (startRegExp.test(rest)) {
      let tag = rest.match(startRegExp)[1]
      // 将开始标记推入栈1中
      stack1.push(tag)
      // 将空数组推入栈2中
      stack2.push({ tag, children: [] })
      // 指针移动标签的长度加2，为什么要加2呢？因为 <> 也占2位
      index += tag.length + 2
    } else if (endRegExp.test(rest)) {
      // 识别遍历到的这个字符，是不是一个结束标签
      let tag = rest.match(endRegExp)[1]
      let pop_tag = stack1.pop()
      // 此时，tag 一定是和栈1顶部是相同的
      if (tag === pop_tag) {
        let pop_arr = stack2.pop()
        if (stack2.length > 0) {
          stack2[stack2.length - 1].children.push(pop_arr)
        }
      } else {
        throw new Error(pop_tag + '标签没有封闭！！')
      }
      // 指针移动标签的长度加3，为什么要加2呢？因为 </> 也占3位
      index += tag.length + 3
    } else if (wordRegExp.test(rest)) {
      // 检测到文字
      let word = rest.match(wordRegExp)[1]
      // 看word是不是全是空
      if (!/^\s+$/.test(word)) {
        // 改变此时 stack2 栈顶元素
        stack2[stack2.length - 1].children.push({ text: word, type: 3 })
      }
      index += word.length
    } else {
      index++
    }
  }
  // 此时 stack2 就是我们之前默认放置的一项了，此时要返回这一项的 children 即可
  return stack2[0].children[0]
}
