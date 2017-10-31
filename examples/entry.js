import Vue from 'vue'
import router from './router'

// import $ from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap'
// import TagUI from '../dist/static/js/app'
import TagUI from '../src/main'

import App from './App'

global.jQuery = require('jquery');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');


Vue.use(TagUI)
// console.log(TagUI)

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
