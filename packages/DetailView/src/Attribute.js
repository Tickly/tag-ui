import UtilsType from '@/utils/type'
import Formatter from '@/utils/formatter'


export default class Attribute {
  constructor(options) {
    let attribute, format, label, value;

    if (UtilsType.isString(options)) {
      [attribute, format, label] = options.split(':');
    } else if (UtilsType.isObject(options)) {
      ({
        attribute,
        format,
        label,
        value,
      } = options);
    }

    if (attribute) {
      if (!label) {
        label = attribute;
      }
    }


    this.attribute = attribute;
    this.format = format || 'text';
    this.label = label;
  }


  getValue(model) {
    return model[this.attribute]
  }
  getDisplayValue(model) {
    return Formatter.format(this.getValue(model), this.format);
  }


  getLabel() {
    return this.label
  }


  render(h, mode, model) {
    return h('tr', {}, [
      h('td', {}, this.getLabel()),
      h('td', {}, this.renderContent(h, mode, model)),
    ])
  }

  renderContent(h, mode, model) {
    var nodes = [];
    if (mode === 'view')
      nodes.push(h('div', this.getDisplayValue(model)));

    if (mode === 'edit') {
      nodes.push(h('div', [this.renderContentEdit(h, model)]))
    }

    return nodes
  }

  renderContentEdit(h, model) {
    return h('input', {
      domProps: {
        value: this.getValue(model)
      },
      style: {
        width: '100%'
      }
    })
  }

}
