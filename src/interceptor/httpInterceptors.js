/**
 * Created by zhuliang on 2018/9/6.
 */
import axios from 'axios';
import Vue from 'vue'
import Toast from 'muse-ui-toast';
import { Snackbar } from 'muse-ui';
Vue.use(Snackbar);
Vue.use(Toast);
Toast.config({
  position: 'top',
});

// const IP = '192.168.50.220';

axios.interceptors.request.use(
  (config) => {
    config.url = process.env.host + config.url;
    if (process.env.NODE_ENV === 'development') {
      console.log('发出请求');

      console.log(JSON.parse(JSON.stringify(config)));
    }
    // 在这里进行url的请求拦截操作
    return config;
  },
  err => Promise.reject(err),
);


axios.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('收到请求');
      console.log(JSON.parse(JSON.stringify(response)));
    }
    return response;
  },
  (error) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('请求出错');
      console.log(error);
    }
                          Toast.error(error.response.data.message);
    return Promise.reject(error.response);
  });
