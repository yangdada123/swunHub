<template>
  <div>
    <el-col :span="16">
    <el-input
      type="text"
      placeholder="请输入仓库名称"
      v-model="text"
      maxlength="15"
      show-word-limit
    >
    </el-input>
    </el-col>
    <el-button type="primary" icon="el-icon-collection" @click="createRepository">新建仓库</el-button>

    <el-table
      :data="tableData"
      style="width: 100%"
      max-height="480">


      <el-table-column
        prop="zip"
        label="仓库名"
        width="130">

        <template slot-scope="scope">
          <i class="el-icon-collection"></i>
          <span style="margin-left: 10px"><a href="repository">{{ scope.row }}</a></span>

        </template>
      </el-table-column>

        <i class="el-icon-more"></i>

      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-delete" @click.native.prevent="deleteComfirm(scope.$index)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import store from "../../store"
  export default {
    inject:['reload'],
    methods: {
      query(){
        /*在这里进行跨域请求*/
        this.$axios({
          method: "get",
          url: "/findRepository?username="+store.state.user.username
        })
          .then(res => {
            this.tableData=res.data;
          }).catch(function(err) {
        });
        /*在这里进行跨域请求*/
      },

      deleteComfirm(index) {
        this.$confirm('此操作将永久删除该仓库, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.$axios({
            method: "get",
            url: "/deleteRepository?username="+store.state.user.username+"&repositoryName="+this.tableData[index],
          });

          this.reload();

          this.$message({
            type: 'success',
            message: '删除成功!',
          });
          this.reload();

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },

      createRepository(){
        this.$confirm('是否要创建此仓库?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.$axios
            .post('/addRepository?username='+store.state.user.username+'&repositoryName='+this.text)
            .then(successResponse => {
              if (successResponse.data === 200)
                this.successMessage();
              else this.errorMessage();
            });

          this.reload();

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消创建仓库'
          });
        });
      },

      errorMessage() {
        this.$message({
          showClose: true,
          message: '同名仓库已经存在，请重新输入！',
          type: 'error'
        });
      },

      successMessage() {
        this.$message({
          showClose: true,
          message: '仓库创建成功！',
          type: 'success'
        });
      },

    },
    data() {
      return {
        tableData: null,
        text: '',
      }

    },
    mounted:function(){
      this.query();//需要触发的函数
    },
  }
</script>
