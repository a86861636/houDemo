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
              name: 'GDP',
              color: '#00baff'
            },
            {
              name: 'GDP1',
              color: '#ff5ca9'
            },
            {
              name: '通信系统',
              color: '#3de7c9'
            },
            {
              name: '供配电系统',
              color: '#f5d94e'
            }
          ],
          textStyle: {
            fill: '#fff'
          }
        },
        xAxis: {
          data: [
            '2018', '2019', '2020', '2021', '2022',
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
            name: 'GDP',
            data: [
            Math.random() * 7 +1, Math.random() * 7 +1, Math.random() * 7 +1, Math.random() * 7 +1, Math.random() * 7 +1,
            ],
            type: 'bar',
            barStyle: {
              fill: 'rgba(0, 186, 255, 0.9)'
            }
          },{
            name: 'GDP1',
            data: [
            Math.random() * 7 +1, Math.random() * 7 +1, Math.random() * 7 +1, Math.random() * 7 +1, Math.random() * 7 +1,
            ],
            type: 'bar',
            barStyle: {
              fill: 'rgba(255, 92, 169, 0.9)'
            }
          },
        ]
      }
    }
  },
  watch: {
    '$route'() {
      this.option.series[0].data = [Math.random() * 7 +1, Math.random() * 7 +1, Math.random() * 7 +1, Math.random() * 7 +1, Math.random() * 7 +1]
      this.option.series[1].data = [Math.random() * 7 +1, Math.random() * 7 +1, Math.random() * 7 +1, Math.random() * 7 +1, Math.random() * 7 +1]
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
