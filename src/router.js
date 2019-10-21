import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import dianying from "./components/dianyingpiao/dianying.vue"
import shouye from "./components/dianyingpiao/shouye.vue"
import wode from "./components/dianyingpiao/wode.vue"
import wode_login from "./components/dianyingpiao/wode_login.vue"
import yanchu from "./components/dianyingpiao/yanchu.vue"
import yingyuan from "./components/dianyingpiao/yingyuan.vue"
import yingyuan1 from "./components/dianyingpiao/yingyuan1.vue"
import yingyuan2 from "./components/dianyingpiao/yingyuan2.vue"
import yanchu_liebiao from "./components/dianyingpiao/yanchu_liebiao.vue"
import yanchu_xiangqing from "./components/dianyingpiao/yanchu_xiangqing.vue"
import yanchu_dibu from "./components/dianyingpiao/yanchu_dibu.vue"

Vue.use(Router)
export default new Router({
  //http://127.0.0.1:3001/#/Exam02
  //path:组件路径 components组件名
  routes: [
    {path:'/dianying',component:dianying},
    {path:'/shouye',component:shouye},
    {path:'/wode',component:wode},
    {path:'/wode_login',component:wode_login},
    {path:'/yanchu',component:yanchu},
    { path: '/yanchu_dibu', component: yanchu_dibu },
    { path: '/yanchu_xiangqing', component: yanchu_xiangqing },
    { path: '/yanchu_liebiao', component: yanchu_liebiao },
    {path:'/yingyuan',component:yingyuan},
    { path: '/yingyuan1', component: yingyuan1 },
    { path: '/yingyuan2', component: yingyuan2 },
    {path:'/',component:HelloContainer},
  ]
})
    //http://127.0.0.1:3001/#/Exam02
    //path:组件路径 components组件名
    