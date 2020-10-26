<template>
    <el-menu router="true"
             mode="horizontal"
             default-active="/index"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#fff"
              style="width: 100%"
              >
      <el-menu-item index="/index">首页</el-menu-item>
      <el-submenu style="position: absolute;left: 1350px;">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
        </template>
        <el-menu-item> repositories</el-menu-item>
        <el-menu-item> setting</el-menu-item>
      </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: "NavMent"
    }
</script>

<style scoped>
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: none;
  }
</style>
