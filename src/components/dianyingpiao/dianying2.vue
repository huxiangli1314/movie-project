<template >
    <div>
        <!-- 预告片推荐 -->
        <div>
             <van-sticky :offset-top="54">
                <div class="kuai">
                    <p>
                        预告片推荐
                    </p>
                </div>
            </van-sticky>
            <van-swipe :loop="false" :width="300"  >
                <van-swipe-item v-for="(item,i) in 5" :key="i" ><img class="img1" src="./img_dianying/222.jpg" ></van-swipe-item>
            </van-swipe>
        </div>
        <hr>
        <!-- 近期最受欢迎期待 -->
        <div>
            <van-sticky :offset-top="54">
                <div class="kuai">
                    <p>
                        近期最受欢迎期待
                    </p>
                </div>
            </van-sticky>
            <van-swipe :loop="false" :width="150" indicator-color="#fff">
                <van-swipe-item :width="150"  v-for="(item,i) in 10" :key="i" >
                    <img class="img1" src="./img_dianying/15.jpg" alt="">
                    <div style="margin-left:10px">
                        <p>诛仙</p>
                        <van-tag plain>11月1日</van-tag>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
        <hr>
        <!-- 影片 -->
        <div>
            <!-- 10.18.周五 -->
            <div v-for="(item,i) in 5" :key="i">
                <van-sticky :offset-top="54">
                    <div class="kuai">
                        <p>
                            10月18日 周五
                        </p>
                    </div>
                </van-sticky>
                <div id="list" >
                    <van-list>
                        <van-cell  v-for="(item,i) in 2" :key="i">
                            <van-row>
                                <van-col span="6">
                                    <div style="width:100%;height:100%;">
                                        <img  style="width:100%;height:100%;" src="./img_dianying/06.jpg" alt="">
                                    </div>
                                </van-col>
                                <van-col span="18">
                                    <div id="list_arr">
                                        <div>
                                            <span id="span">航海王：狂热行动</span>
                                            <span> <van-tag size="medium">中国巨幕</van-tag></span>
                                        </div>
                                        <div>
                                            <span style="font-size:18px;color:#ff5722">33.2万</span>
                                            <span>人想看</span>
                                            <span style="margin-left:100px;">
                                                <van-button size="mini" round type="info">预售</van-button>
                                            </span>
                                        </div>
                                        <p>类型：动画,冒险</p>
                                        <p style="margin-top:5px;">主演：田中真弓，冈村明美...</p>
                                    </div>
                                </van-col>
                            </van-row>
                        </van-cell>
                    </van-list>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
.kuai{
    background:#fff;
    height:35px;
}
.kuai p{
    font-size:15px;
    margin-left:15px; 
    line-height:2.5;
}
hr{
    border:none;
    border-top:10px solid #ccc;
    height:0;
    margin-top:10px;
}
.img1{
    width:90%;
    margin-left:10px;
}
</style>
