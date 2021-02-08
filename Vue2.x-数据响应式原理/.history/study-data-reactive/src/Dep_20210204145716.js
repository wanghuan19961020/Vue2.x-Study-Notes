export default class Dep {
  constructor() {
    console.log('Dep构造器')
  }
  notify() {
    console.log('我是notify')
  }
}
