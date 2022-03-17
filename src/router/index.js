import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入整体框架布局页
import Layout from '@/layout'
/**
 * hidden:true                   设置为true,不显示在导航栏，默认为false
 * alwaysShow:true               设置为true，不管子导航有几个，都显示在导航栏，默认为false，当子导航数量为1个时，只显示子导航
 * redirect:'noRedirect'         设置为noRedirect，在面包屑导航中不可点击
 *
 * name:'router-name'            设置路由名称，与页面name保持一致，这样在<keep-alive>中方便使用
 * meta:{
 *   roles:['admin','editor']    设置访问当前路由，所需角色
 *   title:'title'               设置路由在侧边栏和面包屑中展示的名字
 *   icon:'svg-name'             设置路由显示图标名称
 *   noCache:true                设置为true，则不需要被<keep-alive>缓存
 *   breadcrumb:false            设置为false，则不会再面包屑中显示，默认为true
 *   affix:true                  设置为true，则会固定再tags-view中，默认为false
 *   activeMenu:'/article/list'  设置该路由对应导航栏高亮项，默认为自身路由
 * }
 *
 *
 *
 *
 */

export const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/icon',
    component: Layout,
    name: 'Icon',
    meta: {
      title: '图标',
      icon: 'icon'
    },
    children: [
      {
        path: 'my',
        component: () => import('@/views/icons/index'),
        name: 'MyIcon',
        meta: { title: '我的图标', noCache: true }
      },
      {
        path: 'ElementIcon',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'ElementUI图标', noCache: true }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
