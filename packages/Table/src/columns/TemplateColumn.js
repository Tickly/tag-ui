import Column from './Column'

export default class TemplateColumn extends Column {
  constructor(options) {
    super(options);

    let {} = options;
  }

  renderDataCellContent(h, {
    row
  }) {
    // console.log(parent);
    // if (this.template) {
    //   return this.template.call(parent, h, options)
    // }
    return this.component.$scopedSlots.default(row);
  }
}
