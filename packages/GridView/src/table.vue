<script>
import GridView from './GridView'

import DataColumn from './DataColumn'
import SerialColumn from './SerialColumn'
import FormulaColumn from './FormulaColumn'
import TemplateColumn from './TemplateColumn'


const ColumnClasses = {
    data: DataColumn,
    serial: SerialColumn,
    formula: FormulaColumn,
    template: TemplateColumn,
}


export default {
    name: 'TagTable',
    props: {
        data: {
            type: Array,
            required: true,
            default: () => [],
        },
        columns: {
            type: Array,
            required: true,
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
    },
    data() {
        return {
            columns_array: [],
        }
    },
    created() {
        this.initColumns();
    },
    computed: {

    },
    methods: {
        // 初始化列
        initColumns() {
            if (!this.columns) return;

            this.columns_array = this.columns
                .map(column => {
                    if ('string' === typeof column) {
                        if ('#' === column) {
                            column = {
                                type: 'serial'
                            }
                        } else {
                            column = DataColumn.parse(column)
                        }
                    }
                    column.type = column.type || 'data';

                    return new ColumnClasses[column.type](column);
                })

        },
    },
    render(h) {
        return (new GridView({
            showPageSummary: this.showPageSummary,
            hover: this.hover,
            bordered: this.bordered,
            striped: this.striped,
            responsive: this.responsive,
        }, this.$parent)).render(h, {
            data: this.data,
            columns: this.columns_array,
        })
    }
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

  td {
    white-space: nowrap;
  }
}
</style>