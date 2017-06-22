<script>
export default {
  render(h) {
    return <tbody>
      {
        this._l(this.data, (row, rowIndex) =>
          <tr>
            {
              this._l(this.columns, (col, colIndex) =>
                <td class={this.renderClass(col)}>
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
  },
  created() {
    // console.log(this._l);
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

