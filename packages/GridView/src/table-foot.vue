<script>
export default {
  render(h) {
    return <tfoot>
      <tr>
        {
          this._l(this.columns, column => {
            return column.renderFootCell(h, this.data, column)
          })
        }
      </tr>
    </tfoot>
  },
  props: {
    data: Array,
    columns: Array,
  },
  methods: {}
}
</script>

