<template>
    <div class="home">
        <div class="red">
            <div class="nav-box">
                <el-menu :default-active="activeIndex" router background-color="#BE1329" text-color="#ffffff"
                    active-text-color='#DBBC83' class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-submenu index="6">
                        <template slot="title">发展历程</template>
                        <el-menu-item index="2-1">发展过程</el-menu-item>
                        <el-menu-item index="2-2">开发区定位</el-menu-item>
                        <el-menu-item index="2-2">荣誉资质</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">经济概况</template>
                        <el-menu-item index="2-1">经济规模/企业数量</el-menu-item>
                        <el-menu-item index="2-2">经济特色</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">特色优势</template>
                        <el-menu-item index="3-1">资源优势</el-menu-item>
                        <el-menu-item index="3-2">交通优势</el-menu-item>
                        <el-menu-item index="3-3">产业优势</el-menu-item>
                        <el-menu-item index="3-4">政策优势</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">园区概况</template>
                        <el-menu-item index="4-1">香邑产业园</el-menu-item>
                        <el-menu-item index="4-2">侯北产业园</el-menu-item>
                        <el-menu-item index="4-3">浍南产业园</el-menu-item>
                        <el-menu-item index="4-4">CBD商务区</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">重点企业</template>
                        <el-menu-item index="5-1">装备制造</el-menu-item>
                        <el-menu-item index="5-2">金属材料</el-menu-item>
                        <el-menu-item index="5-3">生物医药</el-menu-item>
                        <el-menu-item index="5-4">军工装备</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/demo1">经济运行全景图</el-menu-item>
                    <el-menu-item index="/demo2">重大项目建设管理</el-menu-item>
                </el-menu>
            </div>
            <div class="car-box">
                <el-carousel class="car" indicator-position="outside">
                    <el-carousel-item>
                        <img class="photo" src="../assets/img/photo1.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img class="photo" src="../assets/img/photo1.jpg">
                    </el-carousel-item>
                </el-carousel>
                <div class="news">
                    <div class="title">紧抓落实省市数字经济全面发展实施</div>
                    <div class="title1">以开发区为主引擎，建立公共服
                        务数字化支撑体系要求。</div>
                    <div class="content">
                        侯马开发区抢抓数字化转型机遇，以政府监管服务数字化提升、产业转型数字化服务
                        为目标，综合智慧服务管理平台建设为手段，创新产业服务模式、提升产业服务效率。
                        增强产业链数字化监管、评估以及精准招商能力，助力侯马产业高质量发展目标实现。
                        为全省打造中西部地区数字经济创新发展新高地做出重要示范。</div>
                    <div class="detail">查看详情 ></div>
                </div>
            </div>
        </div>
        <div class="demo">
            侯马晋级开发区动态展示模块
        </div>
        <!-- <div class="middle">
            <div class="icon-box">
                <div class="icon-item">
                    <div class="img icon1"></div>
                    院信息
                </div>
                <div class="icon-item">
                    <div class="img icon2"></div>
                    市信息
                </div>
                <div class="icon-item">
                    <div class="img icon3"></div>
                    工作动态
                </div>
                <div class="icon-item">
                    <div class="img icon4"></div>
                    街镇动态
                </div>
            </div>
            <div class="article">
                <div class="article-top">
                    <div class="article-tt">
                        新闻
                    </div>
                    <div class="article-more">
                        更多 >>
                    </div>
                </div>
                <div class="article-list">
                    <div class="article-item">
                        <div class="article-title">2023年决策事项</div>
                        <div class="article-time">2023-04-06</div>
                    </div>
                    <div class="article-item">
                        <div class="article-title">综合执法局2023年第一季度检查结果（城管领域）</div>
                        <div class="article-time">2023-04-06</div>
                    </div>
                    <div class="article-item">
                        <div class="article-title">关于注销《道路运输经营许可证》的公告</div>
                        <div class="article-time">2023-04-06</div>
                    </div>
                    <div class="article-item">
                        <div class="article-title">2023年决策事项</div>
                        <div class="article-time">2023-04-06</div>
                    </div>
                    <div class="article-item">
                        <div class="article-title">2023年决策事项</div>
                        <div class="article-time">2023-04-06</div>
                    </div>
                    <div class="article-item">
                        <div class="article-title">综合执法局2023年第一季度检查结果（城管领域）</div>
                        <div class="article-time">2023-04-06</div>
                    </div>
                    <div class="article-item">
                        <div class="article-title">2022年度和谐社区建设考评工作中选公告</div>
                        <div class="article-time">2023-04-06</div>
                    </div>
                    <div class="article-item">
                        <div class="article-title">综合执法局2023年第一季度检查结果（城管领域）</div>
                        <div class="article-time">2023-04-06</div>
                    </div>
                </div>
            </div>
            <div class="video-box">
                <div class="video-tt">视频</div>
                <div class="video-cover">
                    <img class="video-play" src="../assets/img/play.png" alt="">
                    <img class="video-img" src="../assets/img/video.png" alt="">
                </div>
            </div>
        </div>
        <div class="img-line">
            <img src="../assets/img/photo2.jpg">
            <img src="../assets/img/photo3.png">
            <img src="../assets/img/photo4.jpg">
        </div>
        <div class="bottom">
            <div class="article" style="width: 700px;">
                <div class="article-top">
                    <div class="article-tt">
                        政府文件
                    </div>
                    <div class="article-more">
                        更多 >>
                    </div>
                </div>
                <div class="article-list">
                    <div class="article-item">
                        <div class="article-title">2023年决策事项</div>
                        <div class="article-time">2023-04-06</div>
                    </div>
                    <div class="article-item">
                        <div class="article-title">综合执法局2023年第一季度检查结果（城管领域）</div>
                        <div class="article-time">2023-04-06</div>
                    </div>
                    <div class="article-item">
                        <div class="article-title">关于注销《道路运输经营许可证》的公告</div>
                        <div class="article-time">2023-04-06</div>
                    </div>
                    <div class="article-item">
                        <div class="article-title">2023年决策事项</div>
                        <div class="article-time">2023-04-06</div>
                    </div>
                    <div class="article-item">
                        <div class="article-title">2023年决策事项</div>
                        <div class="article-time">2023-04-06</div>
                    </div>
                    <div class="article-item">
                        <div class="article-title">综合执法局2023年第一季度检查结果（城管领域）</div>
                        <div class="article-time">2023-04-06</div>
                    </div>
                    <div class="article-item">
                        <div class="article-title">2022年度和谐社区建设考评工作中选公告</div>
                        <div class="article-time">2023-04-06</div>
                    </div>
                    <div class="article-item">
                        <div class="article-title">综合执法局2023年第一季度检查结果（城管领域）</div>
                        <div class="article-time">2023-04-06</div>
                    </div>
                </div>
            </div>
            <div class="message">
                <div class="article-top">
                    <div class="article-tt">
                        政府信息公开
                    </div>
                    <div class="article-more">
                        更多 >>
                    </div>
                </div>
                <div class="message-list">
                    <div class="message-item">
                        <div class="icon1"></div>
                        公开指南
                    </div>
                    <div class="message-item">
                        <div class="icon1"></div>
                        公开年报
                    </div>
                </div>
                <div class="message-list">
                    <div class="message-item">
                        <div class="icon1"></div>
                        法定公开
                    </div>
                    <div class="message-item">
                        <div class="icon1"></div>
                        公开全清单
                    </div>
                </div>
                <div class="message-list">
                    <div class="message-item">
                        <div class="icon1"></div>
                        公开目录
                    </div>
                    <div class="message-item">
                        <div class="icon1"></div>
                        公开制度
                    </div>
                </div>
                <div class="message-list">
                    <div class="message-item">
                        <div class="icon1"></div>
                        网站申请
                    </div>
                    <div class="message-item">
                        <div class="icon1"></div>
                        公开制度
                    </div>
                </div>
            </div>
        </div> -->
        <div class="down">
            <div>承办：XXXXXXXXXXXXX</div>
            <div style="margin-left: 50px">网安备: XXXXXXXXXXXX</div>
        </div>
    </div>
</template>
  
<script>

</script>
  
<style lang="less" scoped>
.demo {
    width: 1120px;
    line-height: 400px;
    text-align: center;
    margin-top: 50px;
    background: rgb(209, 209, 209);
    font-weight: bold;
    font-size: 24px;
    border-radius: 20px;
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
}

.red {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #bd1a2d url(../assets/img/bg1.png) no-repeat bottom center;
    padding-top: 10px;
}

.middle {
    display: flex;
    flex-direction: row;
    width: 1120px;
    margin: 40px 0 0 0;
}

.nav-box,
.car-box {
    display: flex;
    // align-items: center;
    width: 1120px;
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
    width: 1120px;
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
  