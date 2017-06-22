<template>
    <table class="table" :class="tableClass">
        <colgroup>
            <col v-for="(col,i) in _columns" :key="i" :width="_colWidth(col)">
        </colgroup>
        <thead is="table-head" :columns="columns_array"></thead>
        <tbody is="table-body" :columns="columns_array" :data="data"></tbody>
        <!--<table-head :columns="columns_array"></table-head>-->
        <!--<table-body :data="data" :columns="_columns"></table-body>-->
        <!--<tfoot v-if="showSummary">
                    <tr>
                        <th v-for="(col,i) in _columns" :key="i" :class="_summaryCellClass(col)" v-text="_showSummaryContent(col)"></th>
                    </tr>
                </tfoot>-->
    </table>
</template>
<script>
// import Vue from 'vue'
import TableHead from './table-head.vue'
import TableBody from './table-body.vue'
import Formatter from './formatter'
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




function render(h, { row, rowIndex, col, colIndex, parent }) {
    var value = '';
    if (col.renderBody) {
        value = col.renderBody.apply(col, arguments);
    }
    if (col.format) {
        if ('string' === typeof col.format) {
            if ('function' === typeof Formatter[col.format]) {
                value = Formatter[col.format](value);
            }
        } else if ('function' === typeof col.format) {
            // console.log(this);
            value = col.format.call(parent.$parent, h, { row });
        }
    }


    return value
}


const columns = {
    // 默认，或者可以叫data
    default: {
        width: null,
        // 垂直对齐方式 top,middle,bottom
        vAlign: 'middle',
        // 水平对齐方式 left,center,right
        hAlign: 'left',
        renderBody(h, { row, rowIndex, col, colIndex, parent }) {
            return row[col.attribute]
        },
    },
    // 模板
    template: {
        renderBody(h, { row, rowIndex, col, colIndex, parent }) {
            if (parent.$scopedSlots[col.template])
                return h('div', parent.$scopedSlots[col.template]({
                    row, rowIndex,
                    col, colIndex,
                }))
            else
                return h('div', parent.$slots[col.template])
        },
    },
    // 序列
    serial: {
        label: '#',
        width: 50,
        hAlign: 'center',
        renderBody(h, { row, rowIndex, col, colIndex, parent }) {
            return rowIndex + 1
        }
    },
    // 公式
    formula: {
        renderBody(h, { row, rowIndex, col, colIndex, parent }) {
            return col.value({ row })
        },
    }
}



function parseString(str) {
    var [attribute, label] = str.split(':');
    if (!label) label = attribute;
    return {
        label,
        attribute,
        render,
    }
}
function parseObject(object) {
    return Object.assign({}, object, { render });
}


export default {
    name: 'TagTable',
    props: {
        options: {
            type: Object,
            default: {},
        }
    },
    data() {
        return {
            columns_array: [],
        }
    },
    created() {
        // console.log(this)
        this.initColumns();
    },
    computed: {
        data() {
            return this.options.data;
        },
        columns() {
            return this.options.columns;
        },
        hover() {
            return this.options.hover
        },
        bordered() {
            return this.options.bordered
        },
        showSummary() {
            return this.options.showSummary
        },



        _columns() {
            return this.columns.map(col => {
                var obj = {};

                switch (typeof col) {
                    case 'string':
                        obj = parseString(col);
                        break;
                    case 'object':
                        obj = parseObject(col);
                        break;
                    default:
                        break;
                }


                if (columns[obj.type]) {
                    obj = Object.assign({}, columns[obj.type], obj);
                } else {
                    obj = Object.assign({}, columns.default, obj);
                }

                if (!obj.label) {
                    obj.label = obj.attribute;
                }

                return obj;
            })
        },
        tableClass() {
            var obj = {};
            if (this.hover) obj['table-hover'] = true;
            if (this.bordered) obj['table-bordered'] = true;
            return obj;
        },
    },
    methods: {
        // 显示单元格内容
        _showCellContent(row, col, rowIndex) {
            if (col.type === 'serial') {
                return rowIndex + 1
            }
            if (col.type === 'formula') {
                return col.value(row);
            }
            if (col.type === 'action') {
                // console.log(this.$slots[col.template]);
                // this.$crea
                // console.log(this.$createElement('div', this.$slots[col.template]))
                return;
            }

            return row[col.attribute]
        },
        // 显示统计行内容
        _showSummaryContent(col) {
            // if (col.type === 'serial') return '统计'
            if (!col.summary) return
            return this.data.reduce((a, row) => {
                var v;
                if (col.value) {
                    if ('function' === typeof col.value) {
                        v = col.value({ row });
                    }
                } else {
                    v = row[col.attribute];
                }
                a += v;
                return a;
            }, 0)
        },
        // 标题单元格的class
        _headerCellClass(col) {
            var obj = {};
            if (col.hAlign) {
                obj['text-' + col.hAlign] = true;
            }

            return obj;
        },
        // 数据单元格的class
        _cellClass(col) {
            var obj = {};
            if (col.hAlign) {
                obj['text-' + col.hAlign] = true;
            }

            return obj;
        },
        // 统计单元格的class
        _summaryCellClass(col) {
            var obj = {};
            if (col.hAlign) {
                obj['text-' + col.hAlign] = true;
            }
            return obj;
        },
        _colWidth(col) {
            // console.log(col.width);
            if (col.width) return col.width;
            return 0;
        },

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

            // console.log(this.columns_array)
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
    components: {
        TableHead,
        TableBody,
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