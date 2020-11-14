<template>
    <div>
        <div id="repository">
          <branch id="branch" v-on:updateBranch="updateBranch"></branch>
          <clone id="cloneBox" style="width: 350px;"></clone>
            <el-link  @click="back" :underline="false" class="el-icon-back" style="position: relative ;right: 370px; top: 20px;font-size: 25px;" ></el-link>
            <el-table
              id="table"
              :data="RepoFiles"
              @row-click="handleTableClick"
              class="el-table"
              >
              <el-table-column
              label = "file"
              prop="name"
              >
              </el-table-column>
            </el-table>
          <div id="showBox" v-for="file in RepoFiles">
              <p v-for="str in file.name.split('\n')">
                {{str}}
              </p>
          </div>
        </div>
    </div>
</template>

<script>
    import Branch from "@/components/repositories/branch";
    import store from "../../store"
    import Clone from "@/components/repositories/clone";
    export default {
        name: "repository",
      components: {Clone, Branch},
      data(){
        return{
          curBranch:'',
          curRepository:'sample',
          dir:'D:/user/'+store.state.user.username,
          RepoFiles:[
            {
              name:'',
              isFile:''
            }]
        }
      },

      watch:{
        RepoFiles:
        {
          deep:true,
          handler(val){
            val.filter((item, i) => {
              console.log(i + " " + item.isFile)
              if (item.isFile == 'true') {
                document.getElementById("table").style.display = "none";
                document.getElementById("showBox").style.display = "block";
              }
              else{
                document.getElementById("table").style.display = "block";
                document.getElementById("showBox").style.display = "none";
              }
            })
        }
        }
      },
      mounted(){
          // this.dir += '/'+this.curRepository
        this.$axios.get('/getRepositoryFile?path='+this.dir)
          .then(res => this.RepoFiles = res.data);
        this.$axios.get('/pullBranchToLocal?branch=master'+'&username='+store.state.user.username)
          .catch(err => {err})
      },

      methods:{
        updateBranch(curBranch) {
          this.curBranch = curBranch,
            this.$axios.get('/pullBranchToLocal?branch='+curBranch+'&username='+store.state.user.username+'&repository='+this.curRepository)
              .then(res => {
                this.RepoFiles = res.data;
              })
        },
        handleTableClick(row){
          this.dir = this.dir +'/'+ row.name;
          this.$axios.get('/getRepositoryFile?path='+this.dir)
            .then(res => {this.RepoFiles = res.data;

            });

        },
        back(){
          var strings = this.dir.split("/");
          var dir1 = "";
          var len = strings.length;
          strings.filter((item,i)=>{
            if (i < len-1){
              dir1+=item;
              if (i < len - 2)
              dir1 += "/";
            }
          });
          this.dir = dir1;
          this.$axios.get('/getRepositoryFile?path='+this.dir)
            .then(res => this.RepoFiles = res.data)
        }
      },

    }
</script>

<style scoped>
  #repository{
    position: relative;
    box-shadow: 0 2px 12px 0 rgba(0.2, 0.2, 0.2, 0.3);
    width: 70%;
    left: 15%;
    top: 80px;
    padding-bottom: 30px;
    border-radius: 10px;
  }
  #branch{
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    right: 40%;
    top: 20px;
  }
  #cloneBox{
    position: relative;
    left: 600px;
    top: -10px;
  }
  .el-table{
    box-shadow: 0 2px 12px 0 rgba(0.1, 0.1, 0.1, 0.2);
    width: 80%;
    left: 10%;
    margin-top: 30px;
    border-radius: 20px;
  }
  #showBox{
    box-shadow: 0 2px 12px 0 rgba(0.1, 0.1, 0.1, 0.2);
    width: 75%;
    margin-top: 30px;
    display: none;
    left: 100px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    padding: 10px;
    border-radius: 20px;
    font-size: small;
  }
</style>
