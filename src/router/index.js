import Vue from 'vue'
import Router from 'vue-router'
// 预览界面
const index = () => import('@/views/index/index.vue');

// 搜索页面
const search = () => import('@/views/searchPage/index/index.vue');

// 小区住宅展示页面
const housingEstate = () => import('@/views/housingEstate/index.vue');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/housing-estate',
      name: 'housingEstate',
      component: housingEstate
    }
  ]
})
