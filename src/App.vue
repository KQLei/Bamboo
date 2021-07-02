<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    {{ nowTime }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { parseTime } from '@/utils/index.js'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    nowTime() {
      return parseTime(new Date(), '{y}-{m}-{d} {h}:{i}:{s} {a}')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
