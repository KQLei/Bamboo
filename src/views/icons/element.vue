<template>
  <div class="flex flex-wrap icon-wrap">
    <icon-item v-for="item of elIcons" :key="item">
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
    }
  }
}
</script>
