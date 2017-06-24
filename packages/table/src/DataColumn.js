import Column from './Column'
import Formatter from '@/utils/formatter'
import Type from '@/utils/type'


export default class DataColumn extends Column {
  constructor(options) {
    super(options);

    var {
      format = 'text',
    } = options;

    // console.log(format);
    this.format = format;
  }

  parseFormat(format) {
    if (Type.isString(format)) {

    }
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
