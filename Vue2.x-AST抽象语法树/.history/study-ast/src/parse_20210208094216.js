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
    stack2 = []
  while (index < templateStr.length - 1) {
    rest = templateStr.substring(index)
    // 识别遍历到的这个字符，是不是一个开始标签
    if (startRegExp.test(rest)) {
      let tag = rest.match(startRegExp)[1]
      console.log('检测到开始标记' + tag)
      // 将开始标记推入栈1中
      stack1.push(tag)
      // 将空数组推入栈2中
      stack2.push([])
      // 指针移动标签的长度加2，为什么要加2呢？因为 <> 也占2位
      index += tag.length + 2
    } else if (endRegExp.test(rest)) {
      // 识别遍历到的这个字符，是不是一个结束标签
      let tag = rest.match(endRegExp)[1]
      console.log('检测到结束标记' + tag)
      // 此时，tag 一定是和栈1顶部是相同的
      if (tag === stack1[stack1.length - 1]) {
        stack1.pop()
      } else {
        throw new Error(stack1[stack1.length - 1] + '标签没有封闭！！')
      }
      // 指针移动标签的长度加3，为什么要加2呢？因为 </> 也占3位
      index += tag.length + 3
    } else if (wordRegExp.test(rest)) {
      // 检测到文字
      let word = rest.match(wordRegExp)[1]
      // 看word是不是全是空
      if (!/^\s+$/.test(word)) {
        console.log('检测到文字   ' + word)
        // 改变此时 stack2 栈顶元素
        stack2[stack2.length - 1].push(word)
      }
      index += word.length
    } else {
      index++
    }
    console.log(stack1, stack2)
  }
  // return templateStr
}
