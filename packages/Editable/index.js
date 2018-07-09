import TagEditable from './src/editable'

TagEditable.install = Vue =>{
  Vue.component(TagEditable.name, TagEditable);
}

export default TagEditable