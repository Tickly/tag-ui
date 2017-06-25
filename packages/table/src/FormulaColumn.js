import DataColumn from './DataColumn'

export default class FormulaColumn extends DataColumn {
  constructor(options) {
    super(options)

    var {
      value = null,
    } = options;

    this.value = value;
  }

  getDataCellValue({
    row
  }) {
    return this.value(row);
  }

  getFootCellValue(data, column) {
    var array = data.map(v => {
      return column.value(v);
    });
    return array.sum();
  }


}
