import UtilsType from '@/utils/type'
import Formatter from '@/utils/formatter'


export default class DetailView {
  constructor(options) {

    let {
      model,
      attributes,
      mode = 'view',
    } = options;

    /**
     * 显示模式，有 view,edit 两种
     */
    this.mode = mode;

    this.model = model;
    this.attributes = attributes;



    this.init();

  }

  init() {
    if (this.model === null)
      throw new Error('必须指定 model 属性')

    this.normalizeAttributes();

  }

  normalizeAttributes() {
    if (this.attributes === null) {
      throw new Error('必须指定 attribute 属性')
    }

    this.attributes = this.attributes.map((_attribute, i) => {
      let attribute, format, label, value;

      if (UtilsType.isString(_attribute)) {
        [attribute, format, label] = _attribute.split(':');
      } else if (UtilsType.isObject(_attribute)) {
        ({
          attribute,
          format,
          label,
          value,
        } = _attribute);
      }

      if (!format) {
        format = 'text';
      }

      if (attribute) {
        if (!label) {
          label = attribute;
        }

        if (!value) {
          value = this.model[attribute];
          if (format) {
            value = Formatter[format](value);
          }
        }
      }


      if (UtilsType.isFunction(value)) {
        value = value()
      }

      return {
        attribute,
        label,
        format,
        value,
      };
    })

  }







  renderCaption(h, attribute) {
    return attribute.label
  }

  renderContent(h, attribute) {
    var nodes = [];
    nodes.push(h('div', attribute.value));

    if (this.mode === 'edit') {
      ndoes.push(h('div', this.renderContentEdit(h, attribute)))
    }

    return nodes
  }
  renderContentEdit(h, attribute) {

  }


  renderAttribute(h, attribute) {
    return h('tr', {}, [
      h('td', {}, this.renderCaption(h, attribute)),
      h('td', {}, this.renderContent(h, attribute)),
    ])
  }




}
