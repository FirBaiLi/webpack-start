/**
 * Created by HuJunjie on 2017/11/29.
 */
import _ from 'lodash';

function printMe() {
  console.log(_.join(['Another', 'module', 'loaded!'], ' '))
}
export default printMe();