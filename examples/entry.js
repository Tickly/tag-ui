import Vue from 'vue'
import router from './router'

import './bootstrap'

// import TagUI from '../dist/static/js/app'
import TagUI from '../src/main'

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
