import Column from './Column'

export default class SerialColumn extends Column {
  constructor(options) {
    super(options);

    this.label = '#';
    this.width = '50';
  }

  getDataCellValue({
    index
  }) {
    return index + 1
  }


}
