<template>
  <div class="bottom-left-chart-1">
    <dv-charts v-if="show" :option="option" />
  </div>
</template>

<script>
export default {
  name: 'BottomLeftChart1',
  data () {
    return {
      show: true,
      option: {
        series: [
          {
            type: 'pie',
            data: this.getRandom(),
            outsideLabel: {
              labelLineEndLength: 20,
              formatter: '{percent}%\n{name}',
              style: {
                fill: '#fff'
              }
            }
          },
          {
            name: 'decoration ring',
            type: 'pie',
            data: [
              { value: 10, radius: ['50%', '53%'] }
            ],
            outsideLabel: {
              show: false
            },
            pieStyle: {
              fill: 'rgba(255, 255, 255, 0.2)'
            }
          },
          {
            name: 'decoration ring',
            type: 'pie',
            data: [
              { value: 10, radius: ['45%', '46%'] }
            ],
            outsideLabel: {
              show: false
            },
            pieStyle: {
              fill: 'rgba(255, 255, 255, 0.2)'
            }
          }
        ],
        color: ['#00c0ff', '#3de7c9', '#fff', '#00c0ff', '#3de7c9', '#fff']
      }
    }
  },
  watch: {
    '$route'() {
      this.option.series[0].data = this.getRandom()
      this.option = { ...this.option }
      this.show = false
      this.$nextTick(()=>{
        this.show = true
      })
    }
  },
  methods:{
    getRandom(){
      return [
              { name: '监控系统', value: Math.random()*100, radius: ['30%', '33%'] },
              { name: '收费系统', value: Math.random()*100, radius: ['32%', '35%'] },
              { name: '通信系统', value: Math.random()*100, radius: ['31%', '37%'] },
              { name: '供配电系统', value: Math.random()*100, radius: ['31%', '32%'] },
              { name: '其它', value: Math.random()*100, radius: ['32%', '35%'] }
            ]
    }
  }
}
</script>

<style lang="less" scoped>
.bottom-left-chart-1 {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);

  .header-name {
    font-size: 20px;
    text-align: center;
  }

  .details-value {
    height: 40px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;

    span {
      color: #00c0ff;
      font-size: 45px;
    }
  }

  .dv-charts-container {
    height: 100%;
  width: 100%;  
  }

  .decoration-ring {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid fade(#fefefe, 30);
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
