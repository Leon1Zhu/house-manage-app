// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import MetaInfo from 'vue-meta-info';
import aesjs from 'aes-js';
import './interceptor/index';
import 'muse-ui/lib/styles/base.less';
import 'muse-ui/lib/styles/theme.less';
import './styles/googleFont.scss';
import './styles/reset.css';
import './styles/styles.scss';
import 'swiper/dist/css/swiper.css';
import './styles/iconFont-symbol';


import { Button, Select, TextField, Icon, ExpansionPanel, chip, Slider, Progress} from 'muse-ui';
import Toast from 'muse-ui-toast';
import Helpers from 'muse-ui/lib/Helpers';

Vue.use(Helpers);


Vue.use(Button);
Vue.use(Select);
Vue.use(TextField);
Vue.use(Icon);
Vue.use(ExpansionPanel);
Vue.use(MetaInfo);
Vue.use(chip);
Vue.use(Slider);
Vue.use(Progress);
Vue.use(Toast);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  /* 这句非常重要，否则预渲染将不会启动 */
  mounted () {
    document.dispatchEvent(new Event('render-event'));
//  示例128位密钥（16字节* 8位/字节= 128位）
    var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

//  将文本转换为字节
    var text = '18752000239';
    var textBytes = aesjs.utils.utf8.toBytes(text);

//  计数器是可选的，如果省略则从1开始
    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    var encryptedBytes = aesCtr.encrypt(textBytes);

//  要打印或存储二进制数据，您可以将其转换为十六进制
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    console.log(encryptedHex);
//  “a338eda3874ed884b6199150d36f49988c90f5c47fe7792b0cf8c7f77eeffd87
//   ea145b73e82aefcf2076f881c88879e4e25b1d7b24ba2788“

//  准备解密十六进制字符串时，将其转换回字节
    var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);

//  计数器操作模式保持内部状态，所以
//  解密新实例必须实例化。
    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    var decryptedBytes = aesCtr.decrypt(encryptedBytes);

//  将我们的字节转换回文本
    var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    console.log(decryptedText);
//  “文本可以是您想要的任何长度，不需要填充。”

  }
})
