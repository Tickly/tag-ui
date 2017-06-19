import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/layout'

import examples from '../examples'


Vue.use(Router)


var routes = [{
  path: '/',
  component: Layout
}]

for (var key in examples) {
  if (examples.hasOwnProperty(key)) {
    var example = examples[key];

    routes.push({
      path: '/' + key,
      component: example,
    })
  }
}


export default new Router({
  mode: 'history',
  routes,
})
