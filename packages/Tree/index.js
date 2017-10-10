import TagTree from './src/tree.vue'

TagTree.install = function (Vue) {
  Vue.component(TagTree.name, TagTree)
}

export default TagTree