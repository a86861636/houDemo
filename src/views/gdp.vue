<template>
   <datav />
</template>
  
<script>
import datav from '../components/gdp/index.vue'

export default {
    name: 'app',
    components: {
        datav,
    },
    data() {
        return {}
    }
}
</script>
  
<style lang="less" scoped>
.box {
    display: flex;
    height: 100%;
}
</style>
  