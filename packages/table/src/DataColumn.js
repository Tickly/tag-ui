import Column from './Column'
import Formatter from '@/utils/formatter'
import Type from '@/utils/type'


export default class DataColumn extends Column {
  constructor(options) {
    super(options);

    var {
      format = 'text',
    } = options;

    this.format = format;
  }



  renderDataCellContent(h, {
    row
  }) {
    return Formatter.format(this.getDataCellValue({
      row
    }), this.format)
  }

}
