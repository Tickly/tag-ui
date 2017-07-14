import UtilsType from '@/utils/type'
import Attribute from './Attribute'


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
      return new Attribute(_attribute);
    })
  }
}
