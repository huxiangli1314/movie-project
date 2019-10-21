<template> 
    <div class="container">
        <div class="top_bar">
         <van-icon @click="gaibian1" size="28px" color="#fff" name="arrow-left" />
         <img src="./img_yingyuan/shuxian.png" alt="">
         <span>英皇电影城（新光天地....</span>
         <yd-icon name="star-outline" color="#fff" size="28px"></yd-icon>
         <yd-icon name="share3" color="#fff" size="25px"></yd-icon>
        </div>
        <div class="title">
            <div class="title-left">
                <p>英皇电影城（新光天地店）</p>
                <p>渝北区新排放红锦大道99号新光天地6F</p>
            </div>
            <div class="title-right">
                <img src="./img_yingyuan/xiangyoujiantou.png" alt="">
                <img src="./img_yingyuan/dingwei.png" alt="">
            </div>
        </div>  
        <!-- 按钮 -->
        <div class="btn">
            <div class="btn1">
                <div class="btn11">
                <p>观影套餐</p>
                <p>小吃、周边31.6元起</p>
                </div>
                 <img src="./img_yingyuan/yinlian1.png" alt="">
               
            </div>
            <div class="btn2">
                <div class="btn22">
                <p>折扣卡</p>
                <p>开卡首单2张立减6元</p>
                </div>
                 <img src="./img_yingyuan/youhuika.png" alt="">
               
            </div>
            </div>
            <!-- 轮播 -->
            <div class="lunbo">
                <van-swipe :loop="true" :width="130">
                 <van-swipe-item>
                     <img src="" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="./img_yingyuan/lunbo1.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="./img_yingyuan/lunbo2.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="./img_yingyuan/lunbo3.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="./img_yingyuan/lunbo4.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="./img_yingyuan/lunbo5.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="./img_yingyuan/lunbo6.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="./img_yingyuan/lunbo7.jpg" alt="">
                </van-swipe-item>
                 <van-swipe-item>
                     <img src="" alt="">
                </van-swipe-item>
                </van-swipe>
            </div>

            <!-- 电影场次 -->
            <div class="changci">
                <div class="changci1">
                <p>中国机长</p>
                <span>9.4</span>
                <span>分</span>
                </div>
                <p>111分钟|剧情|张涵予,欧豪,杜江</p>
            </div>
            <!-- 选项卡 -->
     <div class="xuanxiangka">
         <div>
             <span>今天10月20日</span>
             <img src="./img_yingyuan/hui.png" alt="">
         </div>
         <div>
             <span>明天10月21日</span>
             <img src="./img_yingyuan/hui.png" alt="">
         </div>
     </div>
     <div class="xuanxiangka_bar1">
         <img src="./img_yingyuan/huodong.png" alt="">
         <span>特惠观影</span>
         <span>1个活动</span>
         <img src="./img_yingyuan/xiangyoujiantou.png" alt="">
     </div>
     <div class="xuanxiangka_bar2">
         <img src="./img_yingyuan/zhekouka.png" alt="">
        <span>现在开卡，首单2张最高立减4元</span>
        <span>30元起开卡</span>
         <img src="./img_yingyuan/xiangyoujiantou.png" alt="">

     </div>
    <!-- 选项卡列表 -->
    <div class="xuanxiangka_list" v-for="item in 3" :key="item">
        <div class="xuanxiangka_list1">
            <p>13:55</p>
            <p>15:46散场</p>
        </div>
        <div class="xuanxiangka_list2">
            <p>国语2D</p>
            <p>8号激光厅(免费停车)</p>
        </div>
        <div class="xuanxiangka_list3">
            <P>35.4元</P>
            <img src="./img_yingyuan/zhekoushoudan.png" alt="">
        </div>
        <van-button  color="#fea104" plain size="mini">特惠</van-button>

    </div>





    </div>
</template>
<script>
export default {
     methods:{
         gaibian1(){
             this.$router.replace('/yingyuan')
         }
     }
}
</script>

