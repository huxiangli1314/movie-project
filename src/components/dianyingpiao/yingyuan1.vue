<template> 
    <div class="container">
        <div class="top_bar">
         <van-icon size="28px" color="#fff" name="arrow-left" />
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
    </div>
</template>

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
    }
    .title>.title-left p:first-child{
        font-size: 16px;
    }
    .title>.title-left p:last-child{
        font-size:12px;
        color:#585858;
    }
   .title>.title-right{
       display: flex;
       align-items: center;
   }
   .title>.title-right img:first-child{
       margin-right:15px;
   }
   
    </style>
