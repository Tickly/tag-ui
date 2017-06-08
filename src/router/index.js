import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'

import Panel from '@/examples/panel'
import Button from '@/examples/button'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Layout
    },
    {
      path: '/panel',
      component: Panel,
    },
    {
      path: '/button',
      component: Button,
    },
  ]
})
