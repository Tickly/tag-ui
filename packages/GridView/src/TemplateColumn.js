import Column from './Column'

export default class TemplateColumn extends Column {
  constructor(options) {
    super(options);

    var {
      template = null,
        slot,
    } = options;

    this.template = template;
    this.slot = slot;
  }

  renderDataCellContent(h, options, parent, table) {
    // console.log(parent);
    if (this.template) {
      return this.template.call(parent, h, options)
    }
    return h('div', parent.$scopedSlots[this.slot]);
  }
}
