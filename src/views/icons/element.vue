<template>
  <div class="flex flex-wrap icon-wrap">
    <icon-item
      v-for="item of elIcons"
      :key="item"
      @click.native="handlerClipboard(generateIconCode(item), $event)"
    >
      <template v-slot:tooltip>
        {{ generateIconCode(item) }}
      </template>
      <template v-slot:icon>
        <i :class="'el-icon-' + item"></i>
      </template>
      <template v-slot:iconName>{{ item }}</template>
    </icon-item>
  </div>
</template>

<script>
import IconItem from './components/IconItem'

import elIcons from './element-icons'

import clipboard from '@/utils/clipboard'

export default {
  name: 'Icons',
  components: {
    IconItem
  },
  data() {
    return {
      elIcons
    }
  },
  methods: {
    generateIconCode(symbol) {
      return `<i class="el-icon-${symbol}" />`
    },
    handlerClipboard(text, event) {
      console.log(text)
      clipboard(text, event)
    }
  }
}
</script>
