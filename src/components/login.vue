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
    <el-form class="login-container" :rules="rules" :model="loginForm">

      <h3 class="login-tittle">系统登录</h3>

      <el-form-item label="用户名" prop="username">
        <el-input type="text" placeholder="请输入用户名" v-model="loginForm.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="loginForm.password"/>
      </el-form-item>

      <el-form-item style="width: 100%">
        <el-button v-on:click="login"    style="width: 100%;background: #505458;border: none " type="primary" round>登录</el-button>
        <el-button v-on:click="toRegist" style="width: 100%;background: #505458;border: none " type="primary" round>注册</el-button>

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
        responseResult: [],
        rules:{
          username:[
            {required:true,message:'账号不能为空',trigger:'blur'}
          ],
          password:[
            {required: true,message: '密码不能为空',trigger:'blur'}
          ]
        }
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
            if (successResponse.data === 200) {
              this.$store.commit('login',this.loginForm)
              var path = this.$route.query.redirect
              this.$router.replace({path: path === undefined ? '/home/repositories' : path})
            }
            else{
              this.errorMessage();
            }
          })
          .catch(failResponse => {
          })
      },

      toRegist() {
        this.$router.replace('/regist');
      },

      errorMessage() {
        this.$message({
          showClose: true,
          message: '账号或密码错误，请检查！',
          type: 'error'
        });
      }
    }
  }
</script>

