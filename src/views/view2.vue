<template>
    <div class="home">
        <div class="header">
            <div class="left" @click="$router.push('/home')">首页</div>
            <div class="right">
            <span style="cursor: pointer;" v-if="!username" @click="toLogin">登录</span>
            <span v-else>{{ username }} <span style="cursor: pointer; white-space: nowrap;" @click="logout">注销</span></span>
            </div>
        </div>
        <div class="box">
            <div class="item" style="width: 48%" @click="$router.push('/view3')">
                <!-- <img src="../assets/img/home1.png"> -->
                香邑产业园
            </div>
            <div class="item" style="width: 48%" @click="$router.push('/view3')">
                <!-- <img src="../assets/img/home2.png"> -->
                侯北产业园
            </div>
            <div class="item" style="width: 48%" @click="$router.push('/view3')">
                <!-- <img src="../assets/img/home3.png"> -->
                浍南产业园
            </div>
            <div class="item" style="width: 48%" @click="$router.push('/view3')">
                <!-- <img src="../assets/img/home4.png"> -->
                CBD商务区
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
.left{
    cursor: pointer;
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
        background: rgb(145, 145, 145);
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

        img{
            margin: 0 0 20px 0;
            width: 50px;
        }
    }
}
</style>
  