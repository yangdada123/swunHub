<template>
  <div>
    <el-input v-model="ssh_url" size="mini">
      <template slot="prepend">ssh://</template>
    </el-input>
  </div>

</template>

<script>
    export default {
        name: "clone",
        data(){
          return {
            ssh_url:'git@192.168.236.11:/home/gitrepo/sample.git'
          }
        }
    }
</script>

<style scoped>

</style>
