// parse函数，就是主函数
export default function parse(templateStr) {
  templateStr = templateStr.trim()
  // 指针
  var index = 0
  // 剩余部分
  var rest = templateStr
  while (index < templateStr.length - 1) {
    rest = templateStr.substring(index)
    // 识别遍历到的这个字符，是不是一个开始标签
    if (/^\<[a-z]+\>/.test(templateStr)) {
      console.log('检测到开始标记')
      let tag = templateStr.match(/^\<([a-z]+)\>/)[1]
      console.log(tag)
      // 指针移动标签的长度加2，为什么要加2呢？因为 <> 也占2位
      index += tag.length + 2
    } else {
      index++
    }
  }
  // return templateStr
}
