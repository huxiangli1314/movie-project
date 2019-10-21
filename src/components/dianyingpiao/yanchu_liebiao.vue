<template>
    <div>
        

<div style="width:100%;height:60px;background-color:white;">
<van-row>
  <van-col span="8"> <div @click="fanhui"> <img style="width:25px;height:25px;margin-top:20px;" src="./img_yanchu/fanhui1.png" alt=""> </div> </van-col>
  <van-col span="16"><div><p style="margin-top:20px;font-size:18px;font-weight:600;">演出票务列表</p> </div></van-col>
</van-row>
</div>



<div class="a1" style="height:60px;width:100%;background-color:#ccc;position:absolute;">
<div style="height:60px;width:100%; position:relative; margin-top:8px;">
<van-cell-group>
  <van-field
    value="搜索明星  演出  场馆"
    left-icon="search"
  />
</van-cell-group>
</div>
</div>




<van-tabs v-model="activeName">
   <van-tab  title="全部" name="a"></van-tab>


  <van-tab  title="演唱会" name="b">
  <div class="a30">   
  <van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item> <img src="./img_yanchu/lun4.jpg" class="a31"/>   </van-swipe-item>
  <van-swipe-item><img src="./img_yanchu/lun5.jpg" class="a31"/> </van-swipe-item>
  <van-swipe-item><img src="./img_yanchu/lun6.jpg" class="a31"/> </van-swipe-item>
  <van-swipe-item><img src="./img_yanchu/lun7.jpg" class="a31"/> </van-swipe-item>
  </van-swipe>
  </div>

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


    <van-tab name="c" title="话剧歌剧">
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




    <van-tab name="d" title="休闲展览"></van-tab>
    <van-tab name="e" title="戏曲艺术"></van-tab>
    <van-tab name="f" title="音乐节"></van-tab>
    <van-tab name="g" title="亲子演出"></van-tab>
    <van-tab name="h" title="音乐会"></van-tab>
    <van-tab name="i" title="舞蹈芭蕾"></van-tab>
    <van-tab name="j" title="体育赛事"></van-tab>
    <van-tab name="k" title="其他"></van-tab>
</van-tabs>
























    </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'b'
    };
  },
  methods: {
      fanhui(){
          this.$router.push("/yanchu")
      }
  },
}
</script>

<style scoped>

  .a31{
    width:100%;
    height:120px;
  }
</style>