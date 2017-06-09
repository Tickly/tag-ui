// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import components from './components/components'

import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

for (var key in components) {
  if (components.hasOwnProperty(key)) {
    var component = components[key];
    Vue.component(component.name, component);
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
