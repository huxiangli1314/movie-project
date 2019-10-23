<template>
    <div class="container">
         <!-- 顶部栏 -->
       <div class="top_bar">
           <van-icon name="cross" corlor="#fff" size="24px" @click="yingyuan"/>
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
           <div class="list4">
               <mt-index-list>
                    <mt-index-section index="A">
                    <mt-cell title="阿坝"></mt-cell>
                    <mt-cell title="阿城区 "></mt-cell>
                    <mt-cell title="阿客区"></mt-cell>
                </mt-index-section>
                  <mt-index-section index="B">
                    <mt-cell title="白城"></mt-cell>
                    <mt-cell title="百色"></mt-cell>
                    <mt-cell title="白山"></mt-cell>
                </mt-index-section>
                <mt-index-section index="C">
                    <mt-cell title="苍南"></mt-cell>
                    <mt-cell title="沧州"></mt-cell>
                    <mt-cell title="长春"></mt-cell>
                </mt-index-section>
              
                <mt-index-section index="D">
                    <mt-cell title="大理"></mt-cell>
                    <mt-cell title="大安市"></mt-cell>
                    <mt-cell title="大连"></mt-cell>

                </mt-index-section>
                </mt-index-list>

           </div>
       </div>




    </div>
</template>
<script>
export default {
    methods:{
        yingyuan(){
             this.$router.replace('/yingyuan')
        }
    }
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
    .van-button{
        margin-right: 8px;
        margin-bottom: 8px;
    }

</style>
