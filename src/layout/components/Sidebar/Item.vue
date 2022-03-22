<template>
  <div class="nav-item">
    <svg-icon v-if="icon !== ''" class="icon" :icon-name="icon" />
    <span v-if="title !== ''" class="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.nav-item {
  display: flex;
  align-items: center;
  height: 56px;
  min-width: 64px;
  .icon {
    font-size: 18px;
  }
  span {
    margin-left: 15px;
  }
}
</style>
