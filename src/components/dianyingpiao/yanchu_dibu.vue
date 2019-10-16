<template >
    <div>
        
<van-tabbar v-model="active">
  <van-tabbar-item info="2">
    <span>111</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
    >
  </van-tabbar-item>
  <van-tabbar-item icon="search">   <span>111</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
    ></van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
   <van-tabbar-item icon="setting-o">标签</van-tabbar-item> 
</van-tabbar>







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
  }


}
</script>
