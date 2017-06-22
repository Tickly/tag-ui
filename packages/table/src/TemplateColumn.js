import Column from './Column'

export default class TemplateColumn extends Column {
  constructor(options) {
    super(options);

    var {
      template = null,
    } = options;

    this.template = template;
  }
}
