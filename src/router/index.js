import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const routes = [{
//   path: '/',
//   redirect: '/goods'
// }, {
//   path: '/goods',
//   component: () => import('@/components/goods/goods.vue')
// }, {
//   path: '/ratings',
//   component: () => import('@/components/ratings/ratings.vue')
// }, {
//   path: '/sell',
//   component: () => import('@/components/sell/sell.vue')
// }]

export default new Router({
//   mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    redirect: '/goods'
  }, {
    path: '/goods',
    component: () => import('../components/goods/goods.vue')
  }, {
    path: '/ratings',
    component: () => import('../components/ratings/ratings.vue')
  }, {
    path: '/sell',
    component: () => import('../components/sell/sell.vue')
  }]
})
