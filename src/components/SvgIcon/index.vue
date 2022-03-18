<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-icon"></div>
  <svg v-else :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconHref" />
  </svg>
</template>

<script>
// https://juejin.cn/post/6844903517564436493
import { isExternal } from '@/utils/validate'
export default {
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    isExternal() {
      return isExternal(this.iconName)
    },
    iconHref() {
      return `#icon-${this.iconName}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    },
    styleExternalIcon() {
      return {
        mask: `url(${this.iconName}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.iconName} no-repeat 50% 50%)`
      }
    }
  }
}
</script>

<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
