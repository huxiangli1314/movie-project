<template>
    <div style=" background:#fff;">
        <!-- 顶部导航栏 -->
        <van-sticky>
        <div id="navbar">
            <van-button color="#db403b">重庆<van-icon name="arrow-down" /></van-button>
            <van-button color="#db403b">正在热映</van-button>
            <van-button color="#db403b">即将上映</van-button>
            <van-button color="#db403b" style="padding:5px">
                <van-icon name="search" color="#fff" size="2em" />
            </van-button>
        </div>
        </van-sticky>
        <!-- 正在热映面板  开始-->
        <div>
            <!-- 一、票房 -->
            <!-- <van-list>
                    <van-cell> -->
            <div id="piaofang">
                <!-- <mt-header fixed></mt-header> -->
                <a href="javascript">
                    <van-icon name="chart-trending-o"/>
                    实时票房
                </a>
                <a href="javascript">
                    今日大盘<span>8204.2</span>
                    <van-icon name="arrow" />
                </a>
            </div>
                  <!-- </van-cell>
                </van-list> -->
            <!-- 二、电影列表 -->
            <div id="list" v-for="(item,i) in 4" :key="i">
                <van-list>
                    <van-cell>
                        <van-row>
                            <van-col span="6">
                                <div style="width:100%;height:100%;">
                                    <img  style="width:100%;height:100%;" src="./img_dianying/01.jpg" alt="">
                                </div>
                            </van-col>
                            <van-col span="18">
                                <div id="list_arr">
                                    <div>
                                        <span id="span">中国机长</span>
                                        <span><van-tag plain size="medium">2D IMAX</van-tag></span>
                                        <span> <van-tag size="medium">中国巨幕</van-tag></span>
                                    </div>
                                    <div>
                                        <span>猫眼评分</span>
                                        <span style="font-size:18px;color:#ff5722">9.4</span>
                                        <span style="margin-left:120px;">
                                            <van-button size="mini" round type="danger">购票</van-button>
                                        </span>
                                    </div>
                                    <p>主演：张涵予,欧豪,杜江</p>
                                    <p style="margin-top:5px;">今天238家影院放映3053场</p>
                                </div>
                            </van-col>
                                <div>
                                    
                                </div>
                        </van-row>
                    </van-cell>
                </van-list>
            </div>
        </div>
        <!-- 正在热映面板 结束 -->
        <!-- 即将上映面板 开始 -->
        <div></div>
        <!-- 即将上映面板结束 -->

        <br>  <br>  <br>  <br>  <br>  <br>  <br><br>  <br><br>  <br><br>  <br>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
/*导航栏*/
#navbar{
    background:#db403b; 
    padding:5px;
    display:flex;
    justify-content:space-between; 
    width:100%;

    
}
/*票房*/
#piaofang{
    background:#eee;
    margin:4%;
    padding:2%;
    display:flex;
    justify-content:space-between; 
}
#piaofang span{color:#fc0101}
/*电影列表*/
#list_arr{
     margin-left:20px;
}
#list_arr div{
    margin:5px 0;
}
#list_arr div #span{
    font-size:15px;
    font-weight:800;
}
</style>
