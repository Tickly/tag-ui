import TagFormatter from 'tag-formatter'

export default class Column {

  constructor({
    attribute,
    label,
    summary = false,
    width,
    component,
  } = {}) {

    this.attribute = attribute;
    this.label = label;
    this.summary = summary;

    this.width = width;

    this.vAlign = 'middle';
    this.hAlign = 'center';

    this.component = component;

    // 所有该列的值
    this.column_values = [];
  }

  // 渲染一个列标题th
  renderHeaderCell(h, column) {
    return h('th', {
      attrs: {},
      class: this.renderHeaderClass(),
    }, [
      this.renderHeaderCellContent(h, column)
    ])
  }
  // 渲染列标题内容
  renderHeaderCellContent() {
    return this.label || this.attribute;
  }


  renderHeaderClass() {
    var classes = [];

    classes.push('text-' + this.hAlign);
    classes.push('vAlign-' + this.vAlign);

    return classes;
  }



  renderDataCell(h, options, parent) {
    return h('td', {
      class: this.renderDataClass(),
    }, [this.renderDataCellContent(h, options, parent)])
  }

  renderDataCellContent(h, {
    row,
    index
  }) {
    return this.getDataCellValue({
      row,
      index
    });
  }

  // 获取单元格的value，不同类型的列可重写该方法，比如公式列
  getDataCellValue({
    row
  }) {
    if (this.attribute)
      return row[this.attribute]
    return null;
  }
  renderDataClass() {
    var classes = [];
    classes.push('text-' + this.hAlign);
    classes.push('vAlign-' + this.vAlign);
    return classes;
  }





  renderFootCell(h, data) {
    return h('td', {
      class: this.renderDataClass(),
    }, [this.renderFootCellContent(h, data)])
  }
  renderFootCellContent(h, data) {
    if (!this.summary) return;
    return TagFormatter.format(this.getFootCellValue(data), this.format);
  }
  renderFootClass() {
    var classes = [];
    classes.push('text-' + this.hAlign);
    classes.push('vAlign-' + this.vAlign);
    return classes;
  }
  getFootCellValue(data) {
    return data.map(row => {
      return this.getDataCellValue({
        row
      })
    }).sum();
  }





  setPageRows(data) {
    this.column_values = data.map(row => {
      this
    });
  }


}
