export default class Column {




  constructor({
    attribute,
    label
  }) {

    this.attribute = attribute;
    this.label = label;
  }

  // 渲染一个th
  renderHeaderCell(h, column) {
    return h('th', {
      attrs: {
        // idx: 'foo'
      },
      domProps: {
        innerHTML: this.renderHeaderCellContent()
      }
    })
  }
  renderHeaderCellContent() {
    return this.label || this.attribute;
  }




  renderDataCell(h) {
    return h('td')
  }
  renderDataCellContent() {
    return this.content;
  }

}