<style scoped>
     .container>.top_bar{
        width:100%;
        height:50px;
        background-color:rgb(226,73,68);
         color:#fff;
        font-size:17px;
         display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
    }
    .top_bar>img{
        padding:0;
        margin-left:-13px;
    }
    .title{
        background:#fff;
        padding:10px;
        display: flex;
        justify-content: space-between;
        padding-bottom: 3px;
    }
    .title>.title-left p:first-child{
        font-size: 16px;
         font-weight: bold;
    }
    .title>.title-left p:last-child{
        font-size:12px;
        color:#585858;
        padding-top:2px;
    }
   .title>.title-right{
       display: flex;
       align-items: center;
   }
   .title>.title-right img:first-child{
       margin-right:15px;
   }
   /* 按钮样式 */
   .btn{
       display: flex;
       justify-content: space-between;
       padding-left: 15px;
       padding-right: 15px;
       padding-bottom: 10px;
       background-color:#fff;
   }
   .btn1,.btn2{
       display: flex;
       justify-content: space-around;
       align-items: center;
       margin-top:5px;
   }
    .btn1,.btn2{
       background-color:#e9734011;
       border-radius: 5px;
       padding:5px;
       padding-top:0;
   }
   .btn2{
       background-color:#ead0231c;
   }
  
   .btn1>img,.btn2>img{
       width:28px;height:29px;
   }

   .btn11 p:first-child,.btn22 p:first-child{
       font-size: 16px;
       color:#ea4900;
   }
   .btn22 p:first-child{
       color:#ea8800;
   }
   .btn11 p:last-child,.btn22 p:last-child{
       font-size: 13px;
       color:#ea4900ba;
   }
   .btn22 p:last-child{
       color:#ea8800cf;
   }
   .btn11,.btn22{
       padding-left: 5px;
       padding-right: 15px;
       padding-bottom: 5px;
       padding-top:10px;

   }
   /* 轮播样式 */
   .lunbo{
       height:120px;
       background-color:#8c6b57e8;
      display: flex;
      justify-content: space-around;
      align-items: center;
   }
   .lunbo img{
       width:120px;
       height:105px;
       border-radius: 5px;
   }
   /* 场次样式 */
   .changci{
       background-color: #fff;
       text-align: center;
       padding:10px;
       border-bottom: 1px solid #f5f5f5 ;
   }
   .changci p:first-child{
       font-size: 15px;
       font-weight: bold;
        padding-right: 10px;
   }
    .changci p:last-child{
       font-size: 13px;
       color:#585858;
      
   }
    .changci :nth-child(2),.changci :nth-child(3){
       color:#ea8800; 
   }
   .changci :nth-child(2){
       font-size: 14px;
   }
   .changci :nth-child(3){
       font-size: 12px;
   }
   .changci>.changci1{
       display: flex;
       justify-content: center;
   }
   /* 选项卡 */
   .xuanxiangka{
       display: flex;
       justify-content: left;
       align-items: center;
       font-size: 16px;
       padding:10px;
       background-color:#fff;
       border-bottom: 1px solid #f5f5f5 ;

   }
   .xuanxiangka div:first-child{
        margin-right:25px;
   }
   .xuanxiangka_bar1,.xuanxiangka_bar2{
       background-color:#fff;
       padding:10px;
       border-bottom: 1px solid #f5f5f5 ;
       display: flex;
       align-items: center;
       font-size: 13px;

   }

   .xuanxiangka_bar1>img,.xuanxiangka_bar2>img{
       width:50px;
       height:20px;
       margin-right:8px;
   }
   .xuanxiangka_bar1 span:nth-child(2),
    .xuanxiangka_bar2 span:nth-child(2)
   {
       color:#62bae2;
       padding-right:167px;
   }
   .xuanxiangka_bar2 span:nth-child(2){
       padding-right:20px;
       color:#fea104;
   }

    .xuanxiangka_bar1 span:nth-child(3),.xuanxiangka_bar2 span:nth-child(3){
       color:#585858;
       font-size: 10px;
   }
   .xuanxiangka_bar1 img:nth-child(4),.xuanxiangka_bar2 img:nth-child(4){
       width:14px;
       height:12px;
       margin-left:10px;
   }
/* 选项卡列表样式 */
.xuanxiangka_list{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:10px;
    background-color: #fff;
     border-bottom: 1px solid #f5f5f5 ;

}
.xuanxiangka_list1{
    margin-right: 10px;
}
.xuanxiangka_list1 p:first-child{
    font-size: 19px;
}
.xuanxiangka_list1 p:last-child{
    font-size: 11px;
    color:#585858;
}
.xuanxiangka_list2{
    margin-right: 10px;
}
.xuanxiangka_list2 p:first-child{
    font-size: 16px;
}
.xuanxiangka_list1 p:last-child{
    font-size: 11px;
    color:#585858;
}
.xuanxiangka_list3{
    margin-right: 10px;
}
.xuanxiangka_list3 p:first-child{
    text-align: right;
    font-size: 16px;
    color:rgb(226,73,68);
}
.xuanxiangka_list3>img{
   width:104px;
   height:16px;
}
    </style>
