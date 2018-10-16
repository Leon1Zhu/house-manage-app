// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import MetaInfo from 'vue-meta-info';
import 'muse-ui/lib/styles/base.less';
import 'muse-ui/lib/styles/theme.less';
import './styles/reset.css';
import './styles/styles.scss';
import 'swiper/dist/css/swiper.css';
import './styles/iconFont-symbol';


import { Button, Select, TextField, Icon, ExpansionPanel } from 'muse-ui';
import Helpers from 'muse-ui/lib/Helpers';

Vue.use(Helpers);


Vue.use(Button);
Vue.use(Select);
Vue.use(TextField);
Vue.use(Icon);
Vue.use(ExpansionPanel);
Vue.use(MetaInfo)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  /* 这句非常重要，否则预渲染将不会启动 */
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
})
