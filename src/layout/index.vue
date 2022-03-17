<template>
  <el-container class="layout-view">
    <el-header height="50px">头</el-header>
    <el-container>
      <el-aside width="230px">
        <sidebar>sidebar</sidebar>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import sidebar from './components/Sidebar/index.vue'
export default {
  components: {
    sidebar
  }
}
</script>

<style lang="less" scoped>
.layout-view {
  height: 100vh;
  overflow: hidden;
}
.layout-view .el-container {
  height: 100px;
}
</style>
