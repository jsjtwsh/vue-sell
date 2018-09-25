import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// import goods from 'components/goods/goods'
// import ratings from 'componets/ratings/ratings'
// import seller from 'componets/seller/seller'

import './common/stylus/index.styl'
// import VueResource from 'vue-resource';
Vue.config.productionTip = false

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  router,
  render: h => h(App)
})
