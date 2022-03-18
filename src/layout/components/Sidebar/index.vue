<template>
  <el-aside :width="variables.sideWidth">
    <el-menu
      :default-active="activeMenu"
      :background-color="variables.sidebarBg"
      :text-color="variables.sidebarText"
      :active-text-color="variables.sidebarActiveText"
      @select="selectMenuHandle"
    >
      <template v-for="nav of navs">
        <el-submenu
          v-if="nav.children.length > 1"
          :key="nav.name"
          :index="nav.name"
          class="submenu-popper"
        >
          <template slot="title">
            <item :icon="nav.meta.icon" :title="nav.meta.title" />
          </template>
          <el-menu-item
            v-for="item of nav.children"
            :key="item.name"
            :index="item.name"
          >
            <item :title="item.meta.title" />
          </el-menu-item>
        </el-submenu>
        <el-menu-item
          v-else
          :key="nav.children[0].name"
          :index="nav.children[0].name"
        >
          <item
            :icon="nav.children[0].meta.icon"
            :title="nav.children[0].meta.title"
          />
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
import Item from './Item'

import { routes } from '@/router'

import variables from '@/assets/styles/variables.less'

export default {
  components: {
    Item
  },
  data() {
    return {}
  },
  computed: {
    variables() {
      return variables
    },
    navs() {
      return routes
    },
    activeMenu() {
      const route = this.$route
      const { name } = route
      return name
    }
  },
  methods: {
    selectMenuHandle(index) {
      this.$router.replace({ name: index })
    }
  }
}
</script>
