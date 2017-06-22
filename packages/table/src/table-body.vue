<script>
export default {
  render(h) {
    return <tbody>
      {
        this._l(this.data, (row, rowIndex) =>
          <tr>
            {
              this._l(this.columns, (column, colIndex) => {
                return column.renderDataCell(h, { row, rowIndex, column })
              })
            }
          </tr>
        )
      }
    </tbody>
  },
  props: {
    data: Array,
    columns: Array,
  },
  methods: {
    renderClass(col) {
      var classes = [];

      if (col.hAlign) classes.push('text-' + col.hAlign);
      classes.push('vAlign-middle');

      return classes;
    }
  }
}
</script>

