// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 扩展一些方法
import './extends'

import components from './components'

import 'bootstrap/dist/css/bootstrap.min.css'



for (var key in components) {
  if (components.hasOwnProperty(key)) {
    var component = components[key];
    Vue.component(component.name, component);
  }
}




export default {
  version: '',
  ...components,
}
