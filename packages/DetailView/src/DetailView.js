import UtilsType from '@/utils/type'

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

    this.attributes = this.attributes.map((attribute, i) => {
      let newAttribute = {};

      if (UtilsType.isString(attribute)) {
        newAttribute.attribute = attribute;
      }


      newAttribute.value = this.model[newAttribute.attribute];

      return newAttribute;
    })

  }

  renderCaption(h, attribute) {
    return attribute.attribute
  }

  renderContent(h, attribute) {
    var nodes = [];
    nodes.push(h('div', this.model[attribute.attribute]));

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
