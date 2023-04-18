<template>
  <div id="rose-chart">
    <!-- <div class="rose-chart-title">累计计量资金分布</div> -->
    <dv-charts :option="option" />
  </div>
</template>

<script>
export default {
  name: 'RoseChart',
  data() {
    return {
      option: {}
    }
  },
  methods: {
    createData() {
      const { randomExtend } = this

      this.option = {
        series: [
          {
            type: 'pie',
            radius: '50%',
            roseSort: false,
            data: [
              { name: '第一产业', value: randomExtend(40, 60) },
              { name: '第二产业', value: randomExtend(20, 50) },
              { name: '第三产业', value: randomExtend(20, 50) },
            ],
            insideLabel: {
              show: false
            },
            outsideLabel: {
              formatter: '{name} {percent}%',
              labelLineEndLength: 20,
              style: {
                fill: '#fff'
              },
              labelLineStyle: {
                stroke: '#fff'
              }
            },
            roseType: true
          }
        ],
        color: ['#2CC78F', '#30B7FF', '#F60000']
      }
    },
    randomExtend(minNum, maxNum) {
      if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10)
      } else {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
      }
    }
  },
  mounted() {
    const { createData } = this

    createData()

    setInterval(createData, 30000)
  },
  watch: {
    '$route'() {
      const { randomExtend } = this
      this.option.series[0].data = [
        { name: '第一产业', value: randomExtend(40, 70) },
        { name: '第二产业', value: randomExtend(20, 30) },
        { name: '第三产业', value: randomExtend(10, 50) },
      ]
      this.option = { ...this.option }
    }
  }
}
</script>

<style lang="less" scoped>
#rose-chart {
  width: 100%;
  height: 100%;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);
  box-sizing: border-box;

  .rose-chart-title {
    height: 50px;
    font-weight: bold;
    text-indent: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
  }

  .dv-charts-container {
    height: 100%;
  }
}
</style>
