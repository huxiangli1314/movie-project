<template>
    <div style="background:#232742">
        <!-- 顶部导航栏 -->
        <div id="d1">
        <van-icon color="#fff" size="25px" name="arrow-left" />
        <span>电影</span>
        <img src="./img_dianying/fenxiang.png" alt="">
        </div>
        <!-- 电影图片 -->
        <div style="padding:10px;">
            <van-row>
                <van-col span="6">
                    <div>
                        <img  style="width:100%;height:100%" src="./img_dianying/01.jpg" alt="">
                    </div>
                </van-col>
                <van-col span="18">
                    <div style="margin-left:20px;">
                        <div>
                            <p class="b2">中国机长</p>
                            <p class="b3">The Captain</p>
                        </div>
                        <div style="margin:8px 0px;">
                            <span class="b3">剧情/传记</span>
                            <van-tag color="#6F7283" text-color="#eee">2D IMAX</van-tag>
                            <van-tag color="#6F7283" text-color="#eee">CGS 中国巨幕</van-tag>
                            <p class="b3">张韶涵/欧豪/杜江</p>
                            <p class="b3">2019-09-30 09:00大陆上映/111分钟</p>
                        </div>
                        <div>
                            <van-button class="b4" size="small" color="#515368">
                                <van-rate icon="like"  size="15px" void-icon="like-o" :count="1" color="#F2E803"/>
                                想看
                            </van-button>
                            <van-button class="b4" color="#515368">
                                 <van-rate  :count="1" color="#F2E803"/>
                                看过
                            </van-button>
                        </div>
                    </div>
                </van-col>
            </van-row>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods: {


    },
}
</script>
<style scoped>
#d1{
    display:flex;
    justify-content: space-between;
    padding:5px;
}
#d1 img{
    width:25px;
    height:25px;
}
#d1 span{
    color:#efe7e7;
    font-size:10px;
    margin-top:5px;
}
.b2{
    font-size: 15px;
    color:#efe7e7;
}
.b3{
    color:#A0A2AA
}
.b4{
    height:30px;
}
</style>
