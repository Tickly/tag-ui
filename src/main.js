// 扩展一些方法
import './extends'

import components from './components'


const install = function (Vue) {
  if (install.installed) return;

  for (var key in components) {
    if (components.hasOwnProperty(key)) {
      var component = components[key];
      Vue.component(component.name, component);
    }
  }

}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '',
  install,
  ...components,
}
