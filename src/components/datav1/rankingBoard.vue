<template>
  <div id="ranking-board">
    <div class="ranking-board-title">企业列表</div>
    <div class="company">
      <div v-for="item in company" :class="{ active: item.active }" @click="activeItem(item.label)">
        {{ item.label }}</div>
    </div>
    <!-- <dv-scroll-ranking-board :config="config" /> -->
  </div>
</template>

<script>
export default {
  name: 'RankingBoard',
  data() {
    return {
      company: [
        {
          label: "总体",
          active: true
        }, {
          label: "企业1",
          active: false
        }, {
          label: "企业2",
          active: false
        }, {
          label: "企业3",
          active: false
        }, {
          label: "企业4",
          active: false
        }, {
          label: "企业5",
          active: false
        }, {
          label: "企业6",
          active: false
        }, {
          label: "企业7",
          active: false
        }, {
          label: "企业8",
          active: false
        }, {
          label: "企业9",
          active: false
        }, {
          label: "企业10",
          active: false
        }, {
          label: "企业11",
          active: false
        }
      ],
      config: {
        data: [
          {
            name: '日常养护',
            value: 55
          },
          {
            name: '交通事故',
            value: 120
          },
          {
            name: '路面',
            value: 78
          },
          {
            name: '桥通',
            value: 66
          },
          {
            name: '计日工',
            value: 80
          },
          {
            name: '路基',
            value: 45
          },
          {
            name: '交安设施',
            value: 29
          },
          {
            name: '除雪',
            value: 29
          },
          {
            name: '绿化',
            value: 29
          }
        ],
        rowNum: 9
      }
    }
  },
  methods: {
    activeItem(label){
      this.company.forEach(item=>{
        item.active = false
      })
      this.company.find(item=>{
        return item.label === label
      }).active = true
    }
  }
}
</script>

<style lang="less" scoped>
.company div {
  margin-bottom: 15px;
  cursor: pointer;
  font-weight: bold;
}

.active {
  color: #03d3ec;
}

#ranking-board {
  width: 15%;
  height: 510px;
  box-shadow: 0 0 3px blue;
  display: flex;
  flex-direction: column;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);
  box-sizing: border-box;
  padding: 0px 30px;

  .ranking-board-title {
    font-weight: bold;
    height: 60px;
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .dv-scroll-ranking-board {
    flex: 1;
  }
}
</style>
