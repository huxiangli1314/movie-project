<template>
    <div class="container">
         <!-- 顶部栏 -->
       <div class="top_bar">
           <van-icon name="cross" corlor="#fff" size="24px" />
            <van-cell-group>
                 <van-field 
                    value="输入城市名或拼音"
                    left-icon="search "
                />
                </van-cell-group>
       </div>
       <div class="top_bar1">
           <span>当前城市:</span>
           <span>重庆</span>
       </div>
       <div class="list">
           <div class="list1">
               <yd-icon name="location" color="red" size="16px"></yd-icon>
               <span>重庆</span>
               <span>GPS定位</span>
           </div>
           <div class="list2">
               <p>最近访问城市</p>
               <van-button type="default" size="small" >重庆</van-button>
           </div>
           <div class="list3">
               <p>热门城市</p>
               <div class="list31">
               <van-button type="default" size="small" >重庆</van-button>
               <van-button type="default" size="small" >北京</van-button>
               <van-button type="default" size="small" >广州</van-button>
               <van-button type="default" size="small" >杭州</van-button>
               <van-button type="default" size="small" >成都</van-button>
               <van-button type="default" size="small" >天津</van-button>
               <van-button type="default" size="small" >上海</van-button>
               <van-button type="default" size="small" >南京</van-button>
               <van-button type="default" size="small" >武汉</van-button>
               </div>
           </div>
       </div>




    </div>
</template>
<script>
export default {
    
}
</script>
<style>
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
        padding-left: 15px;
    }
    .top_bar1{
        background-color: #fff;
        padding:15px;
    }
    .top_bar1 span:first-child{
        color:#585858;
    }
    .list{
        color:#585858;
        background-color: #fff;
        padding-left:10px;
    }
    .list1{
        margin-top:5px;
        padding:10px;
    }
    .list1 span:nth-child(2){
        font-weight: bold;
        font-size: 15px;
        color:#000;
    }
    .list2{
        padding:10px;
        padding-top: 0;
    }
    .list2>p{
        padding-bottom:8px;
    }
    .list3{
        padding:10px;
    }
    .list3>p{
        padding-bottom: 8px;
    }
    

</style>
