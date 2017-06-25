import Formatter from '@/utils/formatter'

export default class Column {

  constructor({
    attribute,
    label,
    summary = false,
    width,
  }) {

    this.attribute = attribute;
    this.label = label;
    this.summary = summary;

    this.width = width;

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



  renderDataCell(h, {
    row,
    index
  }) {
    return h('td', {
      class: this.renderDataClass(),
      domProps: {
        innerHTML: this.renderDataCellContent({
          row,
          index
        })
      }
    })
  }
  renderDataCellContent({
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
    return Formatter.format(this.getFootCellValue(data), this.format);
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
