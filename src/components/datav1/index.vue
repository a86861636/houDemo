<template>
  <div id="data-view1" :class="{ bg1: path === '/demo1' || path === '/gdp', bg2: path === '/demo2' }">
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
          <div v-for="item in moduleList" :class="{ module: true, width100: item.width === '100%' }">
            <div class="title">
              {{ item.label }}
            </div>
            <component :is="item.com" :options="item.options"></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rankingBoard from './rankingBoard'
import roseChart from '../gdp/roseChart'
import waterLevelChart from './waterLevelChart'
import RightChart2 from '../datav2/RightChart2'
import TopMiddleCmp from '../datav3/TopMiddleCmp.vue'
import TopRightCmp from '../datav3/TopRightCmp'
import TopRightCmp1 from '../datav3/TopRightCmp1'
import TopRightCmp2 from '../datav3/TopRightCmp2'
import BottomLeftChart1 from '../datav3/BottomLeftChart1'
import TopLeftCmp from '../datav3/TopLeftCmp'
import compare from '../compare'
export default {
  name: 'DataView',
  components: {
    TopMiddleCmp,
    RightChart2,
    rankingBoard,
    roseChart,
    waterLevelChart,
    TopRightCmp,
    TopRightCmp1,
    TopRightCmp2,
    BottomLeftChart1,
    TopLeftCmp,
    compare
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
    username() {
      return this.$store.state.userInfo.username
    },
    moduleList() {
      return this.allData[this.type].module
    },
    typeLabel() {
      return this.allData[this.type].label
    },
    path() {
      return this.$route.path
    }
  },
  mounted() {
    if (!this.username) {
      this.$message({
        message: '请先登录',
        type: 'warning',
        showClose: true,
      })
      this.$router.push('/login')
    }
    const { path } = this.$route
    if (path === '/demo1' || path === '/gdp') {
      this.allData = {
        '1': {
          label: 'GDP指标',
          module: [
            {
              label: '经济总规模',
              com: 'water-level-chart'
            }, {
              label: '产业结构',
              com: 'rose-chart'
            }, {
              label: '历年GDP情况',
              com: 'TopRightCmp'
            }, {
              label: '工业GDP及增速',
              com: 'TopRightCmp'
            },
            //  {
            //   label: '历年GDP情况',
            //   com: 'compare',
            //   width: '100%'
            // }
          ]
        },
        '2': {
          label: 'GDP对比指标',
          module: [
            {
              label: '临汾市工业开发区GDP对比（万元 ）',
              com: 'TopRightCmp1'
            }, {
              label: '临汾市工业开发区GDP增速对比（% ）',
              com: 'TopRightCmp1'
            }, {
              label: '全省工业开发区GDO对比',
              com: 'TopRightCmp1'
            }, {
              label: '全省工业开发区GDO增速对比（%）',
              com: 'TopRightCmp1'
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
              com: 'BottomLeftChart1'
            }
          ]
        },
        '4': {
          label: '规上企业',
          module: [
            {
              label: '企业数量',
              com: 'rose-chart',
              type: '总体',
            }, {
              label: '企业类型',
              com: 'rose-chart',
              type: '总体',
            }, {
              label: '工业增加值（万元）',
              com: 'TopRightCmp1',
              type: '总体',
            }, {
              label: '工业总产值',
              com: 'TopRightCmp1',
              type: '总体',
            },
            {
              label: '2023工业增加值',
              com: 'TopRightCmp2'
            }, {
              label: '2023工业总产值（万元）',
              com: 'TopRightCmp2'
            }, {
              label: '2023工业增值增速（%）',
              com: 'TopRightCmp2'
            }, {
              label: '2023工业总产值增速（%）',
              com: 'TopRightCmp2'
            }
          ]
        },
        '5': {
          label: 'N年经济目标',
          module: [
            {
              label: '经济增长目标完成情况',
              com: 'water-level-chart'
            }, {
              label: '企业数量目标/规上增速目标',
              com: 'rose-chart'
            }, {
              label: '招商目标完成',
              com: 'TopMiddleCmp'
            }, {
              label: '龙头企业经营情况',
              com: 'BottomLeftChart1'
            }
          ]
        }
      }
    } else if (path === '/demo2') {
      this.allData = {
        '1': {
          label: '项目概况',
          module: [
            {
              label: '项目总投资额',
              com: 'BottomLeftChart1'
            }, {
              label: '项目数量',
              com: 'TopLeftCmp'
            }, {
              label: '项目类别',
              com: 'TopRightCmp'
            }
          ]
        },
        '2': {
          label: '年度情况',
          module: [
            {
              label: '本年度建设目标',
              com: 'BottomLeftChart1'
            }, {
              label: '年度目标进度',
              com: 'TopLeftCmp'
            }, {
              label: '分项目年度进度',
              com: 'TopRightCmp'
            }
          ]
        },
        '3': {
          label: '分产业项目',
          module: [
            {
              label: '一产项目规模',
              com: 'BottomLeftChart1'
            }, {
              label: '二产项目规模',
              com: 'TopLeftCmp'
            }, {
              label: '三产项目规模',
              com: 'TopRightCmp'
            }
          ]
        },
        '4': {
          label: '产业链项目',
          module: [
            {
              label: '汽车零部件',
              com: 'BottomLeftChart1'
            }, {
              label: '金属新材料',
              com: 'TopLeftCmp'
            }, {
              label: '石油钻具',
              com: 'TopRightCmp'
            }, {
              label: '生物医药',
              com: 'water-level-chart'
            }
          ]
        },
        '5': {
          label: '项目建设进度',
          module: [
            {
              label: '项目概要',
              com: 'BottomLeftChart1'
            }, {
              label: '地理位置',
              com: 'TopLeftCmp'
            }, {
              label: '项目性质',
              com: 'TopRightCmp'
            }, {
              label: '总投资及累计完成投资',
              com: 'water-level-chart'
            }, {
              label: '项目建设阶段',
              com: 'rose-chart'
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
  margin-bottom: 2.5vh;
}

#data-view1 {
  height: 100%;
  width: 100%;
  background-color: #030409;
  color: #fff;
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

.bg1 {
  background-image: url('./img/bg.png');
}

.bg2 {
  background-image: url('./img/bg3.png');
}

.width100 {
  width: 98%;
}</style>
