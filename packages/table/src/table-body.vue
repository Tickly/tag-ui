<script>
export default {
  render(h) {
    return <tbody>
      {
        this._l(this.data, (row, rowIndex) =>
          <tr>
            {
              this._l(this.columns, (column, colIndex) => {
                return column.renderDataCell(h, { row, rowIndex, column }, this)
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
}
</script>

