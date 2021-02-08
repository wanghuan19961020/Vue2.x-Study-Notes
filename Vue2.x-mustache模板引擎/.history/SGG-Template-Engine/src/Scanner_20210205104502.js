/*
  扫描器类
*/
export default class Scanner {
  constructor(templateStr) {
    console.log('我是Scanner', templateStr)
  }

  // 功能弱，就是走过指定的内容
  scan() {}

  // 让指针进行扫描，直到遇见指定内容结束，并且能够返回结束之前路过的文字
  scanUtil() {}
}
