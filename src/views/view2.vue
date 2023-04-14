<template>
    <div class="home">
        <div class="red">
            <div class="nav-box">
                <el-menu :default-active="activeIndex" router background-color="#BE1329" text-color="#ffffff"
                    active-text-color='#DBBC83' class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="/">首页</el-menu-item>
                    <el-menu-item index="/view2?type=2">香邑产业园</el-menu-item>
                    <el-menu-item index="/view2?type=3">侯北产业园</el-menu-item>
                    <el-menu-item index="/view2?type=4">浍南产业园</el-menu-item>
                    <el-menu-item index="/view2?type=5">CBD商务区</el-menu-item>
                    <el-menu-item index="/view2?type=6">装备制造</el-menu-item>
                    <el-menu-item index="/view2?type=7">金属材料</el-menu-item>
                    <el-menu-item index="/view2?type=8">生物医药</el-menu-item>
                    <el-menu-item index="/view2?type=9">军工装备</el-menu-item>
                </el-menu>
                <div class="login-status">
                    <span style="cursor: pointer;" v-if="!username" @click="toLogin">登录</span>
                    <span v-else>{{ username }} <span style="cursor: pointer;  white-space: nowrap;"
                            @click="logout">注销</span></span>
                </div>
            </div>
        </div>
        <div class="demo">
            <div>
                {{ title + ' 动态展示模块' }}
            </div>
        </div>
        <div class="down">
            <div>承办：XXXXXXXXXXXXX</div>
            <div style="margin-left: 50px">网安备: XXXXXXXXXXXX</div>
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
            activeIndex: '',
            titleDir: {
                '1': '园区概况',
                '2': '香邑产业园',
                '3': '侯北产业园',
                '4': '浍南产业园',
                '5': 'CBD商务区',
                '6': '装备制造',
                '7': '金属材料',
                '8': '生物医药',
                '9': '军工装备',
            },
            type: '1'
        }
    },
    computed: {
        username() {
            return this.$store.state.userInfo.username
        },
        title() {
            return this.titleDir[this.type]
        }
    },
    mounted() {
    },
    watch: {
        '$route.query': {
            immediate: true,
            handler(val) {
                this.type = val.type ? val.type : "1"
            }
        }
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
.demo {
    width: 1200px;
    text-align: center;
    margin-top: 50px;
    background: rgb(209, 209, 209);
    font-weight: bold;
    font-size: 24px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
}

/deep/.el-menu.el-menu--horizontal {
    border: 0;
}

/deep/.nav-box * {
    font-size: 18px !important;
}

.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

.red {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #bd1a2d;
    padding-top: 0px;
}

.middle {
    display: flex;
    flex-direction: row;
    width: 1200px;
    margin: 40px 0 0 0;
}

.nav-box,
.car-box {
    display: flex;
    // align-items: center;
    width: 1200px;
}

.nav-box {
    justify-content: space-between;
}

.login-status {
    color: white;
    font-weight: bold;
    line-height: 60px;
}

.el-menu-demo {
    font-weight: bold;
}

.car-box {
    margin: 50px 0 0 0;
    justify-content: space-between;
    padding: 0px 0 40px 0px;
}

.car {
    width: 550px;
}

.news {
    width: 500px;
    margin-left: 50px;
    color: white;
    position: relative;

    .title {
        font-weight: bold;
    }

    .title1 {
        margin-top: 20px;
        font-size: 22px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;
    }

    .content {
        margin-top: 20px;
    }

    .detail {
        position: absolute;
        right: 0;
        bottom: 50px;
        line-height: 50px;
        font-size: 18px;
        border-bottom: 2px solid #DBBC83;
    }

    .detail:hover {
        color: #DBBC83;
        cursor: pointer;
    }
}

.photo {
    width: 100%;
    height: 100%;
}

.icon-item {
    width: 160px;
    height: 88px;
    background: #F5F5F5;
    text-align: center;
    margin-bottom: 10px;
    cursor: pointer;
    padding-top: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.icon-item .img {
    width: 30px;
    height: 30px;

}

.icon1 {
    background: url(../assets/img/iconb1.png) no-repeat center 1px;
}

.icon-item:hover .icon1 {
    color: white;
    background: url(../assets/img/icon1.png) no-repeat center 1px;
}

.icon2 {
    background: url(../assets/img/iconb2.png) no-repeat center 1px;
}

.icon-item:hover .icon2 {
    color: white;
    background: url(../assets/img/icon2.png) no-repeat center 1px;
}

.icon3 {
    background: url(../assets/img/iconb3.png) no-repeat center 1px;
}

.icon-item:hover .icon3 {
    color: white;
    background: url(../assets/img/icon3.png) no-repeat center 1px;
}

.icon4 {
    background: url(../assets/img/iconb4.png) no-repeat center 1px;
}

.icon-item:hover .icon4 {
    color: white;
    background: url(../assets/img/icon4.png) no-repeat center 1px;
}

.icon-item:hover {
    color: white;
    background: #bd1a2d;
}

.article {
    margin: 0 0 0 20px;
    width: 550px;
}

.article-top {
    width: 100%;
    border-bottom: 2px solid #DCDCDC;
    display: flex;
    flex-direction: row;
    line-height: 38px;
    justify-content: space-between;
}

.article-tt {
    color: #333;
    font-size: 24px;
    font-weight: bold;
}

.article-more {
    color: #BD1A2D;
    cursor: pointer;
}

.article-more:hover {
    text-decoration: underline;
}

.article-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 40px;
    cursor: pointer;
}

.article-item:hover {
    color: #BD1A2D;
}

.video-box {
    margin-left: 40px;
    padding-top: 40px;
}

.video-tt {
    color: white;
    width: 200px;
    background: url(../assets/img/bg2.png) no-repeat left center;
    background-size: 100%;
    line-height: 40px;
    padding-left: 50px;
    font-size: 22px;
    box-sizing: border-box;
}

.video-cover {
    background: #CC2236;
    padding: 20px;
    box-sizing: border-box;
    height: 240px;
    width: 350px;
    cursor: pointer;
    position: relative;
}

.video-img {
    width: 310px;
}

.video-play {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
}

.img-line {
    margin-top: 40px;
    background: #F4F4F4;
    padding: 26px 0;
    width: 100%;
    display: flex;
    justify-content: center;
}

.img-line img {
    width: 300px;
    height: 100px;
    margin: 0 55px;
    cursor: pointer;
}

.bottom {
    display: flex;
    flex-direction: row;
    margin: 30px 0 0 0;
    width: 1200px;
}

.message {
    margin: 0 0 0 40px;
    width: 400px;
}

.message-list {
    display: flex;
    justify-content: space-between;
}

.message-item {
    width: 180px;
    border: 1px solid rgb(167, 167, 167);
    border-radius: 5px;
    padding: 20px 0;
    margin: 10px 0px 0px 0;
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    line-height: 30px;
    justify-content: center;
}

.message-item .icon1 {
    width: 30px;
    height: 30px;
    margin-right: 5px;
}

.message-item:hover {
    color: #CC2236;
    border: 1px solid #CC2236;
}

.down {
    margin-top: 30px;
    background: #d5bc8d;
    width: 100%;
    line-height: 48px;
    text-align: center;
    display: flex;
    justify-content: center;
}
</style>
  