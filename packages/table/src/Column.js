import Formatter from '@/utils/formatter'

export default class Column {

  constructor({
    attribute,
    label,
    summary = false,
  }) {

    this.attribute = attribute;
    this.label = label;
    this.summary = summary;

    this.vAlign = 'middle';
    this.hAlign = 'center';

    // 所有该列的值
    this.column_values = [];
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
    return this.getDataCellValue(row, col);
  }
  getDataCellValue(row, col) {
    if (column.attribute)
      return row[column.attribute]
    return null;
  }
  renderDataClass() {
    var classes = [];
    classes.push('text-' + this.hAlign);
    classes.push('vAlign-' + this.vAlign);
    return classes;
  }





  renderFootCell(h, data, column) {
    return h('td', {
      class: this.renderDataClass(),
    }, [this.renderFootCellContent(h, data, column)])
  }
  renderFootCellContent(h, data, column) {
    if (!column.summary) return;
    return Formatter.format(this.getFootCellValue(data, column), column.format);
  }
  renderFootClass() {
    var classes = [];
    classes.push('text-' + this.hAlign);
    classes.push('vAlign-' + this.vAlign);
    return classes;
  }
  getFootCellValue(data, column) {
    return data.column(column.attribute).sum();
  }





  setPageRows(data) {
    this.column_values = data.map(row => {
      this
    });
  }


}
