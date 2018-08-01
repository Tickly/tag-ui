import Column from './Column'

export default class CheckboxColumn extends Column {

  constructor(options) {
    super(options);

    this.selectedIndexHash = {};

    this.selectedAll = true;
  }


  get selectedIndex() {
    return Object.keys(this.selectedIndexHash).filter(key => this.selectedIndexHash[key])
  }



  renderHeaderCellContent(h) {
    return h('input', {
      attrs: {
        type: 'checkbox'
      },
      on: {
        change: e => {
          this.selectedAll = e.target.value;
        }
      }
    })
  }

  renderDataCellContent(h, {
    row,
    index
  }) {
    return h('input', {
      attrs: {
        type: 'checkbox',
      },
      domProps: {
        checked: this.selectedAll,
      },
      on: {
        change: e => {
          this.selectedIndexHash[index] = e.target.checked;
        }
      },
    })
  }
}
