<template>
    <div style="background:#232742">
        <!-- 顶部导航栏 -->
        <div id="d1">
        <van-icon color="#fff" size="25px" name="arrow-left" @click="d1"/>
        <span>电影</span>
        <img src="./img_dianying/fenxiang.png" alt="">
        </div>
        <!-- 电影图片 -->
        <div style="padding:10px;">
            <van-row>
                <van-col span="6">
                    <div>
                        <img  style="width:114%;height:100%" src="./img_dianying/01.jpg" alt="">
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
                            <van-button class="b4" color="#515368" size="small">
                                 <van-rate size="15px"  :count="1" color="#F2E803"/>
                                看过
                            </van-button>
                        </div>
                    </div>
                </van-col>
            </van-row>
        </div>
        <!-- 简介 -->
        <div>
            <div id="v1">
                <div style="font-size:15px;">简介:</div>
                <span>&emsp;&emsp;根据2018年5月14日四川航空3U8633航班机组成功处置特情真实事件改编，机组执行航班任务时，在万米高空突遇驾驶舱风挡玻璃爆裂脱落、座舱释压的极端罕见险情。机组成员凭借着极少仍在工作状态的仪器，艰难地进行手动驾驶。座舱释压发生时，乘务组立即执行释压处置程序，指导旅客使用氧气面罩，并训练有素地喊出：“请大家相信我们，相信我们有信心、有能力带领大家安全落地。”生死关头，英雄机组的正确处置，确保了机上全体人员的生命安全，创造了世界民航史上的奇迹</span>
            </div>
        </div>
        <!-- 演职人员 -->
        <div>
            <div class="yan">
                <span>演职人员</span>
                <span style="font-size:10px;">
                    全部46人
                    <van-icon name="arrow" />
                </span>
            </div>
            <div>
                <van-swipe :loop="false" :width="100"  indicator-color="#fff"  >
                    <van-swipe-item :width="100" >
                        <img class="img1" src="./img_dianying/daoyan.jpg" alt="">
                        <div class="v2">
                            <h4>刘伟强</h4>
                            <h6>导演</h6>
                        </div>
                    </van-swipe-item>

                    <van-swipe-item :width="100" >
                        <img class="img1" src="./img_dianying/zhang.jpg" alt="">
                        <div class="v2">
                            <h4>张涵予</h4>
                            <h6>饰：刘长建</h6>
                        </div>
                    </van-swipe-item>

                    <van-swipe-item :width="100" >
                        <img class="img1" src="./img_dianying/ohao.jpg" alt="">
                        <div class="v2">
                            <h4>欧豪</h4>
                            <h6>饰：徐奕辰</h6>
                        </div>
                    </van-swipe-item>

                    <van-swipe-item :width="100" >
                        <img class="img1" src="./img_dianying/dujiang.jpg" alt="">
                        <div class="v2">
                            <h4>杜江</h4>
                            <h6>饰：梁栋</h6>
                        </div>
                    </van-swipe-item>

                    <van-swipe-item :width="100" >
                        <img class="img1" src="./img_dianying/yuan.jpg" alt="">
                        <div class="v2">
                            <h4>袁泉</h4>
                            <h6>饰：毕男</h6>
                        </div>
                    </van-swipe-item>

                    <van-swipe-item :width="100" >
                        <img class="img1" src="./img_dianying/zhang0.jpg" alt="">
                        <div class="v2">
                            <h4>张天爱</h4>
                            <h6>饰：黄佳</h6>
                        </div>
                    </van-swipe-item>

                </van-swipe>
            </div>
        </div>
        <hr style="margin:20px 0px;">
        <!-- 精彩剧照 -->
        <div>
            <div class="yan">
                <span>精彩剧照</span>
                <span style="font-size:10px;">
                    全部476张
                    <van-icon name="arrow" />
                </span>
            </div>
            <div>
                <van-swipe :loop="false" :width="200"  indicator-color="#fff"  >
                    <van-swipe-item :width="200" >
                        <img class="img1" src="./img_dianying/ju1.jpg" alt="">
                    </van-swipe-item>

                    <van-swipe-item :width="200" >
                        <img class="img1" src="./img_dianying/ju2.jpg" alt="">
                    </van-swipe-item>

                    <van-swipe-item :width="200" >
                        <img class="img1" src="./img_dianying/ju4.jpg" alt="">
                    </van-swipe-item>

                    <van-swipe-item :width="200" >
                        <img class="img1" src="./img_dianying/ju5.jpg" alt="">
                    </van-swipe-item>

                    <van-swipe-item :width="200" >
                        <img class="img1" src="./img_dianying/ju6.jpg" alt="">
                    </van-swipe-item>

                    <van-swipe-item :width="200" >
                        <img class="img1" src="./img_dianying/ju7.jpg" alt="">
                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>
        <!-- 讨论 -->
        <div id="dao">
            <div style="padding:10px;">
                <div class="dao1">
                    <span style="font-size:15px;">讨论</span>
                    <van-button round type="danger" size="small">参与讨论</van-button>
                </div>
                <div style="padding:5px;">
                    <van-tag class="dao2" round plain>全部</van-tag>
                    <van-tag class="dao2" round plain>好评1144578</van-tag>
                    <van-tag class="dao2" round plain>点映7262</van-tag>
                    <van-tag class="dao2" round plain>购票123478</van-tag>
                    <van-tag class="dao2" round plain>认证作者 11</van-tag>
                    <van-tag class="dao2" round plain>同城2367</van-tag>
                </div>
                <hr style="margin:10px 0px;"> 
                <div>
                    <p style="color:#AFB3BA;font-size:15px;">精选</p>
                    <div style="margin:15px 0px;">
                        <van-row>
                            <van-col span="4">
                                <img class="img2" src="./img_dianying/touxiang.jpeg" alt="">
                            </van-col>
                            <van-col span="20">
                                <div>
                                    <span>AAAA杨嘉</span>
                                    <van-tag plain round type="primary" style="text-color:#eee;">LV5</van-tag>
                                    <van-tag plain type="primary">购票</van-tag>
                                </div>
                            </van-col>
                        </van-row>
                    </div>
                </div>
            </div>
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        d1(){
            this.$router.push({path:'/dianying'});
        }
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
#v1{
     color:#AFB3BA;
     padding:15px;
     line-height:1.5;
     background:#3e4156;
     margin:10px;
     border-radius:10px;
}
.img1{
    width:90%;
    margin-left:10px;
}
.v2{
     margin-left:10px;
     text-align:center;
     color:#797C8C
}
.yan{
    color:#797C8C;
    font-size:15px;
    display:flex;
    justify-content: space-between;
    padding:5px 10px;;
}
#dao{
    background-color:#fff ;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-top:20px;
}
.dao1{
        display:flex;
    justify-content: space-between;
}
.dao2{
    margin-right:10px;
    margin-top:5px;
}
.img2{
    width:100%;
    height:100%;
    border-radius:50%;
}
</style>
