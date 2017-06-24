import Column from './Column'

export default class TemplateColumn extends Column {
  constructor(options) {
    super(options);

    var {
      template = null,
    } = options;

    this.template = template;
  }


  renderDataCell(h, data, tbody) {
    // console.log(tbody._renderProxy);
    return h('td', {
      class: this.renderDataClass(),
      domProps: {
        // innerHTML: this.renderDataCellContent(data)
      }
    }, [this.template(h, data)])
  }
}
