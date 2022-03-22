import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['deviceWidth'])
  },
  beforeMount() {
    window.addEventListener('resize', this.$_calcuClientWidth)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_calcuClientWidth)
  },
  methods: {
    $_calcuClientWidth() {
      this.$store.commit('app/SET_DEVICE_WIDTH', innerWidth)
    }
  }
}
