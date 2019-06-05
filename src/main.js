// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//配置axios
import Axios from 'axios'

Vue.prototype.$axios = Axios;
//公共的URL部分
// Axios.defaults.baseURL = 'https://www.sinya.online/api/';
Axios.defaults.baseURL = 'http://www.liulongbin.top:3005/api/';

//配置Mint-UI
import MintUI from 'mint-ui'
//引入css
import 'mint-ui/lib/style.css'

//引入自己的css
import './assets/css/global.css'

//引入MUI
import  './assets/lib/mui/css/mui.css'
//安装插件(注册全局组件及挂载属性)
Vue.use(MintUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  /*components: {App},
  template: '<App/>'*/
  render: c => c(App)
})
