<template>
<div id="x">
    <div id="x1">
        <van-row>
        <van-col span="17"> 
            <div id="x1_1">
            <img src="./img_wode/mm.png" alt="头像"> 
            <a href="#/wode_login">立即登陆</a>
            </div>
        </van-col>

        <van-col span="7"> 
            <div id="x1_2">
                <img src="./img_wode/xx.png" alt="消息">
                <img src="./img_wode/sz.png" alt="设置">        
            </div>
        </van-col>
        </van-row>
    </div>
    

    <div>
        <van-notice-bar
        text="通知内容12332321231nmcbvz,bv121123123121231231231231232311212213"
        left-icon="./img_wode/vip.npg"  id="x2_0"
        />
        </van-notice-bar>
    </div>

    <br>

    <div id="x2">
        <van-grid id="x2_1" :border="false" :column-num="3">
            <van-grid-item>
                <img src="./img_wode/dy.png" alt="">
                电影
            </van-grid-item>
            <van-grid-item>
                <img src="./img_wode/xs.png" alt="">
                小食
            </van-grid-item>
            <van-grid-item>
                <img src="./img_wode/ycp.png" alt="">
                演出票
            </van-grid-item>
        </van-grid>
    </div>
        <br>
    <div id="x3">
        <van-panel id="x3_1" title="我的优惠" desc="" status="">
        <div>
            <van-grid :border="false" :column-num="3">
            <van-grid-item>
                <img src="./img_wode/yhq.png" alt="">
                优惠券
            </van-grid-item>
            <van-grid-item>
                <img src="./img_wode/vip.png" alt="">
                权益卡
            </van-grid-item>
            <van-grid-item>
                <img src="./img_wode/lyk.png" alt="">
                乐影卡
            </van-grid-item>
            </van-grid>
        </div>
        </van-panel>
    </div>
        <br>
    <div id="x4">
        <van-panel id="x4_1" title="我的记录" desc="" status="">
        <div>
            <van-grid :border="false" :column-num="2">
            <van-grid-item>
                <img src="./img_wode/xk.png" alt="">
                想看
            </van-grid-item>
            <van-grid-item>
                <img src="./img_wode/kg.png" alt="">
                看过
            </van-grid-item>
            </van-grid>
        </div>
        </van-panel>
    </div>
        <br>
    <div id="x5">
        <van-panel id="x5_1" title="我的服务" desc="" status="">
        <div>        
            <van-grid :border="false" :column-num="4">
            <van-grid-item>
                <img src="./img_wode/jc.png" alt="">
                影票检查
            </van-grid-item>
            <van-grid-item>
                <img src="./img_wode/xjc.png" alt="">
                我的小聚场
            </van-grid-item>
            <van-grid-item>
                <img src="./img_wode/tl.png" alt="">
                发起的讨论
            </van-grid-item>
            <van-grid-item>
                <img src="./img_wode/sc.png" alt="">
                我的收藏
            </van-grid-item>
            <van-grid-item>
                <img src="./img_wode/bfjl.png" alt="">
                播放记录
            </van-grid-item>
            <van-grid-item>
                <img src="./img_wode/yhk.png" alt="">
                银行特惠
            </van-grid-item>
            <van-grid-item>
                <img src="./img_wode/aly.png" alt="">
                阿里鱼众筹
            </van-grid-item>
            <van-grid-item>
                <img src="./img_wode/ylb.png" alt="">
                娱乐宝
            </van-grid-item>
            <van-grid-item>
                <img src="./img_wode/gy.png" alt="">
                3小时公益
            </van-grid-item>
            <van-grid-item>
                <img src="./img_wode/kf.png" alt="">
                我的客服
            </van-grid-item>
            <van-grid-item>
                <img src="./img_wode/dc.png" alt="">
                满意度调查
            </van-grid-item>
            </van-grid>
        </div>
        </van-panel>
    </div>

    <div style="w:100%; height:100px;"></div>

</div>
</template>


<style scoped>
    #x{ 
        width:100%;
    }
    #x1{ 
        background:#e1251b;
        height:250px;
        line-height:60px;
    }
    #x1_1{ 
        margin-top:50px;
        margin-left:40px
    }
    #x1_1>img{ 
        width:90px;height:90px;
        border-radius:50%;
        border:3px solid #fff;
    }
    #x1_1>a{ 
        color:#fff;
        font:30px 圆体;
    }
    #x1_2>img{
        width:30px;height:30px;
        margin-left:15px;
        margin-top:60px;
    }#x2_0{
        padding:5px;
        width:90%; height:80px;
        margin:-40px auto 0;
        font-size:18px;
    }
    #x2_1,#x3_1,#x4_1,#x5_1{
        width:90%;
        margin:0 auto;
    }
    #x2 img{
        width:40px; height:40px;
    }
    #x3 img{
        width:30px; height:30px;
    }
    #x4 img{
        width:50px; height:60px;
    }
    #x5 img{
        width:20px; height:20px;
    }
    
</style>


<script>
    export default {

    }
</script>