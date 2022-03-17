<template>
  <div>
    <div v-for="item of svgIcons" :key="item">
      <svg-icon :icon-name="item" />
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
      return `<svg-icon icon-name="${symbol}}" />`
    }
  }
}
</script>

<style></style>
