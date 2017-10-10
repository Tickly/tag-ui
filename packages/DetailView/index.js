import TagDetailView from './src/DetailView.vue'

TagDetailView.install = function (Vue) {
  Vue.component(TagDetailView.name, TagDetailView)
}

export default TagDetailView
