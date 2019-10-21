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
                <img src="./img_yingyuan/meituan.jpg">
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
      <div id="gongneng">
      <p>特色功能</p>

      <mt-button  size="small"  plain >全部</mt-button>
      <mt-button  size="small" plain>可改签</mt-button>
      <mt-button  size="small" plain >可退票</mt-button>
      <p>特效厅</p>
      <mt-button  size="small" plain>全部</mt-button>
      <mt-button  size="small" plain>lMAX厅</mt-button>
      <mt-button  size="small" plain >4D厅</mt-button>
      <mt-button  size="small" plain >儿童厅</mt-button>
      <mt-button  size="small" plain >巨幕厅</mt-button>
      </div>
      <div class="chongzhi">
    <mt-button size="small" plain>重置</mt-button>
      <mt-button size="small" type="danger" >完成</mt-button>
      </div>
   </van-dropdown-item>   
</van-dropdown-menu>

    <!-- 消息列表 -->
     <div @click="tiaozhuan" class="item-list" v-for="item in 4" :key="item">
        <div class="item-list-title">
            <p>英皇电影城(新光天地店)</p>
            <div class="price"><span>30.9</span><span>元</span><span>起</span></div>
        </div>
        <div class="item-list-title1">
            <p>渝北区新牌坊红锦大道99号新光天地6F</p>
            <span>0.5km</span>
        </div>
        <van-button color="#8BBBB0" plain size="mini">改签</van-button>
        <van-button color="#FD9800"  plain size="mini">小吃</van-button>
        <van-button color="#FD9800" plain size="mini">折扣卡</van-button>
        <div class="item-list-title2">
        <img src="./img_yingyuan/hui.png">
        <span>中国机长等三部影片特惠</span>
        </div>
         <div class="item-list-title2">
        <img src="./img_yingyuan/ka.png">
        <span>开卡特惠，首单2张最高立减6元</span>
        </div>

    </div> 
          
    </div>
</template>

<script>
 



export default {
    data() {
    return {
     ddd:"white",
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
  },
  methods:{
   tiaozhuan(){
        this.$router.replace('/yingyuan1')
   }
   
  },
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
   p{
        font-size: 16px;
        padding:10px;
        padding-bottom:0;
    }
    #gongneng{
        padding:10px;
    }
    .chongzhi{
        display: flex;
        justify-content: space-between;
        padding-left:10px;
         padding-right:10px;
          padding-bottom:10px;
    }
     .item-list{
        background-color:#fff;
        padding:8px;
        border-bottom: 1px solid #e8e8e8;
    }
    .item-list-title,.item-list-title1{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .item-list-title>p{
        font-size: 18px;
    }
     .item-list-title>.price>span:first-child{
         color:rgb(226,73,68);
         font-size: 16px;
     }
     .item-list-title>.price>span:nth-child(2){
         color:rgb(226,73,68);
     }

    
     .item-list-title1{
         color:#585858;
     } 
       .item-list-title1>p{
        font-size: 16px;
        padding-bottom: 5px;
    }
     .item-list-title2{
         display: flex;
         align-items: center;
         padding-top:5px;
          color:#585858;
     }
    .quanbu{
        width:100%;
        background-color: red !important;
        
    }
   
</style>

