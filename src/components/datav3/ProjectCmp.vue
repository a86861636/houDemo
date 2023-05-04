<template>
  <div class="top-middle-cmp">
    <div class="box">
      <div class="chart-name">
        月项目进度
        <dv-decoration-3 style="width:200px;height:20px;" />
      </div>
      <dv-charts :option="option" />
      <el-date-picker class="picker" size="mini" v-model="value1" type="daterange" range-separator="至"
        start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>
    </div>
    <div class="box">
      <div class="chart-name">
        月度投资进展情况
        <dv-decoration-3 style="width:200px;height:20px;" />
      </div>
      <dv-charts :option="option1" />
      <el-date-picker class="picker" size="mini" v-model="value1" type="daterange" range-separator="至"
        start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopMiddleCmp',
  props: {
    options: {
      default: () => {
        return {
          num: 10
        }
      }
    }
  },
  data() {
    return {
      value1: '',
      option: {
        legend: {
          data: ['进度'],
          textStyle: {
            fill: '#fff'
          }
        },
        xAxis: {
          data: [
            '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',
          ],
          boundaryGap: false,
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          data: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            },
            formatter({ value }) {
              return value.toFixed(2)
            }
          },
          axisTick: {
            show: false
          },
          min: 0,
          max: 100,
          interval: 20
        },
        series: [
          {
            data: this.getRandom(),
            type: 'line',
            name: '设备完好率',
            smooth: true,
            lineArea: {
              show: true,
              gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#00db95'
              }
            }
          }
        ]
      },
      option1: {
        legend: {
          data: ['投资'],
          textStyle: {
            fill: '#fff'
          }
        },
        xAxis: {
          data: [
            '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',
          ],
          boundaryGap: false,
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          data: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            },
            formatter({ value }) {
              return value.toFixed(2)
            }
          },
          axisTick: {
            show: false
          },
          min: 0,
          max: 100,
          interval: 20
        },
        series: [
          {
            data: this.getRandom1(),
            type: 'line',
            name: '设备完好率',
            smooth: true,
            lineArea: {
              show: true,
              gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#00db95'
              }
            }
          }
        ]
      }
    }
  },
  watch: {
    '$route'() {
      this.option.series[0].data = this.getRandom()
      this.option = { ...this.option }
      this.option1.series[0].data = this.getRandom1()
      this.option1 = { ...this.option1 }
    }
  },
  methods: {
    getRandom() {
      return [
        Math.random() * 10, Math.random() * 10 + 20, Math.random() * 10 + 30, Math.random() * 10 + 40,
        Math.random() * 10 + 50, Math.random() * 10 + 60, Math.random() * 10 + 70, Math.random() * 10 + 80,
        Math.random() * 3 + 90, Math.random() * 3 + 93, Math.random() * 3 + 96, Math.random() * 2 + 98,
      ]
    },
    getRandom1() {
      return [
        Math.random() * 90 + 10, Math.random() * 90 + 10, Math.random() * 90 + 10, Math.random() * 90 + 10,
        Math.random() * 90 + 10, Math.random() * 90 + 10, Math.random() * 90 + 10, Math.random() * 90 + 10,
        Math.random() * 90 + 10, Math.random() * 90 + 10, Math.random() * 90 + 10, Math.random() * 90 + 10,
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.top-middle-cmp {
  position: relative;
  padding: 0 50px 40px 50px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);
  flex-direction: row;
  display: flex;

  .chart-name {
    position: absolute;
    right: 70px;
    text-align: right;
    font-size: 20px;
    top: 10px;
  }
}

.box {
  width: 50%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
}

.picker {
  position: absolute;
  bottom: 1px;
  left: 50%;
  transform: translate(-50%, 50%);
}
</style>
