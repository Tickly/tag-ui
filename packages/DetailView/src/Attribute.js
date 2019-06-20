import UtilsType from '@/utils/type'
import TagFormatter from 'tg-formatter'

class Attribute {
  constructor(_options) {
    let attribute, format, label, value, type, options, slots = {};

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
        slots,
      } = _options);
    }


    this.attribute = attribute;
    this.format = format || 'text';
    this.label = label;
    this.type = type || 'text';
    this.options = Object.assign({}, options);
    this.slots = slots;
  }


  getValue(model) {
    return model[this.attribute]
  }
  getDisplayValue(model) {
    return TagFormatter.format(this.getValue(model), this.format);
  }


  getLabel(labels) {
    return this.label || labels[this.attribute] || this.attribute
  }


  render(h, mode, model, labels, errors) {
    return h('tr', {}, [
      h('td', {}, this.getLabel(labels)),
      h('td', {}, this.renderContent(h, mode, model, errors)),
    ])
  }

  renderContent(h, mode, model, errors) {
    var nodes = [];
    if (mode === 'view')
      nodes.push(h('div', this.getDisplayValue(model)));

    if (mode === 'edit') {
      nodes.push(h('div', [
        this.slots.edit,
        this.renderError(h, errors[this.attribute])
      ]))
    }

    return nodes
  }

  renderError(h, errors) {
    if (errors && errors.length) {
      return h('div', {
        class: 'attribute-error'
      }, errors.map(err => h('p', {
        class: 'text-danger'
      }, err)))
    }
  }

}

export default Attribute
