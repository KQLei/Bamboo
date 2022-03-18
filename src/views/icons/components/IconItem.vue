<template>
  <el-tooltip effect="dark" placement="top" class="icon-item">
    <div slot="content">
      <slot name="tooltip"></slot>
    </div>
    <div>
      <slot name="icon"></slot>
      <span><slot name="iconName"></slot></span>
    </div>
  </el-tooltip>
</template>
<script>
export default {}
</script>

<style lang="less" scoped>
.icon-item {
  width: 20%;
  height: 120px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  font-size: 30px;
  span {
    font-size: 16px;
    text-align: center;
  }
}
</style>
