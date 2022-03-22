<template>
  <el-container class="layout-view">
    <el-header>
      <header-content />
    </el-header>
    <el-container>
      <sidebar />
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HeaderContent from './components/Header/index.vue'
import Sidebar from './components/Sidebar/index.vue'

export default {
  components: {
    HeaderContent,
    Sidebar
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
