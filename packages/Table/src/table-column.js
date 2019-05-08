import ColumnClasses from './columns'


const Component = {
  name: 'TagTableColumn',
  props: {
    type: {
      default: 'data',
      validator (value) {
        return Object.keys(ColumnClasses).includes(value);
      }
    },
    attr: String,
    label: String,
    summary: Boolean,
    format: [String, Array],
    formula: Function,
    width: String,
    enum: Object,
  },
  created () {
    let ColumnClass = ColumnClasses[this.type];

    let label = this.label;
    if (!label) {
      label = this.$parent.labels[this.attr];
    }


    let column = new ColumnClass({
      attribute: this.attr,
      label,
      summary: this.summary,
      format: this.format,
      formula: this.formula,
      width: this.width,
      enum: this.enum,

      component: this,
    });

    this.$parent.appendColumn(column);
  },
  render (h) {
    // return h('div', 9)
  },
}

export default Component
