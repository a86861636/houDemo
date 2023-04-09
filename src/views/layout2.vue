<template>
    <div class="box">
        <tMenu />
        <router-view></router-view>
    </div>
</template>
  
<script>
import tMenu from '../components/menu2.vue'

export default {
    name: 'app',
    components: {
        tMenu
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
  