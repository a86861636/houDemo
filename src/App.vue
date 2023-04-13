<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
a{
  text-decoration: none;
  color: white;
}
a:hover, a:visited,a:link,a:active{
  color: white;
}
*::-webkit-scrollbar {
    width: 10px;
    // height: 10px; // 高度写不写，都不影响，因为会根据内容的长度自动计算
}

*::-webkit-scrollbar-thumb {
    background: #ccc; // 滑块颜色
    border-radius: 5px; // 滑块圆角
}

// 兼容Firefox、IE
* {
    scrollbar-width: 10px;
    scrollbar-base-color: green;
    scrollbar-track-color: red;
    scrollbar-arrow-color: blue;
}
</style>
