<template>
    <div style="background:#73778E">
        <!-- 顶部导航栏 -->
        <div id="d1">
        <van-icon color="#fff" size="25px" name="arrow-left" />
        <span>电影</span>
        <img src="./img_dianying/fenxiang.png" alt="">
        </div>
        <!-- 电影图片 -->
        <div>
            <van-row>
                <van-col span="6">
                    <div>
                        <img  style="width:100%;height:100%" src="./img_dianying/01.jpg" alt="">
                    </div>
                </van-col>
                <van-col span="18">
                    <div>
                        <h3>中国机长</h3>
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
</style>
