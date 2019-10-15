<template>
    <div class="container">
        <!-- 顶部栏 -->
       <div class="top_bar">
           <a href="javascript:;">重庆<van-icon name="arrow-down" /></a>
           <span class="text">影院</span>
         <!-- <img src="./img_yingyuan/sousuo.png" > -->
         <van-icon name="search" size="24px" />
       </div>


       <!-- 轮播图 -->

        <yd-slider autoplay="3000" class="lb">
        <yd-slider-item>
            <a href="javascript:;">
                <img src="./img_yingyuan/wtzg.jpg">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="javascript:;">
                <img src="./img_yingyuan/dianying.jpg">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="javascript:;">
                <img src="./img_yingyuan/yinliao.jpg">
            </a>
        </yd-slider-item>

    </yd-slider>

<!-- 导航栏 -->
<van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" >
    <van-sidebar v-model="activeKey">
  <van-sidebar-item title="渝中区" />
  <van-sidebar-item title="渝北区" />
  <van-sidebar-item title="九龙坡区" />
</van-sidebar>
</van-dropdown-item>
  <van-dropdown-item v-model="value3" :options="option3" />
  <van-dropdown-item v-model="value4" :options="option4" >
      <p>特色功能</p>
      <mt-button>全部</mt-button>
   </van-dropdown-item>   
</van-dropdown-menu>



    <!-- 导航栏
    <mt-navbar v-model="selected">
  <mt-tab-item id="1">品牌</mt-tab-item>
  <mt-tab-item id="2">全城</mt-tab-item>
  <mt-tab-item id="3">距离近</mt-tab-item>
  <mt-tab-item id="4">筛选</mt-tab-item>
</mt-navbar>

<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
      <ul>
          <li>
              <a href="javascript:;">全部</a>
              <span>23</span>
              </li>
          <li>
              <a href="javascript:;">万达影城</a>
              <span>22</span>
              </li>
          <li>
              <a href="javascript:;">大地影院</a>
              <span>16</span>
              </li>
          <li>
              <a href="javascript:;">UME国际影城</a>
              <span>9</span>
              </li>
          <li>
              <a href="javascript:;">保利万和</a>
              <span>12</span>
              </li>

      </ul>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
  </mt-tab-container-item>
  <mt-tab-container-item id="4">
  </mt-tab-container-item>
</mt-tab-container> -->



    </div>
</template>

<script>
export default {
    data() {
    return {
     activeKey: 0,

      value1: 0,
      value2:0,
    value3:0,
    value4:0,
      option1: [
        { text: '品牌', value: 0},
        { text: '万达影城', value: 1 },
        { text: '大地影院', value: 2 },
        { text: 'UME国际影城', value: 3 }
      ],
      option2: [
        { text: '全城', value: 0},

      ],
      option3: [
        { text: '距离近', value:0 },
        { text: '价格低', value: 1 },
      ],
      option4: [
        { text: '筛选', value: 0},
        
      ]
    }
  }

    //    data(){
    //     return {
    //         selected:"",
    //     }
    // },
    // methods: {
    //    de(e){
    //        //事件对象中不能使用this 用e.target代替this
    //        this.selected=e.target.dataset.id
    //    }
    // },
}
</script>

<style scoped>
    .container>.top_bar{
        width:100%;
        height:50px;
        background-color:rgb(226,73,68);
        color:#fff;
        font-size:13px;
         display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }
    .container>.top_bar>.text{
        font-size:15px;
    }
    .container .lb{
        width:100%;
        height:100px;
    }
    .container .lb img{
        width:100%;
        height:100px;
    }
    .van-dropdown-item>p{
        font-size: 22px;
    }
    /* .mint-tab-container ul{
        background:#fff;
        border-top:1px solid #ccc;
    }
 .mint-tab-container ul>li{
     padding:10px;
     color:#666;
     display: flex;
     justify-content: space-between;
 }
 */


    
</style>
