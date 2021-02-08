// parse函数，就是主函数
export default function parse(templateStr) {
  // 指针
  var index = 0
  while (index < templateStr.length - 1) {
    console.log(templateStr[index])
    // 识别遍历到的这个字符，是不是一个开始标签
    index++
  }
  return templateStr
}
