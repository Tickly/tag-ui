export default class GridView {
  constructor(options, renderProxy) {
    // let {
    //   hover,
    //   striped,
    //   bordered,
    //   showPageSummary = false,
    // } = options;


    this.showPageSummary = false;
    this.hover = false;
    this.bordered = false;
    this.striped = false;
    this.condensed = false;
    this.responsive = false;

    Object.assign(this, options);


    this.renderProxy = renderProxy;
  }


  render(h, {
    data,
    columns
  }) {
    return h('div', {
      // class: 'table-responsive'
      class: this.renderWrapClass()
    }, [
      this.renderTable(h, {
        data,
        columns
      }),
    ])
  }

  renderTable(h, {
    data,
    columns
  }) {
    return h('table', {
      class: this.renderTableClass()
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

  renderWrapClass() {
    var classes = ['tag-gridview'];
    // if(this.responsive) classes.push('tab')
    return classes;
  }
  renderTableClass() {
    var classes = ['table'];
    if (this.hover) classes.push('table-hover');
    if (this.bordered) classes.push('table-bordered');
    if (this.striped) classes.push('table-striped');
    return classes;
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
        }, this.renderProxy);
      }))
    }))
  }
  renderTableFoot(h, data, columns) {
    if (!this.showPageSummary) return;
    return h('tfoot', {}, [
      h('tr', {}, columns.map(col => {
        return col.renderFootCell(h, data);
      }))
    ])
  }


}
