<template>
  <div class="top-right-cmp">
    <!-- <div class="chart-name">
      设备故障月趋势
      <dv-decoration-3 style="width:200px;height:20px;" />
    </div> -->
    <dv-charts :option="option" />
  </div>
</template>

<script>
export default {
  name: 'TopRightCmp',
  data () {
    return {
      option: {
        legend: {
          data: [
            {
              name: '目标值',
              color: '#00baff'
            },
            {
              name: '实际值',
              color: '#ff5ca9'
            },
          ],
          textStyle: {
            fill: '#fff'
          }
        },
        xAxis: {
          data: [
            '一季度', '二季度', '三季度', 
          ],
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
            }
          },
          axisTick: {
            show: false
          },
          min: 0,
          max: 8
        },
        series: [
          {
            name: '目标值',
            data: [
            Math.random() * 7 +1, Math.random() * 7 +1, Math.random() * 7 +1
            ],
            type: 'line',
            lineStyle: {
              stroke: '#00baff'
            },
          },{
            name: '实际值',
            data: [
            Math.random() * 7 +1, Math.random() * 7 +1, Math.random() * 7 +1
            ],
            type: 'line',
            lineStyle: {
              stroke: '#ff5ca9'
            },
          },
        ]
      }
    }
  },
  watch: {
    '$route'() {
      this.option.series[0].data = [Math.random() * 7 +1, Math.random() * 7 +1, Math.random() * 7 +1]
      this.option.series[1].data = [Math.random() * 7 +1, Math.random() * 7 +1, Math.random() * 7 +1]
      this.option = { ...this.option }
    }
  }
}
</script>

<style lang="less" scoped>
.top-right-cmp {
  position: relative;
  padding: 0 50px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);

  .chart-name {
    position: absolute;
    right: 70px;
    text-align: right;
    font-size: 20px;
    top: 10px;
  }
}
</style>
