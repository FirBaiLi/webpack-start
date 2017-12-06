/**
 * Created by HuJunjie on 2017/11/29.
 */
// npm install --save lodash  安装好loadch
import _ from 'lodash';  // 直接引用
import './style.css';
import print from './print';
import j from './ref.json';
function getComponent() {
  var el = document.createElement('div');
  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = print;
  // loadch ('目前通过script引入在index.html中') loadch 应该是处理_join的函数
  // 通过npm 安装后 直接使用，不用担心加载不到资源，现在可以将index.html中的script去掉了
  el.innerHTML=_.join(['hello','webpackaaaa'],' ');
  el.classList.add('title');
  el.appendChild(btn);
  return el;
}
document.body.appendChild(getComponent());
/*if (module.hot) {
  module.hot.accept('./print.js',function () {
    console.log('Accepting the updated printMe module!');
    print();
  })
}*/
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
export function numToWord(num) {
  return _.reduce(j, (a, b) => {
    return b*num == num ? j.word: a;
    })
}