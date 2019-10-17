<template>
    <div class="a10">

<div class="a20"> 
<van-row gutter="20">
  <van-col span="8">
  <van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
</van-dropdown-menu>
</van-col>
  <van-col span="8"><span class="a21">演出</span></van-col>
  <van-col span="8"><img src="./img_yanchu/search.png" class="a22" alt=""></van-col>
</van-row>
  </div>

<div class="a30">   
<van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item> <img src="./img_yanchu/lun4.jpg" class="a31"/>   </van-swipe-item>
  <van-swipe-item><img src="./img_yanchu/lun5.jpg" class="a31"/> </van-swipe-item>
  <van-swipe-item><img src="./img_yanchu/lun6.jpg" class="a31"/> </van-swipe-item>
  <van-swipe-item><img src="./img_yanchu/lun7.jpg" class="a31"/> </van-swipe-item>
</van-swipe>
</div>


<div class="a40">

<van-grid :border="false" :column-num="5">
  <van-grid-item>
   <div class="a43">  <img src="./img_yanchu/huatong.png" class="a41" /></div>
   <p class="a42">演唱会</p>
  </van-grid-item>
  <van-grid-item>
   <div class="a44">  <img src="./img_yanchu/huaju.png" class="a41" /></div>
   <p class="a42">话剧歌剧</p>
  </van-grid-item>
  <van-grid-item>
       <div class="a45">  <img src="./img_yanchu/zhanlan.png" class="a41" /></div>
   <p class="a42">休闲展览</p>
  </van-grid-item>
    <van-grid-item>
        <div class="a43">  <img src="./img_yanchu/qinzi.png" class="a41" /></div>
  <p class="a42">亲子/艺术</p>
  </van-grid-item>
    <van-grid-item>
          <div class="a47">  <img src="./img_yanchu/shanzi1.png" class="a41" /></div>
  <p class="a42">相声曲艺</p>
  </van-grid-item>
</van-grid>


</div>



<div class="a50">

<van-grid :border="false" :column-num="5">
  <van-grid-item>
   <div>  <img src="./img_yanchu/mingxing2.png" class="a51" /></div>
   <p class="a42">明星来了</p>
  </van-grid-item>
  <van-grid-item>
   <div>  <img src="./img_yanchu/DJ1.png" class="a51" /></div>
   <p class="a42">百大DJ</p>
  </van-grid-item>
  <van-grid-item>
   <div>  <img src="./img_yanchu/xiju1.png" class="a51" /></div>
   <p class="a42">先锋戏剧</p>
  </van-grid-item>
    <van-grid-item>
    <div>  <img src="./img_yanchu/mahua1.png" class="a51" /></div>
  <p class="a42">爆笑喜剧</p>
  </van-grid-item>
    <van-grid-item>
    <div class="a52">  <img src="./img_yanchu/gengduo.png" class="a41" /></div>
  <p class="a42">更多精彩</p>
  </van-grid-item>
</van-grid>
</div>

<div class="a60">
<img  class="a61" src="./img_yanchu/xunhuan2.png"  alt="">
</div>

<div style="text-align:center;margin-top:10px;height:40px;">
<h3 style="font-size:18px;">-发现精彩-</h3>
</div>


<div class="a70">
<van-row gutter="20">
  <van-col span="12"><img class="a71" src="./img_yanchu/huanle1.jpg" alt=""></van-col>
  <van-col span="12"><img class="a72" src="./img_yanchu/huanle2.jpg" alt=""></van-col>
</van-row>
</div>




<div class="a80">
<van-row gutter="20">
  <van-col span="8">
<div class="a82">
  <p style="font-size:15px;font-weight:600;padding-top:10px;">胡歌</p>
  <div style="padding-top:10px;"> <van-tag plain type="primary">温暖型男</van-tag></div>
  <div><img class="a81" src="./img_yanchu/shuai1.png" alt=""></div>
</div>
  </van-col>


  <van-col span="8">
  <div class="a82">
  <p style="font-size:15px;font-weight:600;padding-top:10px;">彭于晏</p>
  <div style="padding-top:10px;"> <van-tag plain type="primary">阳光男孩</van-tag></div>
  <div><img class="a81" src="./img_yanchu/shuai2.png" alt=""></div>
</div>
  </van-col>


  <van-col span="8">
  <div class="a83">
  <p style="font-size:15px;font-weight:600;padding-top:10px;">霍建华</p>
  <div style="padding-top:10px;"> <van-tag plain type="primary">成熟男神</van-tag></div>
  <div><img class="a81" src="./img_yanchu/shuai3.png" alt=""></div>
</div>
  </van-col>

</van-row>
</div>

<div style="width:100%;height:10px;background:#ccc;margin-top:10px;">

</div>



<div style="text-align:center;margin-top:5px;height:40px;border-bottom:1px solid #ccc;">
<h3 style="font-size:18px;">-为你推荐-</h3>
</div>

<div>

