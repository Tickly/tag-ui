<script>
import GridView from './GridView'

export default {
    name: 'TagTable',
    props: {
        data: {
            type: Array,
            required: true,
            default: () => [],
        },
        labels: {
            type: Object,
            default: () => ({}),
        },
        showPageSummary: Boolean,
        hover: Boolean,
        bordered: Boolean,
        striped: Boolean,
        responsive: Boolean,
        model: Function,
    },
    data() {
        return {
            columns_array: [],
        }
    },
    created() { },
    computed: {},
    methods: {
        appendColumn(column) {
            this.columns_array.push(column)
        }
    },
    render(h) {
        return h('div', [
            (new GridView({
                showPageSummary: this.showPageSummary,
                hover: this.hover,
                bordered: this.bordered,
                striped: this.striped,
                responsive: this.responsive,
            }, this.$parent)).render(h, {
                data: this.data,
                columns: this.columns_array,
            }),
            this.$slots.default,
        ])
    },
}
</script>
<style lang="less">
.table {
  border: 1px solid #ddd;
  .vAlign-middle {
    vertical-align: middle;
  }
}

.tag-gridview {
  overflow: scroll;

  //   td {
  // white-space: nowrap;
  //   }
}
</style>