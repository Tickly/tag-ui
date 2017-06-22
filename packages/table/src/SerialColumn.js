import Column from './Column'

export default class SerialColumn extends Column {
  constructor(options) {
    super(options);

    this.label = '#';
  }

  renderDataCellContent({
    rowIndex
  }) {
    return rowIndex + 1
  }
}
