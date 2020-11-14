<template>
  <el-menu router="true"
           mode="horizontal"
           default-active="/home"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#fff"
           style="width: 100%"
  >
    <el-menu-item index="/home">首页</el-menu-item>
    <el-submenu style="position: absolute;left: 1350px;" index="">
      <template slot="title">
        <i class="el-icon-s-custom"></i>
      </template>
      <el-menu-item index="/home/repositories"> repositories</el-menu-item>
      <el-menu-item index="/home"> setting</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    name: "NavMenu"
  }
</script>

<style scoped>
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: none;
  }
</style>
