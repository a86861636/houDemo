<template>
    <div class="box">
        <tMenu />
        <router-view></router-view>
    </div>
</template>
  
<script>
import tMenu from '../components/menu.vue'

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
  
<style lang="less">
.box {
    display: flex;
    height: 100%;
}
</style>
  