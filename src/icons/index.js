import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

// 全局注册自定义的svg图标组件
Vue.component('svg-icon', SvgIcon)

// 注入svg文件夹下的所有svg文件
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)

requireAll(req)
