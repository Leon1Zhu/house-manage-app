import Vue from 'vue'
import Router from 'vue-router'

// 预览界面
const index = () => import('@/views/index/index.vue');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/housing-estate',
      name: 'housingEstate',
      component: () => import('@/views/housingEstate/index.vue')
    }
  ]
})
