<template>
    <div class="box">
        <tMenu />
        <datav />
    </div>
</template>
  
<script>
import datav from '../components/datav1/index.vue'
import tMenu from '../components/menu.vue'

export default {
    name: 'app',
    components: {
        datav,
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
  