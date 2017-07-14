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
        options: {
            type: Object,
            default: {},
        },
        data: {
            type: Array,
            required: true,
        },
        columns: {
            type: Array,
            required: true,
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

            this.columns_array = this.columns.map(column => {
                let type = typeof column;
                if ('string' === type) {
                    return this.createDataColumn(column)
                } else if ('object' === type) {
                    if (column.type) {
                        if (ColumnClasses[column.type]) {
                            return new ColumnClasses[column.type](column);
                        }
                    }
                }
                return new DataColumn(column);
            })
        },
        createDataColumn(text) {
            var [attribute, label] = text.split(':');
            if (!label) label = attribute;
            return new DataColumn({
                attribute,
                label,
            })
        }
    },
    render(h) {
        // console.log(this.$parent);
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
</style>