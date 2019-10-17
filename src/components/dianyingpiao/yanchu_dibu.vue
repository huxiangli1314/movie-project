<template >
    <div>
        
<!--  
<div>
<van-tabbar v-model="active">
  <van-tabbar-item >
    <span>主页</span>
    <img slot="icon" slot-scope="props" src="./img_yanchu/zhuye1.png" style="width:30px; height:30px;">
  </van-tabbar-item>

  <van-tabbar-item>
    <span>电影</span>
      <img slot="icon" slot-scope="props" src="./img_yanchu/dianying1.png" style="width:30px; height:30px;">
  </van-tabbar-item>


  <van-tabbar-item>
    <span>购票</span>
     <img slot="icon" slot-scope="props" src="./img_yanchu/yingyuan1.png" style="width:30px; height:30px;">
  </van-tabbar-item>



    <van-tabbar-item >
    <span>演出</span>
     <img slot="icon" slot-scope="props" src="./img_yanchu/yanchu1.png" style="width:30px; height:30px;">
  </van-tabbar-item>




    <van-tabbar-item info="3">
    <span>我的</span>
      <img slot="icon" slot-scope="props" src="./img_yanchu/wode1.png" style="width:30px; height:30px;">
  </van-tabbar-item>
</van-tabbar>
</div>
-->


<mt-tab-container v-model="active">
<mt-tab-container-item id="tab1">
<h1>主页</h1>
</mt-tab-container-item>
<mt-tab-container-item id="tab2">
<h1>电影</h1>
</mt-tab-container-item>
<mt-tab-container-item id="tab3">
<h1>购票</h1>
</mt-tab-container-item>
<mt-tab-container-item id="tab4">
<h1>演出</h1>
</mt-tab-container-item>

<mt-tab-container-item id="tab5">
<h1>我的</h1>
</mt-tab-container-item>

</mt-tab-container>
<!--底部导航条-->
<mt-tabbar fixed v-model="active">
<mt-tab-item id="tab1" @click.native="changState(0)">

 <img slot="icon" slot-scope="props" src="./img_yanchu/zhuye1.png" style="width:35px; height:35px;">

<p style="padding:5px;margin-left:8px;padding-top:5px;font-weight:600;font-size:15px;">主页</p>

</mt-tab-item>
<mt-tab-item id="tab2" @click.native="changState(1)">
<img slot="icon" slot-scope="props" src="./img_yanchu/dianying1.png" style="width:35px; height:35px;">
<p style="padding:5px;margin-left:8px;padding-top:5px;font-weight:600;font-size:15px;">电影</p></mt-tab-item>


<mt-tab-item id="tab3" @click.native="changState(2)">
<img slot="icon" slot-scope="props" src="./img_yanchu/yingyuan1.png" style="width:35px; height:35px;">
<p style="padding:5px;margin-left:8px;padding-top:5px;font-weight:600;font-size:15px;">购票</p></mt-tab-item>



<mt-tab-item id="tab4" @click.native="changState(3)">
<img slot="icon" slot-scope="props" src="./img_yanchu/yanchu1.png" style="width:35px; height:35px;">
<p style="padding:5px;margin-left:8px;padding-top:5px;font-weight:600;font-size:15px;">演出</p></mt-tab-item>





<mt-tab-item id="tab5" @click.native="changState(4)">
  <img slot="icon" slot-scope="props" src="./img_yanchu/wode1.png" style="width:35px; height:35px;">
<p style="padding:5px;margin-left:8px;padding-top:5px;font-weight:600;font-size:15px;">我的</p></mt-tab-item>





</mt-tabbar>










    </div>
</template>

<script>

export default {
  data() {
    return {
      active: 0,
      icon: {
        normal: './img_yanchu/gengduo.png',
        active: './img_yanchu/gengduo.png',
      }
    }
  },
  methods: {
    changState(idx){
            for(var i=0;i<this.list.length;i++){
                if(i==idx){this.list[i].isSelect=true}else{this.list[i].isSelect=false}
            }

        }
  },
}
</script>
<style scoped>
  .van-tabbar>.van-tabbar-item{
    
    font-size:20px;
   
  }
.van-tabbar{
  height:60px;
}

.mint-tabbar>.mint-tab-item{
color:#999999;
} 
.mint-tabbar>.mint-tab-item.is-selected{
color:#DD4D41;
}
</style>
