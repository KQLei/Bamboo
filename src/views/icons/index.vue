<template>
  <div class="flex flex-wrap">
    <icon-item
      v-for="item of svgIcons"
      :key="item"
      @click.native="handlerClipboard(generateIconCode(item), $event)"
    >
      <template v-slot:tooltip>
        {{ generateIconCode(item) }}
      </template>
      <template v-slot:icon>
        <svg-icon :icon-name="item" />
      </template>
      <template v-slot:iconName>{{ item }}</template>
    </icon-item>
  </div>
</template>

<script>
import IconItem from './components/IconItem'

import svgIcons from './svg-icons'

import clipboard from '@/utils/clipboard'

export default {
  name: 'Icons',
  components: {
    IconItem
  },
  data() {
    return {
      svgIcons
    }
  },
  methods: {
    generateIconCode(symbol) {
      return `<svg-icon icon-name="${symbol}" />`
    },
    handlerClipboard(text, event) {
      clipboard(text, event)
    }
  }
}
</script>
