<script>
export default {
  render(h) {
    return <thead>
      <tr>
        {
          this._l(this.columns, (col, colIndex) => {
            return col.renderHeaderCell(h, col)
          })
        }
      </tr>
    </thead>
  },
  props: {
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