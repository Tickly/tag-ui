import TagDropdown from './src/Dropdown.vue'

TagDropdown.install = Vue => {
  Vue.components(TagDropdown.name, TagDropdown)
}

export default TagDropdown
