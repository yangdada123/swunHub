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
            curBranch:''
          }
        },
      methods:{
        handleChange(){
          this.$axios.get('/branches?branch='+this.curBranch)
            .catch(err => {err})
        }
      }
    }
</script>

<style scoped>
  .select {
    width: 100px;
  }
</style>
