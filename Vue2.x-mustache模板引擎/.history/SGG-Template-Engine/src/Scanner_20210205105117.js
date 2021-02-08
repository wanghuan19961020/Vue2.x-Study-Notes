/*
  扫描器类
*/
export default class Scanner {
  constructor(templateStr) {
    console.log('我是Scanner', templateStr)
    this.templateStr = templateStr
    // 指针
    this.pos = 0
    // 尾巴，一开始就是模板字符串的原文
    this.tail = templateStr
  }

  // 功能弱，就是走过指定的内容
  scan() {}

  // 让指针进行扫描，直到遇见指定内容结束，并且能够返回结束之前路过的文字
  scanUtil(stopTap) {
    // 当尾巴的开头不是 stopTag的时候，就说明没有扫描到stopTag
    while (this.tail.indexOf(stopTap) !== 0) {
      this.pos++
      // 改变尾巴为从当前指针这个字符开始，到最后的全部字符
      this.tail = this.templateStr.substr(this.pos)
    }
    console.log(this.tail)
  }
}
