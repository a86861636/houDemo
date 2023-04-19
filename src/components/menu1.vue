<template>
    <div class="menu">
        <el-menu style="height: 100%" router :default-active="activeNav" class="el-menu-vertical-demo"
            background-color="#071B40" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/home">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="/gdp?type=1">
                <template slot="title"><i class="el-icon-location"></i>GDP指标</template>
                <el-submenu index="/gdp?type=1&submenu=1">
                    <template slot="title">历年运行指标</template>
                    <el-menu-item index="/gdp?type=1&submenu=1&year=2022">2022</el-menu-item>
                    <el-menu-item index="/gdp?type=1&submenu=1&year=2021">2021</el-menu-item>
                    <el-menu-item index="/gdp?type=1&submenu=1&year=2020">2020</el-menu-item>
                    <el-menu-item index="/gdp?type=1&submenu=1&year=2019">2019</el-menu-item>
                    <el-menu-item index="/gdp?type=1&submenu=1&year=2018">2018</el-menu-item>
                    <el-menu-item index="/gdp?type=1&submenu=1&year=2017">2017</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="/gdp?type=2">
                <template slot="title">
                    <i class="el-icon-menu"></i>GDP开发区对比</template>
                <el-submenu index="/gdp?type=2&submenu=1">
                    <template slot="title">临汾市对比</template>
                    <el-menu-item index="/gdp?type=2&submenu=1&area=1">临汾市开发区名称1</el-menu-item>
                    <el-menu-item index="/gdp?type=2&submenu=1&area=2">临汾市开发区名称2</el-menu-item>
                    <el-menu-item index="/gdp?type=2&submenu=1&area=3">临汾市开发区名称3</el-menu-item>
                    <el-menu-item index="/gdp?type=2&submenu=1&area=4">临汾市开发区名称4</el-menu-item>
                    <el-menu-item index="/gdp?type=2&submenu=1&area=5">临汾市开发区名称5</el-menu-item>
                </el-submenu>
                <el-submenu index="/gdp?type=2&submenu=2">
                    <template slot="title">全省对比</template>
                    <el-submenu index="/gdp?type=2&submenu=2&ssmenu=1">
                        <template slot="title">普城市</template>
                        <el-menu-item index="/gdp?type=2&submenu=2&area=1">普城市开发区名称1</el-menu-item>
                        <el-menu-item index="/gdp?type=2&submenu=2&area=2">普城市开发区名称2</el-menu-item>
                        <el-menu-item index="/gdp?type=2&submenu=2&area=3">普城市开发区名称3</el-menu-item>
                        <el-menu-item index="/gdp?type=2&submenu=2&area=4">普城市开发区名称4</el-menu-item>
                        <el-menu-item index="/gdp?type=2&submenu=2&area=5">普城市开发区名称5</el-menu-item>
                    </el-submenu>
                    <el-submenu index="/gdp?type=2&submenu=2&ssmenu=2">
                        <template slot="title">太原市</template>
                    </el-submenu>
                    <el-submenu index="/gdp?type=2&submenu=2&ssmenu=3">
                        <template slot="title">运城市</template>
                    </el-submenu>
                    <el-submenu index="/gdp?type=2&submenu=2&ssmenu=3">
                        <template slot="title">大同市</template>
                    </el-submenu>
                    <el-submenu index="/gdp?type=2&submenu=2&ssmenu=3">
                        <template slot="title">吕梁市</template>
                    </el-submenu>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="/demo1?type=3">
                <i class="el-icon-setting"></i>
                <span slot="title">产业结构</span>
            </el-menu-item>
            <el-submenu index="/demo1?type=4">
                <template slot="title">
                    <i class="el-icon-s-help"></i>
                    规上企业
                </template>
                <el-menu-item index="/demo1?type=4&year=2022">汽车零配件</el-menu-item>
                <el-menu-item index="/demo1?type=4&year=2021">石油钻具企业</el-menu-item>
                <el-menu-item index="/demo1?type=4&year=2020">有色金属材料</el-menu-item>
                <el-menu-item index="/demo1?type=4&year=2019">生物医药</el-menu-item>
                <el-menu-item index="/demo1?type=4&year=2018">生产服务</el-menu-item>
            </el-submenu>
            <el-menu-item index="/demo1?type=5">
                <i class="el-icon-document"></i>
                <span slot="title">N年经济目标</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
  
<script>

export default {
    name: 'app',
    components: {
    },
    data() {
        return {
            activeNav: '/gdp?type=1&submenu=1&year=2022'
        }
    },
    mounted(){
        this.activeNav = this.$route.fullPath.indexOf('?')>-1 ? this.$route.fullPath : '/gdp?type=1&submenu=1&year=2022'
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

.menu {
    width: 250px;
    height: 100%;
    overflow-y: scroll;
}

.menu::-webkit-scrollbar {
    width: 0px;
    // height: 10px; // 高度写不写，都不影响，因为会根据内容的长度自动计算
}

.menu::-webkit-scrollbar-thumb {
    background: #ccc; // 滑块颜色
    border-radius: 5px; // 滑块圆角
}
</style>
  