// 引入样式
import './libs/bootstrap'

import Vue from 'vue'
import router from './router'

// import TagUI from '../dist'
import TagUI from '../src'

import App from './App'



Vue.use(TagUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
