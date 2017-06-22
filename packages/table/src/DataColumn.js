import Column from './Column'
import Formatter from './formatter'


export default class DataColumn extends Column {
  constructor(options) {
    super(options);
    var {
      format = 'text',
    } = options;


    this.format = format;
  }


  getDataCellValue(row, col) {
    if (col.attribute) {
      return row[col.attribute]
    }
    return null;
  }

  renderDataCellContent({
    row,
    column
  }) {
    return Formatter.format(this.getDataCellValue(row, column), this.format)
  }

}
