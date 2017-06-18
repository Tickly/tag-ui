<script>
export default {
  render(h) {

    return <tbody>
      {
        this._l(this.data, (row, rowIndex) =>
          <tr>
            {
              this._l(this.columns, (col, colIndex) =>
                <td>
                  {
                    col.render.call(this._renderProxy, h, { row, rowIndex, col, colIndex, parent: this.$parent })
                  }
                </td>
              )
            }
          </tr>
        )
      }
    </tbody>
  },
  props: {
    data: Array,
    columns: Array,
  }
}
</script>