<template>
    <div class="home">
        <div class="login-status">
            <span style="cursor: pointer;" v-if="!username" @click="toLogin">登录</span>
            <span v-else>{{ username }} <span style="cursor: pointer; white-space: nowrap;" @click="logout">注销</span></span>
        </div>
        <div class="box">
            <div class="item bg1" style="width: 35%" @click="$router.push('/view1')">
                <img src="../assets/img/home1.png">
                开发区概况
            </div>
            <div class="item bg2" style="width: 61%" @click="$router.push('/view2')">
                <img src="../assets/img/home2.png">
                特色园区
            </div>
            <div class="item bg3" style="width: 61%" @click="$router.push('/demo1')">
                <img src="../assets/img/home3.png">经济运行动态监测
            </div>
            <div class="item bg4" style="width: 35%" @click="$router.push('/demo2')">
                <img src="../assets/img/home4.png">重大建设项目管理
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'home',
    components: {
    },
    data() {
        return {
        }
    },
    computed: {
        username() {
            return this.$store.state.userInfo.username
        }
    },
    mounted() {
    },
    watch: {
    },
    methods: {
        toLogin() {
            this.$router.push('/login')
        },
        logout() {
            this.$store.dispatch('logout')
        }
    },
}
</script>
  
<style lang="less" scoped>
.login-status {
    color: white;
    font-weight: bold;
    line-height: 60px;
    text-align: right;
    padding: 0 40px;
    background: #bd1a2d;
}

.home {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.box {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 30px 0 0 0;

    .item {
        width: 33%;
        height: 48%;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 26px;
        font-weight: bold;
        box-sizing: border-box;
        cursor: pointer;
        background-size: 100% 100%;

        img{
            margin: 0 0 20px 0;
            width: 50px;
        }
    }
    .bg1{
        background-image: url(../assets/img/h1.png);
    }
    .bg2{
        background-image: url(../assets/img/h2.png);
    }
    .bg3{
        background-image: url(../assets/img/h3.png);
    }
    .bg4{
        background-image: url(../assets/img/h4.png);
    }
    .item:hover{
        filter: grayscale(40%);
    }
}
</style>
  