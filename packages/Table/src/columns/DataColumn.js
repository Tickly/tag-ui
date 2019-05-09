import Column from './Column'
import TagFormatter from 'tag-formatter'
import Type from '@/utils/type'

export default class DataColumn extends Column {
  constructor(options) {
    super(options);

    var {
      format = 'text',
    } = options;

    this.format = format;
  }

  renderDataCellContent (h, { row }) {
    let value = this.getDataCellValue({ row })
    return TagFormatter.format(value, this.format)
  }
}

DataColumn.parse = function (str) {
  var [attribute, label] = str.split(':');
  // if (!label) {
  //   label = this.labels[attribute] || attribute;
  // }
  return {
    attribute,
    label,
  }
}
