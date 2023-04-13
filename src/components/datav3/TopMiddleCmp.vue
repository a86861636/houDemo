<template>
  <div class="top-middle-cmp">
    <div class="chart-name">
      设备完好率10月趋势
      <dv-decoration-3 style="width:200px;height:20px;" />
    </div>
    <dv-charts :option="option" />
    <el-date-picker class="picker" size="mini" v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'TopMiddleCmp',
  data() {
    return {
      value1: '',
      option: {
        legend: {
          data: ['设备完好率'],
          textStyle: {
            fill: '#fff'
          }
        },
        xAxis: {
          data: [
            '10/01', '10/02', '10/03', '10/04', '10/05', '10/06',
            '10/07', '10/07', '10/08', '10/09', '10/10', '10/11',
            '10/12', '10/13', '10/14', '10/15'
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
          min: 95,
          max: 100,
          interval: 0.5
        },
        series: [
          {
            data: [
              99.56, 99.66, 99.84, 99.22, 99.11, 99.45,
              99.44, 99.81, 99.84, 99.32, 99.14, 99.45,
              99.15, 99.45, 99.64, 99.89
            ],
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

  .chart-name {
    position: absolute;
    right: 70px;
    text-align: right;
    font-size: 20px;
    top: 10px;
  }
}
.picker{
    position: absolute;
    bottom: 1px;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>
