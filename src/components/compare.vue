<template>
    <div class="box">
        <TopMiddleCmp />
        <TopMiddleCmp :options='{
            num: 11
        }' />
    </div>
</template>
   
<script>
import TopMiddleCmp from './datav3/TopMiddleCmp.vue'

export default {
    name: 'compare',
    components: {
        TopMiddleCmp,
    },
    data() {
        return {}
    }
}
</script>
   
<style lang="less" scoped>
.box {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
}
</style>
   