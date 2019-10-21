<template>
    <div style=" background:#fff;">
        <!-- 顶部导航栏 -->
        <van-sticky>
        <div id="navbar">
            <van-button color="#db403b">重庆<van-icon name="arrow-down" /></van-button>
            <van-button color="#db403b" id="c1"  @click="tab1" text="正在热映"></van-button>
            <van-button color="#db403b" id="c2" @click="tab2" text="即将上映"></van-button>
            <van-button color="#db403b" style="padding:5px">
                <van-icon name="search" color="#fff" size="2em" />
            </van-button>
        </div>
        </van-sticky>
        <!-- 下拉刷新 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <!-- 正在热映面板-->
        <dianying1 id="a1"></dianying1>
        <!-- 即将上映面板 开始 -->
       <dianying2 id="a2" style="display:none"></dianying2>



       
        <br>  <br>  <br>  <br>  <br>  <br>  <br><br>  <br><br>  <br><br>  <br>
        </van-pull-refresh>
    </div>
</template>
<script>
import dianying1 from "./dianying1"
import dianying2 from "./dianying2"
export default {
    data(){
        return{
          isLoading: false
        }
    },
    methods:{
        tab1(){
            var a1=document.getElementById("a1");
            var a2=document.getElementById("a2");
            var c1=document.getElementById("c1");
            var c2=document.getElementById("c2");
            // c1.style="color:#d6221d"
            a1.style="display:block;";
            a2.style="display:none";

        },
        tab2(){
            var a1=document.getElementById("a1");
            var a2=document.getElementById("a2");
            var c1=document.getElementById("c1");
            var c2=document.getElementById("c2");
            // c1.style="color:#db403b";
            // c2.style="color:#d6221d"
            a1.style="display:none";
            a2.style="display:block";

        },
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
                this.count++;
            }, 500);
        }
    },
    components:{
        dianying1,
        dianying2,
    }
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

</style>


