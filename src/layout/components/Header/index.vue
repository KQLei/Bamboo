<template>
  <div class="header">
    <div class="title">
      <img src="../../../assets/logo.svg" alt="图标" />
      <span>Bamboo Admin</span>
    </div>

    <div class="menu cursor-pointer">
      <el-dropdown @command="menuCommandHandle">
        <div>
          <img src="../../../assets/head.png" alt="头像" />
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="mine">个人中心</el-dropdown-item>
          <el-dropdown-item command="repository">项目地址</el-dropdown-item>
          <el-dropdown-item command="exit" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    menuCommandHandle(command) {
      switch (command) {
        case 'mine':
          break
        case 'repository':
          window.open('https://github.com/KQLei/Bamboo')
          break
        case 'exit':
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;

  .title {
    font-size: 20px;
    img {
      height: 40px;
      width: 40px;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
  .menu {
    img {
      border-radius: 50%;
      vertical-align: middle;
      height: 40px;
      width: 40px;
    }
  }
}
</style>
