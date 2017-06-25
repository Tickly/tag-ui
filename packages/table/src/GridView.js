export default class GridView {


  constructor(options) {
    let {
      showPageSummary = false,
    } = options;


    this.showPageSummary = showPageSummary;


    this.renderProxy = null;
  }


  render(h, {
    data,
    columns
  }) {
    return h('table', {
      class: ['table', 'table-bordered']
    }, [
      this.renderColGroup(h, columns),
      this.renderTableHead(h, columns),
      this.renderTableBody(h, data, columns),
      this.renderTableFoot(h, data, columns),
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
  renderTableFoot(h, data, columns) {
    if (!this.showPageSummary) return;
    return h('tfoot', {}, columns.map(col => {
      return col.renderFootCell(h, data);
    }))
  }


}
