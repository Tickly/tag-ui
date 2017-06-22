export default class Column {

  constructor({
    attribute,
    label
  }) {

    this.attribute = attribute;
    this.label = label;

    this.vAlign = 'middle';
    this.hAlign = 'center';
  }

  // 渲染一个th
  renderHeaderCell(h, column) {
    return h('th', {
      attrs: {},
      class: this.renderHeaderClass(),
      domProps: {
        innerHTML: this.renderHeaderCellContent()
      }
    })
  }
  renderHeaderCellContent() {
    return this.label || this.attribute;
  }


  renderHeaderClass() {
    var classes = [];

    classes.push('text-' + this.hAlign);
    classes.push('vAlign-' + this.vAlign);

    return classes;
  }



  renderDataCell(h, data) {
    return h('td', {
      class: this.renderDataClass(),
      domProps: {
        innerHTML: this.renderDataCellContent(data)
      }
    })
  }
  renderDataCellContent({
    row,
    column
  }) {
    if (column.attribute)
      return row[column.attribute]
    return;
  }
  renderDataClass() {
    var classes = [];
    classes.push('text-' + this.hAlign);
    classes.push('vAlign-' + this.vAlign);
    return classes;
  }

}
