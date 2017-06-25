import DataColumn from './DataColumn'

export default class FormulaColumn extends DataColumn {
  constructor(options) {
    super(options)

    var {
      formula,
    } = options;

    this.formula = formula;

  }

  getDataCellValue({
    row
  }) {
    return this.formula(row);
  }



}
