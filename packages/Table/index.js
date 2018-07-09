import TagTable from './src/table'
import TagTableColumn from './src/table-column'

TagTable.install = function (Vue) {
  Vue.component(TagTable.name, TagTable)
  Vue.component(TagTableColumn.name, TagTableColumn)
}

export default TagTable
