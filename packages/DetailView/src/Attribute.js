import UtilsType from '@/utils/type'
import TagFormatter from 'tag-formatter'





class Attribute {
  constructor(_options) {
    let attribute, format, label, value, type, options;

    if (UtilsType.isString(_options)) {
      [attribute, format, label] = _options.split(':');
    } else if (UtilsType.isObject(_options)) {
      ({
        attribute,
        format,
        label,
        value,
        type,
        options,
      } = _options);
    }

    if (attribute) {
      if (!label) {
        label = attribute;
      }
    }


    this.attribute = attribute;
    this.format = format || 'text';
    this.label = label;
    this.type = type || 'text';
    this.options = Object.assign({}, options);
  }


  getValue(model) {
    return model[this.attribute]
  }
  getDisplayValue(model) {
    return TagFormatter.format(this.getValue(model), this.format);
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
    if (Attribute.InputList.contains(this.type)) {
      return this.renderInput(h, model);
    }

    return h(this.type, this.options);
  }


  renderInput(h, model) {
    return h('input', {
      attrs: {
        type: this.type,
      },
      domProps: {
        value: this.getValue(model)
      },
      style: {
        width: '100%'
      }
    })
  }


}



Attribute.InputList = [
  'text',
  'number',
  'date',
]

export default Attribute
