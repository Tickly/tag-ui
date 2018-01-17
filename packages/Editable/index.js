import TagEditable from './src/editable'

TagEditable.install = Vue =>{
  Vue.components(TagEditable.name, TagEditable);
}

export default TagEditable