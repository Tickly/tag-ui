import Column from './Column'

export default class TemplateColumn extends Column {
  constructor(options) {
    super(options);

    var {
      template = null,
    } = options;

    this.template = template;
  }

  renderDataCellContent(h, options, parent) {
    return this.template.call(parent, h, options)
  }
}
