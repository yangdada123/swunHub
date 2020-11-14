<style>
  .login-container{
    background-clip: border-box;
    border-radius: 15px;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0px 0px 25px #484848;
    position: fixed;
    top: 120px;
    left: 500px;
  }
  .login-tittle{
    color: #484848;
    margin: 0px auto 40px auto;
  }
  .body{
    background-image: url("../assets/login_background.jpg");
    background-position: center;
    background-size: cover;
    height: 350px;
    position: fixed;
    top: 130px;
    width:100%;
  }
</style>
<template>
  <div class="body">
    <el-form class="login-container">
      <el-form-item>
        <h3 class="login-tittle">系统登录</h3>
        <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>
        <br><br>
        <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"/>
      </el-form-item>
      <br><br>
      <el-form-item style="width: 100%">
        <el-button v-on:click="login" style="width: 100%;background: #505458;border: none " type="primary" round>登录</el-button>
      </el-form-item>
    </el-form>
  </Div>
</template>

<script>

  export default {
    name: 'Login',
    data () {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        responseResult: []
      }
    },
    methods: {
      login () {
        this.$axios
          .post('/login', {
            username: this.loginForm.username,
            password: this.loginForm.password
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              this.$store.commit('login',this.loginForm)
              var path = this.$route.query.redirect
              this.$router.replace({path: path === undefined ? '/index' : path})
            }
          })
          .catch(failResponse => {
          })
      }
    }
  }
</script>

