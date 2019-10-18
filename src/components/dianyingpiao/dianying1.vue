<template>
    <div>
        <div id="c1">
            <!-- 一、票房 -->
            <div id="piaofang">
                <a href="javascript">
                    <van-icon name="chart-trending-o"/>
                    实时票房
                </a>
                <a href="javascript">
                    今日大盘<span>8204.2</span>
                    <van-icon name="arrow" />
                </a>
            </div>
            <!-- 二、电影列表 -->
            <div id="list" >
                <van-list>
                    <van-cell  v-for="(item,i) in 20" :key="i">
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
                        </van-row>
                    </van-cell>
                </van-list>
            </div>
        </div>
    </div>
</template>

<style scoped>

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
