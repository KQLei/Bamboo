export default {
  data() {
    return {
      $_resizeHandler: null
    }
  },
  mounted() {
    this.initListener()
  },
  activated() {
    if (!this.$_resizeHandler) {
      this.initListener()
    }
    this.resize()
  },
  beforeDestroy() {
    this.destroyListener()
  },
  deactivated() {
    this.destroyListener()
  },
  methods: {
    initListener() {
      this.$_resizeHandler = this.$_.debounce(this.resize, 100)
      window.addEventListener('resize', this.$_resizeHandler)
    },
    destroyListener() {
      window.removeEventListener('resize', this.$_resizeHandler)
      this.$_resizeHandler = null
    },
    resize() {
      const { chart } = this
      chart && chart.resize()
    }
  }
}
