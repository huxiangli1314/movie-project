<template>
<div class="x" align="center">
    <div class="x10">    
        <a href="#/wode"><img src="./img_wode/cha.png"></a>
    </div>
    <div class="x1">
        <img src="./img_wode/mao.png">
        <h1>猫 眼</h1><br>
        <h2>全 新 影 视 人</h2>
    </div>
    <div class="x2">
        <mt-button plain type="danger" size="large">
            <img src="./img_wode/tao.png" height="20" width="20" slot="icon">手机淘宝登陆
        </mt-button>
        <div class="x21">
        <mt-button plain type="primary" size="large">
            <img src="./img_wode/zhi.png" height="20" width="20" slot="icon"> 支付宝登陆
        </mt-button>
        </div>
        <mt-button plain type="default" size="large">账户 / 密码登陆</mt-button><br>
    </div>


    <div style="height:50px;"></div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .x{ 
        width:100%; height:700px;
        background:#fff;
    }
    .x1{
        width:100%; height:300px;
    }
    .x10 img{
        width:30px; height:30px;
        margin:20px 0 0 85%;
    }
    .x1 img{
        margin:50px 0 10px;
        width:80px; height:80px;
        border-radius:20px;
    }
    .x1 h1{
        font:bold 30px SimHei;
    }
    .x2{
        width:90%; height:400px;
    }
    .x21{
        margin:30px 0;
    } 
    
</style>