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






    </div>
</template>
<script>
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
</style>