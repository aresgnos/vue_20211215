<template>
  <div>
  
    <el-container>
      <el-header>
        <el-menu :default-active="defaultActive"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect">

        <el-menu-item index="1">Home</el-menu-item>
        <el-menu-item index="2">Login</el-menu-item>
        <el-menu-item index="3">Join</el-menu-item>
        <el-menu-item index="4">My page</el-menu-item>

        <el-sub-menu index="5">
          <template #title>Board</template>
          <el-menu-item index="5-1">Table1</el-menu-item>
          <el-menu-item index="5-2">Table2</el-menu-item>
          <el-menu-item index="5-3">Form</el-menu-item>
          <el-sub-menu index="5-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="6" disabled>Info</el-menu-item>
        <el-menu-item index="7">Orders</el-menu-item>
        </el-menu>
        </el-header>

        <el-container>
          <el-aside width="200px"></el-aside>
          <el-container>
            <el-main>
              <router-view></router-view>
              </el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
  
    </el-container>

    
    

    

    
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      defaultActive:'1',
    }
  },

  methods:{
    handleSelect(idx){
      console.log('App.vue => handleSelect', idx)
      if (idx === '1'){
        this.$router.push({path:'/helloworld'});
      }
      else if(idx === '2'){
        this.$router.push({path:'/login'});
      }
       else if(idx === '3'){
        this.$router.push({path:'/join'});
      }
       else if(idx === '4'){
        this.$router.push({path:'/mypage'});
      }
       else if(idx === '5-1'){
        this.$router.push({path:'/table1'});
      }
      else if(idx === '5-2'){
        this.$router.push({path:'/table2'});
      }
      else if(idx === '5-3'){
        this.$router.push({path:'/form'});
      }
    }
  }

}


</script>

<style>
.el-header,
.el-footer {
  background-color: #545c64;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  /* text-align: center; */
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
