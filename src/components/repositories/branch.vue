<template>
    <el-select class="select" placeholder="" v-model="curBranch" @change="handleChange">
      <el-option
        v-for="item in branches"
        :value="item"
        :key="item"
        :label="item"
        >
      </el-option>
    </el-select>
</template>

<script>
    export default {
        name: "branch",
        data(){
          return {
            branches:['master','dev'],
            curBranch:'master'
          }
        },
      methods:{
        handleChange(){
          this.$emit("updateBranch",this.curBranch)
        }
      }
    }
</script>

<style scoped>
  .select {
    width: 100px;
  }
</style>
