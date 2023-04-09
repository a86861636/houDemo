<template>
  <div id="data-view1">
    <dv-full-screen-container>


      <div class="main-header">
        <div class="mh-left">
          <dv-border-box-8 class="button">
            指标总量
          </dv-border-box-8>
          <dv-border-box-8 class="button">
            同比增速
          </dv-border-box-8>
          <dv-border-box-8 class="button">
            环比增速
          </dv-border-box-8>
        </div>
        <a href="http://localhost:8080/#/demo1" class="mh-middle">Demo-机电运维管理台</a>
        <div class="mh-right">
        </div>
      </div>

      <div class="main-content">
        <digital-flop />

        <div class="block-left-right-content">
          <ranking-board />

          <div class="block-top-bottom-content">
            <div class="block-top-content">
              <rose-chart />

              <water-level-chart />

              <scroll-board />
            </div>

            <cards />
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import topHeader from './topHeader'
import digitalFlop from './digitalFlop'
import rankingBoard from './rankingBoard'
import roseChart from './roseChart'
import waterLevelChart from './waterLevelChart'
import scrollBoard from './scrollBoard'
import cards from './cards'

export default {
  name: 'DataView',
  components: {
    topHeader,
    digitalFlop,
    rankingBoard,
    roseChart,
    waterLevelChart,
    scrollBoard,
    cards
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
#data-view1 {
  width: 100%;
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

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .block-left-right-content {
    flex: 1;
    display: flex;
    margin-top: 20px;
  }

  .block-top-bottom-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 20px;
  }

  .block-top-content {
    height: 55%;
    display: flex;
    flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 20px;
  }

  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

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
}
</style>
