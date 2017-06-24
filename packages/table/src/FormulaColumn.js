import DataColumn from './DataColumn'

export default class FormulaColumn extends DataColumn {
  constructor(options) {
    super(options)

    var {
      value = null,
    } = options;

    this.value = value;
  }

  getDataCellValue(row, col) {
    return col.value(row);
  }


  getFootCellContent() {

  }

  renderFooterCellContent(h, data, column) {
    console.log(data);
    return data.reduce((a, b) => {
      return 0;
    }, 0);

    // return this.getDataCellValue();
    // return super.renderFootCellContent(h, data, column);
  }
}
