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
    if (col.attribute) {
      return row[col.attribute]
    }
    if ('function' === typeof col.value) {
      return col.value(row);
    }
    return null;
  }
}
