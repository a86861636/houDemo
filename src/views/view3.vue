<template>
    <div class="view1">
        <div class="header">
            <div class="left" @click="$router.push('/home')">首页</div>
            <div class="right">
                <span style="cursor: pointer;" v-if="!username" @click="toLogin">登录</span>
                <span v-else>{{ username }} <span style="cursor: pointer; white-space: nowrap;"
                        @click="logout">注销</span></span>
            </div>
        </div>
        <div class="content">
            <el-menu style="width: 230px;height: 100%;" :default-active="activeIndex"
                background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
                <el-menu-item index="装备制造">
                    <span slot="title">装备制造</span>
                </el-menu-item>
                <el-menu-item index="金属材料">
                    <span slot="title">金属材料</span>
                </el-menu-item>
                <el-menu-item index="生物医药">
                    <span slot="title">生物医药</span>
                </el-menu-item>
                <el-menu-item index="军工装备">
                    <span slot="title">军工装备</span>
                </el-menu-item>
            </el-menu>
            <div class="box">
                <h1>{{ title }}</h1>
                ◆ 为进一步落实省委全方位推动高质量发展和同步推进产业转型和数字转型“两个转型”
                的战略部署，紧抓落实省市数字经济全面发展实施中以开发区为主引擎，建立公共服
                务数字化支撑体系要求。
                <br>
                ◆ 侯马开发区抢抓数字化转型机遇，以政府监管服务数字化提升、产业转型数字化服务
                为目标，综合智慧服务管理平台建设为手段，创新产业服务模式、提升产业服务效率。
                增强产业链数字化监管、评估以及精准招商能力，助力侯马产业高质量发展目标实现。
                为全省打造中西部地区数字经济创新发展新高地做出重要示范。
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'app',
    components: {
    },
    data() {
        return {
            activeIndex: '装备制造',
            title: '装备制造',
        }
    },
    computed: {
        username() {
            return this.$store.state.userInfo.username
        }
    },
    methods: {
        toLogin() {
            this.$router.push('/login')
        },
        logout() {
            this.$store.dispatch('logout')
        },
        handleSelect(key, keyPath) {
            this.title = key
            console.log(key, keyPath);
        }
    }
}
</script>
  
<style lang="less" scoped>
.view1 {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
}

.header {
    color: white;
    font-weight: bold;
    line-height: 60px;
    text-align: right;
    padding: 0 40px;
    background: #bd1a2d;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.left {
    cursor: pointer;
}

.home {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.content {
    flex: 1;
    display: flex;
    flex-direction: row;

    .box {
        flex: 1;
        box-sizing: border-box;
        padding: 15px;
        line-height: 50px;
    }
}
</style>
  