<van-tabs>
  <van-tab title="当前热门" name="renmen">
  
  <div style="width:100%;height:185px;background-color:white;margin-bottom:5px; margin-top:5px;" v-for="(item,index) in 4" :key="index">
  <van-row>
  <van-col span="8"><img style="width:100%;height:100%;margin-left:5px;" src="./img_yanchu/haibao1.png" alt=""></van-col>
  <van-col span="16">
  <div style="width:92%;height:100%;margin-left:15px;">
  <p style="font-size:17px;font-weight:600;">JJ 林俊杰《圣所2.0》世界巡回演唱会-重庆站 </p>
  <p style="color:#ccc;padding-top:20px; font-weight:600;">2019.11.2 19:30 周六 </p>
  <p style="color:#ccc;padding-top:5px;font-weight:600;">重庆 重庆市奥林匹克体育中心</p>
  <div style="padding-top:30px;">
  <van-tag round type="warning">售票中</van-tag><span>380-1680元</span>
  </div>
  </div>
  </van-col>
  </van-row>
  </div>
  


  </van-tab>











  <van-tab title="最新上架" name="zuixin">
    <div style="width:100%;height:185px;background-color:white;margin-bottom:5px; margin-top:5px;" v-for="(item,index) in 4" :key="index">
  <van-row>
  <van-col span="8"><img style="width:100%;height:100%;margin-left:5px;" src="./img_yanchu/haibao2.png" alt=""></van-col>
  <van-col span="16">
  <div style="width:92%;height:100%;margin-left:15px;">
  <p style="font-size:17px;font-weight:600;">JJ 林俊杰《圣所2.0》世界巡回演唱会-重庆站 </p>
  <p style="color:#ccc;padding-top:20px; font-weight:600;">2019.11.2 19:30 周六 </p>
  <p style="color:#ccc;padding-top:5px;font-weight:600;">重庆 重庆市奥林匹克体育中心</p>
  <div style="padding-top:30px;">
  <van-tag round type="warning">售票中</van-tag><span>380-1680元</span>
  </div>
  </div>
  </van-col>
  </van-row>
  </div>
  </van-tab>





  <van-tab title="折扣演出" name="zhekou">
  
  
    <div style="width:100%;height:185px;background-color:white;margin-bottom:5px; margin-top:5px;" v-for="(item,index) in 4" :key="index">
  <van-row>
  <van-col span="8"><img style="width:100%;height:100%;margin-left:5px;" src="./img_yanchu/haibao3.png" alt=""></van-col>
  <van-col span="16">
  <div style="width:92%;height:100%;margin-left:15px;">
  <p style="font-size:17px;font-weight:600;">JJ 林俊杰《圣所2.0》世界巡回演唱会-重庆站 </p>
  <p style="color:#ccc;padding-top:20px; font-weight:600;">2019.11.2 19:30 周六 </p>
  <p style="color:#ccc;padding-top:5px;font-weight:600;">重庆 重庆市奥林匹克体育中心</p>
  <div style="padding-top:30px;">
  <van-tag round type="warning">售票中</van-tag><span>380-1680元</span>
  </div>
  </div>
  </van-col>
  </van-row>
  </div>
  
  </van-tab>



  <van-tab title="全部时间" name="quanbu">
  
    <div style="width:100%;height:185px;background-color:white;margin-bottom:5px; margin-top:5px;" v-for="(item,index) in 4" :key="index">
  <van-row>
  <van-col span="8"><img style="width:100%;height:100%;margin-left:5px;" src="./img_yanchu/haibao4.png" alt=""></van-col>
  <van-col span="16">
  <div style="width:92%;height:100%;margin-left:15px;">
  <p style="font-size:17px;font-weight:600;">JJ 林俊杰《圣所2.0》世界巡回演唱会-重庆站 </p>
  <p style="color:#ccc;padding-top:20px; font-weight:600;">2019.11.2 19:30 周六 </p>
  <p style="color:#ccc;padding-top:5px;font-weight:600;">重庆 重庆市奥林匹克体育中心</p>
  <div style="padding-top:30px;">
  <van-tag round type="warning">售票中</van-tag><span>380-1680元</span>
  </div>
  </div>
  </van-col>
  </van-row>
  </div>
  
  
  
  </van-tab>
</van-tabs>

</div>





<dibu></dibu>






<br>
<br><br><br>
    </div>
</template>
<script>
import dibu from "./yanchu_dibu"
export default {
    data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '重庆', value: 0 },
        { text: '北京', value: 1 },
        { text: '上海', value: 2 }
      ]
    }
  },
    components:{
    dibu,
  }
}
</script>
<style scoped>
    .a10{
        width:100%;
        background-color:white;
        height:50px;
    }
     .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .a20{
      text-align:center;
      line-height:50px;
      
  }
  .a22{
      width:20px;
      margin-left:60px;
      margin-top:15px;
      
  }
  .a21{
      font-size: 18px;
      margin-left:20px;
  }
  .a31{
    width:100%;
    height:120px;
  }
  .a41{
    width:80%;
    height:80%;
    margin-left:5px;
    margin-top:5px;
  }
  .a42{
    margin-top:7px;
    font-size:13px;

  }
  .a43{
    width:50px;
    height:50px;
    background-color:#FBEBDD;
    border-radius:50%;

  }

  .a44{
        width:50px;
    height:50px;
    background-color:#E3E5FD;
    border-radius:50%;
  }
  .a45{
        width:50px;
    height:50px;
    background-color:#DCE9FD;
    border-radius:50%;
  }

  .a47{
    width:50px;
    height:50px;
    background-color:#FAE5E7;
    border-radius:50%;
  }


  .a51{
    width:83%;
    height:83%;
    margin-left:5px;
    margin-top:5px;
    border-radius:50%;
  }

  .a52{
    width:50px;
    height:50px;
    background-color:#def5f6;
    border-radius:50%;

  }
  .a60{
    width:90%;
    height:80px;
  }

  .a61{
     width:100%;
    height:100%;
    border-radius:50px/40px;
    margin-left:5%;
  }
.a70{
  width:100%;
  height:120px;

}
.a71{
  width:99%;
  height:100%;
  margin-left:5px;
}
.a72{
  width:98%;
  height:100%;
}



.a81{
  width:60px;
  height:60px;;
  border-radius:50%;
  margin-top:10px;

}
.a82{
  height:135px;
  background:#ccc;
  margin-left:5px;
  text-align:center;
}
.a83{
    height:135px;
  background:#ccc;
  margin-left:2px;
  text-align:center;
  margin-right:5px;
}

</style>