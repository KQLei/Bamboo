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
  justify-content: flex-start;
  align-items: center;
  .icon {
    font-size: 16px;
    margin-right: 10px;
  }
}
</style>
