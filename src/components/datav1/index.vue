<template>
  <div id="data-view1">
    <div class="main-header">
      <div class="mh-left">
      </div>
      <a class="mh-middle">{{ typeLabel }}</a>
      <div class="mh-right">
      </div>
    </div>

    <div class="main-content">
      <div class="block-left-right-content">
        <ranking-board />
        <div class="block-top-bottom-content">
          <div class="module" v-for="item in moduleList">
            <div class="title">
              {{ item.label }}
            </div>
            <component :is="item.com"></component>
          </div>
        </div>
      </div>
    </div>
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
import RightChart2 from '../datav2/RightChart2'
import TopMiddleCmp from '../datav3/TopMiddleCmp.vue'
export default {
  name: 'DataView',
  components: {
    TopMiddleCmp,
    RightChart2,
    topHeader,
    digitalFlop,
    rankingBoard,
    roseChart,
    waterLevelChart,
    scrollBoard,
    cards
  },
  data() {
    return {
      type: '1',
      allData: {
        '1': {
          label: '',
          module: []
        }
      }
    }
  },
  computed: {
    moduleList() {
      return this.allData[this.type].module
    },
    typeLabel() {
      return this.allData[this.type].label
    }
  },
  mounted() {
    const { path } = this.$route
    if (path === '/demo1') {
      this.allData = {
        '1': {
          label: 'GDP指标',
          module: [
            {
              label: '指标总量',
              com: 'water-level-chart'
            }, {
              label: '同比增速',
              com: 'rose-chart'
            }, {
              label: '同比增速',
              com: 'TopMiddleCmp'
            }
          ]
        },
        '2': {
          label: 'GDP对比指标',
          module: [
            {
              label: '临汾开发区排序',
              com: 'water-level-chart'
            }, {
              label: '全省开发区排序',
              com: 'rose-chart'
            }, {
              label: '全省开发区增速排序',
              com: 'TopMiddleCmp'
            }
          ]
        },
        '3': {
          label: '产业结构',
          module: [
            {
              label: '三产结构',
              com: 'water-level-chart'
            }, {
              label: '三产结构增速',
              com: 'rose-chart'
            }, {
              label: '产业优势',
              com: 'TopMiddleCmp'
            }, {
              label: '政策优势',
              com: 'TopMiddleCmp'
            }
          ]
        },
        '4': {
          label: '规上企业',
          module: [
            {
              label: '企业数量及增速',
              com: 'water-level-chart'
            }, {
              label: '产业规模',
              com: 'rose-chart'
            }, {
              label: '产业结构占比',
              com: 'TopMiddleCmp'
            }, {
              label: '战略新兴产业',
              com: 'TopMiddleCmp'
            }
          ]
        },
        '5': {
          label: 'N年经济目标',
          module: [
            {
              label: '目标完成情况',
              com: 'water-level-chart'
            }, {
              label: '招商目标完成',
              com: 'rose-chart'
            }, {
              label: '龙头企业经营情况',
              com: 'TopMiddleCmp'
            }
          ]
        }
      }
    }else if(path === '/demo2') {
      this.allData = {
        '1': {
          label: '项目概况',
          module: [
            {
              label: '项目总投资额',
              com: 'water-level-chart'
            }, {
              label: '项目数量',
              com: 'rose-chart'
            }, {
              label: '项目类别',
              com: 'TopMiddleCmp'
            }
          ]
        },
        '2': {
          label: '年度情况',
          module: [
            {
              label: '本年度建设目标',
              com: 'water-level-chart'
            }, {
              label: '年度目标进度',
              com: 'rose-chart'
            }, {
              label: '分项目年度进度',
              com: 'TopMiddleCmp'
            }
          ]
        },
        '3': {
          label: '分产业项目',
          module: [
            {
              label: '一产项目规模',
              com: 'water-level-chart'
            }, {
              label: '二产项目规模',
              com: 'rose-chart'
            }, {
              label: '三产项目规模',
              com: 'TopMiddleCmp'
            }
          ]
        },
        '4': {
          label: '产业链项目',
          module: [
            {
              label: '汽车零部件',
              com: 'water-level-chart'
            }, {
              label: '金属新材料',
              com: 'rose-chart'
            }, {
              label: '石油钻具',
              com: 'TopMiddleCmp'
            }, {
              label: '生物医药',
              com: 'TopMiddleCmp'
            }
          ]
        },
        '5': {
          label: '项目建设进度',
          module: [
            {
              label: '项目概要',
              com: 'water-level-chart'
            }, {
              label: '地理位置',
              com: 'rose-chart'
            }, {
              label: '项目性质',
              com: 'TopMiddleCmp'
            }, {
              label: '总投资及累计完成投资',
              com: 'TopMiddleCmp'
            }, {
              label: '项目建设阶段',
              com: 'TopMiddleCmp'
            }, {
              label: '项目建设预警',
              com: 'TopMiddleCmp'
            }
          ]
        }
      }
    }
  },
  watch: {
    '$route.query'(val) {
      this.type = val.type
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  margin: 0px 0 10px 0;
}

.module {
  height: 42vh;
  width: 48%;
  margin-right: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#data-view1 {
  height: 100%;
  width: 100%;
  background-color: #030409;
  color: #fff;
  background-image: url('./img/bg.png');
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;


  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  .block-left-right-content {
    flex: 1;
    display: flex;
    margin-top: 20px;
  }

  .block-top-bottom-content {
    flex: 1;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding-left: 20px;
    flex-wrap: wrap;
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
      height: 50px;
      line-height: 50px;
      text-align: center;
      margin-left: 10px;
      cursor: pointer;
      white-space: nowrap;
    }
  }
}
</style>
