<template>
  <div class="flex flex-wrap">
    <div v-for="item of svgIcons" :key="item">
      <el-tooltip effect="dark" placement="top">
        <div slot="content">
          {{ generateIconCode(item) }}
        </div>
        <div class="icon-item">
          <svg-icon :icon-name="item" />
          <span>{{ item }}</span>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import svgIcons from './svg-icons'

export default {
  name: 'Icons',
  data() {
    return {
      svgIcons
    }
  },
  methods: {
    generateIconCode(symbol) {
      return `<svg-icon icon-name="${symbol}" />`
    }
  }
}
</script>

<style lang="less" scoped>
.icon-item {
  font-size: 25px;
  color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
</style>
