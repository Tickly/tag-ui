// 扩展一些方法
import './extends'

// import components from './components'
import components from '../packages'

const install = function (Vue) {
  if (install.installed) return;

  for (var key in components) {
    if (components.hasOwnProperty(key)) {
      var component = components[key];

      if (component.install) {
        Vue.use(component);
      } else {
        Vue.component(component.name, component);
      }
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

// console.log(1);
