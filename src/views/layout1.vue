<template>
    <div class="box">
        <div class="menu">
            <tMenu />
        </div>

        <router-view></router-view>
    </div>
</template>
  
<script>
import tMenu from '../components/menu1.vue'

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
  