<template>
    <div>
        <div id="d1">
            <yd-button type="danger">重庆<van-icon name="arrow-down" /></yd-button>
            <yd-button type="danger">正在热映</yd-button>
            <yd-button type="danger">即将上映</yd-button>
            <yd-icon name="search" color="#fff" ></yd-icon>
        </div>
        <div id="d2">
            <a href="javascript">
                <van-icon name="chart-trending-o"/>
                实时票房
            </a>
            <a href="javascript">
                今日大盘<span>8204.2</span>
                <van-icon name="arrow" />
            </a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

#d1{
    background:#f95026; 
    padding:20px;
     display:flex;
    justify-content:space-between; 
    width:100%;
}
#d2{
    background:#eee;
    margin:4%;
    padding:2%;
    display:flex;
    justify-content:space-between; 
}
#d2 span{color:#fc0101}
</style>
