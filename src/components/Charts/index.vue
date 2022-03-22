<template>
  <div ref="chartRef" :style="chartStyle"></div>
</template>

<script>
import resize from './mixins/resize'
export default {
  mixins: [resize],
  props: {
    height: {
      type: String,
      default: '100%'
    },
    width: {
      type: String,
      default: '100%'
    },
    optionData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  computed: {
    chartStyle() {
      return {
        height: this.height,
        width: this.width
      }
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$refs.chartRef)
      this.optionData && this.chart.setOption(this.optionData)
    }
  }
}
</script>

<style></style>
