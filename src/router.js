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
import dianyinga from "./components/dianyingpiao/dianyinga.vue"
import dianyingb from "./components/dianyingpiao/dianyingb.vue"
import dianyingc from "./components/dianyingpiao/dianyingc.vue"

Vue.use(Router)
export default new Router({
    routes: [
        {path:'/yanchu_xiangqing',component:yanchu_xiangqing},
        {path:'/yanchu_liebiao',component:yanchu_liebiao},
        {path:'/dianyingc',component:dianyingc},
        {path:'/dianyingb',component:dianyingb},
        {path:'/dianyinga',component:dianyinga},
        { path: '/yingyuan1', component: yingyuan1 },
        { path: '/dianying', component: dianying },
        { path: '/shouye', component: shouye },
        { path: '/wode', component: wode },
        { path: '/yanchu', component: yanchu },
        { path: '/yanchu_dibu', component: yanchu_dibu },
        { path: '/yingyuan', component: yingyuan },
        { path: '/', component: HelloContainer },
    ]
})

