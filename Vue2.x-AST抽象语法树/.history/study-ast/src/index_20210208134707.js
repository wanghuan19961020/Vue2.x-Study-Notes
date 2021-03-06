import parse from './parse'
var templateStr = `
  <div>
    <h3 class="aa bb cc" id="box">你好</h3>
    <ul>
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
  </div>
`

const ast = parse(templateStr)
// 执行结果
/*
  {"tag":"div","children":[{"tag":"h3","children":[{"text":"你好","type":3}],"attrs":[{"name":"class","value":"aa bb cc"},{"name":"id","value":"box"}]},{"tag":"ul","children":[{"tag":"li","children":[{"text":"A","type":3}],"attrs":[]},{"tag":"li","children":[{"text":"B","type":3}],"attrs":[]},{"tag":"li","children":[{"text":"C","type":3}],"attrs":[]}],"attrs":[]}],"attrs":[]}
*/
console.log(JSON.stringify(ast))
