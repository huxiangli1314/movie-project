import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import dianying from "./components/dianyingpiao/dianying.vue"
import shouye from "./components/dianyingpiao/shouye.vue"
import wode from "./components/dianyingpiao/wode.vue"
import yanchu from "./components/dianyingpiao/yanchu.vue"
import yingyuan from "./components/dianyingpiao/yingyuan.vue"

import yanchu_dibu from "./components/dianyingpiao/yanchu_dibu.vue"

Vue.use(Router)
export default new Router({
    //http://127.0.0.1:3001/#/Exam02
    //path:组件路径 components组件名
    routes: [
        { path: '/dianying', component: dianying },
        { path: '/shouye', component: shouye },
        { path: '/wode', component: wode },
        { path: '/yanchu', component: yanchu },
        { path: '/yanchu_dibu', component: yanchu_dibu },
        { path: '/yingyuan', component: yingyuan },
        { path: '/', component: HelloContainer },
    ]
})