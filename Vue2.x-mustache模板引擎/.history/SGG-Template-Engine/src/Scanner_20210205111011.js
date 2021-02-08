/*
  扫描器类
*/
export default class Scanner {
  constructor(templateStr) {
    // console.log('我是Scanner', templateStr)
    // 将模板字符串写到实例身上
    this.templateStr = templateStr
    // 指针
    this.pos = 0
    // 尾巴，一开始就是模板字符串的原文
    this.tail = templateStr
  }

  // 功能弱，就是走过指定的内容
  scan(tag) {
    if (this.tail.indexOf(tag) === 0) {
      // tag 有多长，比如 {{ 长度是2，就让指针后移几位
      this.pos += tag.length
      // 尾巴也要变，改变尾巴为从当前指针这个字符开始，到最后的全部字符
      this.tail = this.templateStr.substring(this.pos)
    }
  }

  // 让指针进行扫描，直到遇见指定内容结束，并且能够返回结束之前路过的文字
  scanUtil(stopTap) {
    // 记录一下执行本方法的时候pos的值
    const pos_backup = this.pos
    // 当尾巴的开头不是 stopTag的时候，就说明没有扫描到stopTag
    // 写 && 很有必要，防止越界
    while (this.tail.indexOf(stopTap) !== 0 && !this.eos()) {
      this.pos++
      // 改变尾巴为从当前指针这个字符开始，到最后的全部字符
      this.tail = this.templateStr.substr(this.pos)
    }
    return this.templateStr.substring(pos_backup, this.pos)
  }

  // 指针是否已经到头，返回布尔值
  eos() {
    return this.pos >= this.templateStr.length
  }
}
