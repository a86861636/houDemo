<template>
  <div id="data-view2">
    <dv-full-screen-container>
      <div class="main-header">
        <div class="mh-left" v-if="type == 1">
          <dv-border-box-8 class="button">
            项目总投资额
          </dv-border-box-8>
          <dv-border-box-8 class="button">
            项目数量
          </dv-border-box-8>
          <dv-border-box-8 class="button">
            项目类别
          </dv-border-box-8>
        </div>
        <div class="mh-left" v-if="type == 2">
          <dv-border-box-8 class="button">
            本年度建设目标
          </dv-border-box-8>
          <dv-border-box-8 class="button">
            年度目标进度
          </dv-border-box-8>
          <dv-border-box-8 class="button">
            分项目年度进度
          </dv-border-box-8>
        </div>
        <div class="mh-left" v-if="type == 3">
          <dv-border-box-8 class="button">
            一产项目规模
          </dv-border-box-8>
          <dv-border-box-8 class="button">
            二产项目规模
          </dv-border-box-8>
          <dv-border-box-8 class="button">
            三产项目规模
          </dv-border-box-8>
        </div>
        <div class="mh-left" v-if="type == 4">
          <dv-border-box-8 class="button">
            汽车零部件
          </dv-border-box-8>
          <dv-border-box-8 class="button">
            金属新材料
          </dv-border-box-8>
          <dv-border-box-8 class="button">
            石油钻具
          </dv-border-box-8>
          <dv-border-box-8 class="button">
            生物医药
          </dv-border-box-8>
        </div>
        <div class="mh-left" v-if="type == 5">
          <dv-border-box-8 class="button">
            项目概要
          </dv-border-box-8>
          <dv-border-box-8 class="button">
            地理位置
          </dv-border-box-8>
          <dv-border-box-8 class="button">
            项目性质
          </dv-border-box-8>
        </div>
        <a class="mh-middle" v-if="type == 1">项目概况</a>
        <a class="mh-middle" v-if="type == 2">年度情况</a>
        <a class="mh-middle" v-if="type == 3">分产业项目</a>
        <a class="mh-middle" v-if="type == 4">产业链项目</a>
        <a class="mh-middle" v-if="type == 5">项目建设进度</a>
        <div class="mh-right">
          <dv-border-box-8 class="button" v-if="type == 5">
            总投资
          </dv-border-box-8>
          <dv-border-box-8 class="button" v-if="type == 5">
            项目建设
          </dv-border-box-8>
          <dv-border-box-8 class="button" v-if="type == 5">
            建设预警
          </dv-border-box-8>
        </div>
      </div>

      <dv-border-box-1 class="main-container">
        <dv-border-box-3 class="left-chart-container">

          <Left-Chart-1 />
          <Left-Chart-2 />
          <Left-Chart-3 />

        </dv-border-box-3>

        <div class="right-main-container">
          <div class="rmc-top-container">
            <dv-border-box-3 class="rmctc-left-container">

              <Center-Cmp />

            </dv-border-box-3>

            <div class="rmctc-right-container">
              <dv-border-box-3 class="rmctc-chart-1">

                <Right-Chart-1 />

              </dv-border-box-3>

              <dv-border-box-4 class="rmctc-chart-2" :reverse="true">

                <Right-Chart-2 />

              </dv-border-box-4>
            </div>
          </div>

          <dv-border-box-4 class="rmc-bottom-container">

            <Bottom-Charts />

          </dv-border-box-4>
        </div>
      </dv-border-box-1>

    </dv-full-screen-container>
  </div>
</template>

<script>
import LeftChart1 from './LeftChart1'
import LeftChart2 from './LeftChart2'
import LeftChart3 from './LeftChart3'

import CenterCmp from './CenterCmp'

import RightChart1 from './RightChart1'
import RightChart2 from './RightChart2'

import BottomCharts from './BottomCharts'

export default {
  name: 'DataView',
  components: {
    LeftChart1,
    LeftChart2,
    LeftChart3,
    CenterCmp,
    RightChart1,
    RightChart2,
    BottomCharts
  },
  data() {
    return {
      type: '1'
    }
  },
  watch: {
    '$route.query'(val) {
      this.type = val.type
    }
  }
}
</script>

<style lang="less">
#data-view2 {
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('./img/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .mh-left {
      font-size: 20px;
      color: rgb(1, 134, 187);

      a:visited {
        color: rgb(1, 134, 187);
      }
    }

    .mh-middle {
      font-size: 30px;
      line-height: 80px;
    }

    .mh-left,
    .mh-right {
      width: 450px;
      padding-bottom: 15px;
      display: flex;
      color: white;
    }

    .button {
      height: 50px;
      line-height: 50px;
      text-align: center;
      margin-left: 10px;
      cursor: pointer;
      white-space: nowrap;
    }
  }

  .main-container {
    height: calc(~"100% - 80px");

    .border-box-content {
      padding: 20px;
      box-sizing: border-box;
      display: flex;
    }
  }

  .left-chart-container {
    width: 22%;
    padding: 10px;
    box-sizing: border-box;

    .border-box-content {
      flex-direction: column;
    }
  }

  .right-main-container {
    width: 78%;
    padding-left: 5px;
    box-sizing: border-box;
  }

  .rmc-top-container {
    height: 65%;
    display: flex;
  }

  .rmctc-left-container {
    width: 65%;
  }

  .rmctc-right-container {
    width: 35%;
  }

  .rmc-bottom-container {
    height: 35%;
  }

  .rmctc-chart-1,
  .rmctc-chart-2 {
    height: 50%;
  }
}
</style>
