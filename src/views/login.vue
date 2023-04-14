<template>
    <div class="login-container">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
            label-position="left">

            <div class="title-container">
                <h3 class="title">铁路管理系统</h3>
            </div>

            <el-form-item prop="username">
                <span class="svg-container">
                    <i class="el-icon-user"></i>
                </span>
                <el-input ref="username" v-model="loginForm.username" placeholder="Username" name="username" type="text"
                    tabindex="1" auto-complete="on" />
            </el-form-item>

            <el-form-item prop="password">
                <span class="svg-container">
                    <i class="el-icon-lock"></i>
                </span>
                <el-input :key="passwordType" ref="password" v-model="loginForm.password" :type="passwordType"
                    placeholder="Password" name="password" tabindex="2" auto-complete="on"
                    @keyup.enter.native="handleLogin" />
                <!-- <span class="show-pwd" @click="showPwd">
            <i class="el-icon-view"></i>
          </span> -->
            </el-form-item>

            <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;"
                @click.native.prevent="handleLogin">登录</el-button>

        </el-form>
    </div>
</template>
  
<script>
export default {
    data() {
        const validateUsername = (rule, value, callback) => {
            // eslint-disable-next-line eqeqeq
            if (value.length == 0) {
                callback(new Error('Please enter the correct user name'))
            } else {
                callback()
            }
        }
        const validatePassword = (rule, value, callback) => {
            if (value.length < 6) {
                callback(new Error('The password can not be less than 6 digits'))
            } else {
                callback()
            }
        }
        return {
            loginForm: {
                username: 'admin',
                password: '123456'
            },
            loginRules: {
                username: [{
                    required: true,
                    trigger: 'blur',
                    validator: validateUsername
                }],
                password: [{
                    required: true,
                    trigger: 'blur',
                    validator: validatePassword
                }]
            },
            loading: false,
            passwordType: 'password',
            redirect: undefined
        }
    },
    watch: {
        $route: {
            handler: function (route) {
                this.redirect = route.query && route.query.redirect
            },
            immediate: true
        }
    },
    methods: {
        showPwd() { // 显示密码
            if (this.passwordType === 'password') {
                this.passwordType = ''
            } else {
                this.passwordType = 'password'
            }
            this.$nextTick(() => {
                this.$refs.password.focus()
            })
        },
        handleLogin() { // 处理登录事件
            this.$refs['loginForm'].validate((valid) => {
                if (valid) { // 表单验证通过
                    this.loading = true
                    const data = {
                        url: '/v1/user/login',
                        password: this.loginForm.password,
                        username: this.loginForm.username
                    }
                    this.$store.dispatch('post', data).then((res) => {
                        this.$message({
                            message: '登录成功',
                            type: 'success'
                        })
                        this.$store.dispatch('login', res)
                        this.$router.push('/home')
                        // eslint-disable-next-line handle-callback-err
                    }, (err) => {
                        this.$message({
                            message: '账号密码错误',
                            type: 'error',
                            showClose: true,
                        })
                        this.loading = false
                    })
                } else {
                    this.loading = false
                    console.log('error submit!!')
                }
            })
        }
    }
}
</script>
  
<style lang="less">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */


@supports (-webkit-mask: none) and (not (cater-color: #fff)) {
    .login-container .el-input input {
        color: #fff;
    }
}

/* reset element-ui css */
.login-container {
    .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;

        input {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            color: #fff;
            height: 47px;
            caret-color: #fff;

            &:-webkit-autofill {
                box-shadow: 0 0 0px 1000px #283443 inset !important;
                -webkit-text-fill-color: #fff !important;
            }
        }
    }

    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
    }
}
</style>
<style lang="less" scoped>
.login-container {
    min-height: 100%;
    width: 100%;
    background-color: #283443;
    overflow: hidden;

    .login-form {
        position: relative;
        width: 520px;
        max-width: 100%;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;
    }

    .svg-container {
        padding: 6px 5px 6px 15px;
        color: #889aa4;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
    }

    .title-container {
        position: relative;

        .title {
            font-size: 26px;
            color: #fff;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }
    }

    .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: #889aa4;
        cursor: pointer;
        user-select: none;
    }
}
</style>
  