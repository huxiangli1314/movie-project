// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//我下载了三个框架，你用可以直接打开官网直接用里面的组件网址分别为
//1,http://vue.ydui.org/docs/#/quickstart
import YDUI from 'vue-ydui'; 
import 'vue-ydui/dist/ydui.rem.css';

//2,https://youzan.github.io/vant/#/zh-CN/quickstart
import Vant from 'vant';
import 'vant/lib/index.css';



//3,http://mint-ui.github.io/docs/#/zh-cn2/quickstart
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'




Vue.use(MintUI)
Vue.use(Vant);
Vue.use(YDUI);

//



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
