<template>
  <el-menu :default-active="activeMenu" @select="selectMenuHandler">
    <div v-for="nav of navs" :key="nav.name">
      <el-submenu v-if="nav.children.length > 1" :index="nav.name">
        <template slot="title">
          <svg-icon :icon-name="nav.meta.icon" />
          <span>{{ nav.meta.title }}</span>
        </template>
        <el-menu-item
          v-for="item of nav.children"
          :key="item.name"
          :index="item.name"
        >
          {{ item.meta.title }}
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-else :index="nav.children[0].name">
        <svg-icon :icon-name="nav.children[0].meta.icon" />
        <span> {{ nav.children[0].meta.title }}</span>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script>
import { routes } from '@/router'
export default {
  data() {
    return {}
  },
  computed: {
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
    selectMenuHandler(index) {
      this.$router.replace({ name: index })
    }
  }
}
</script>

<style></style>
