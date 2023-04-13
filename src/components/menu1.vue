<template>
    <el-menu style="width: 250px;height: 100%;" router default-active="2" class="el-menu-vertical-demo"
        background-color="#071B40" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="/home">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/demo1?type=1">
            <i class="el-icon-location"></i>
            <span slot="title">GDP指标</span>
        </el-menu-item>
        <el-menu-item index="/demo1?type=2">
            <i class="el-icon-menu"></i>
            <span slot="title">GDP对比指标</span>
        </el-menu-item>
        <el-menu-item index="/demo1?type=3">
            <i class="el-icon-setting"></i>
            <span slot="title">产业结构</span>
        </el-menu-item>
        <el-menu-item index="/demo1?type=4">
            <i class="el-icon-s-help"></i>
            <span slot="title">规上企业</span>
        </el-menu-item>
        <el-menu-item index="/demo1?type=5">
            <i class="el-icon-document"></i>
            <span slot="title">N年经济目标</span>
        </el-menu-item>
    </el-menu>
</template>
  
<script>

export default {
    name: 'app',
    components: {
    },
    data() {
        return {}
    }
}
</script>
  
<style lang="less" scoped>
/deep/.el-menu-item-group__title {
    padding: 0px;
}

.el-menu {
    border-right: solid 0px #382121 !important;
}
</style>
  