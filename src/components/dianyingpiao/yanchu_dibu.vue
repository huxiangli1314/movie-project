<template >
    <div>
        

<div>
<van-tabbar
  v-model="active"
  active-color="#DD4D41"
  inactive-color="#000"
  size="600"
>
  <van-tabbar-item  icon="wap-home-o">首页</van-tabbar-item>
  <van-tabbar-item icon="video-o">电影</van-tabbar-item>
  <van-tabbar-item icon="description">影院</van-tabbar-item>
  <van-tabbar-item icon="hot-o">演出</van-tabbar-item>
  <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
</van-tabbar>
</div>



    </div>
</template>

<script>

export default {
  data() {
    return {
      active: 0,
      icon: {
        normal: './img_yanchu/gengduo.png',
        active: './img_yanchu/gengduo.png',
      }
    }
  },



}
</script>
<style scoped>
  .van-tabbar-item{
    font-size:18px;
  }

</style>
