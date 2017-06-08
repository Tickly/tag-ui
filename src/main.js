// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Panel from '../packages/panel'

import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

const components = [
  Panel,
]

components.forEach(component => {
  Vue.component(component.name, component);
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
