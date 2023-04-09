<template>
    <div class="intro">
        <div class="main-header">
            <div class="mh-left">
                <dv-border-box-8 class="button">
                    发展历程
                </dv-border-box-8>
                <dv-border-box-8 class="button">
                    经济概况
                </dv-border-box-8>
                <dv-border-box-8 class="button">
                    特色优势
                </dv-border-box-8>
            </div>
            <a href="http://localhost:8080/#/demo1" class="mh-middle">开发区介绍</a>
            <div class="mh-right">
                <dv-border-box-8 class="button">
                    园区概况
                </dv-border-box-8>
                <dv-border-box-8 class="button">
                    重点企业介绍
                </dv-border-box-8>
            </div>
        </div>
        <div class="content">
            <dv-border-Box-1 class="box">
                <img class="map" src="../assets/img/map.jpg" />
            </dv-border-Box-1>
            <div class="chart">
                <cards style="height: 50%; " />
                <dv-border-box-3 style="height: 40%; margin-top: 10%;">
                    <RightChart1 />
                </dv-border-box-3>
            </div>
        </div>
    </div>
</template>
  
<script>

import cards from '../components/intro/cards'
import RightChart1 from '../components/intro/RightChart1'
export default {
    name: 'app',
    components: {
        cards,
        RightChart1
    },
    data() {
        return {}
    }
}
</script>
  
<style lang="less" scoped>
.intro {
    background: rgb(4, 10, 22);
    display: flex;
    flex-direction: column;
    flex: 1;
}

.main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: white;

    .mh-middle {
        font-size: 30px;
        line-height: 80px;
    }

    .mh-left,
    .mh-right {
        width: 450px;
        padding-bottom: 15px;
        display: flex;
    }

    .button {
        width: 120px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin-left: 10px;
        cursor: pointer;
    }
}

.box {
    width: 75%;
    height: 100%;
    display: flex;
}

.map {
    width: 96%;
    height: 96%;
    display: block;
    margin: 1.5% 0 0 2%;
}

.content {
    flex: 1;
    display: flex;
    flex-direction: row;
}

.chart {
    flex: 1;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
}
</style>
  