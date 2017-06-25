export default class GridView {


  constructor(options) {
    this.renderProxy = null;
  }


  render(h, {
    data,
    columns
  }) {
    return h('table', {
      class: ['table']
    }, [
      this.renderColGroup(h, columns),
      this.renderTableHead(h, columns),
      this.renderTableBody(h, data, columns),
      this.renderTableFoot(h),
    ])
  }
  renderColGroup(h, columns) {
    return h('colgroup', {}, columns.map(col => {
      return h('col', {
        attrs: {
          width: col.width,
        }
      });
    }))
  }


  renderTableHead(h, columns) {
    return h('thead', {}, [
      h('tr', {}, [
        columns.map(col => {
          return col.renderHeaderCell(h);
        })
      ])
    ])
  }


  renderTableBody(h, data, columns) {
    return h('tbody', {}, data.map((row, index) => {
      return h('tr', {}, columns.map(col => {
        return col.renderDataCell(h, {
          row,
          index
        });
      }))
    }))
  }
  renderTableFoot(h) {
    return h('tfoot')
  }


}
