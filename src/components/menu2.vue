<template>
    <el-menu style="width: 250px;height: 100%;" router default-active="2" class="el-menu-vertical-demo" @open="handleOpen"
        @close="handleClose" background-color="#071B40" text-color="#fff" active-text-color="#ffd04b">
        <!-- <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>GDP指标</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1">指标总量</el-menu-item>
                <el-menu-item index="1-2">同比增速</el-menu-item>
                <el-menu-item index="1-2">环比增速</el-menu-item>
            </el-menu-item-group>
        </el-submenu> -->
        <el-menu-item index="/demo2?type=1">
            <i class="el-icon-location"></i>
            <span slot="title">年度任务</span>
        </el-menu-item>
        <el-menu-item index="/demo2?type=2">
            <i class="el-icon-menu"></i>
            <span slot="title">责任落实</span>
        </el-menu-item>
        <el-menu-item index="/demo2?type=3">
            <i class="el-icon-setting"></i>
            <span slot="title">风险管控</span>
        </el-menu-item>
        <el-menu-item index="/demo2?type=4">
            <i class="el-icon-s-help"></i>
            <span slot="title">重点项目监管</span>
        </el-menu-item>
        <el-menu-item index="/demo2?type=5">
            <i class="el-icon-document"></i>
            <span slot="title">其他安全</span>
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
  