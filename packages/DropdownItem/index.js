import TagDropdownItem from './src/DropdownItem.vue'

TagDropdownItem.install = Vue => {
  Vue.components(TagDropdownItem.name, TagDropdownItem);
}

export default TagDropdownItem
