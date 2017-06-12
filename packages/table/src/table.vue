<template>
    <table class="table" :class="tableClass">
        <!--<colgroup>
            <col v-for="col in _columns">
        </colgroup>-->
        <thead v-if="columns.length">
            <tr>
                <th v-for="col in _columns" :class="_headerCellClass(col)" v-text="col.label"></th>
            </tr>
        </thead>
        <tbody v-if="data.length && columns.length">
            <tr v-for="(row,rowIndex) in data">
                <td v-for="col in _columns" :class="_cellClass(col)" v-text="_showCellContent(row,col,rowIndex)"></td>
            </tr>
        </tbody>
        <tfoot v-if="showSummary">
            <tr>
                <th v-for="col in _columns" :class="_summaryCellClass(col)" v-text="_showSummaryContent(col)"></th>
            </tr>
        </tfoot>
    </table>
</template>
<script>

function parseString(str) {
    var [attribute, label] = str.split(':');
    if (!label) label = attribute;
    return {
        label,
        attribute,
    }
}
function parseObject(object) {
    if (object.type === 'serial') {
        object.label = '#';
    }
    if (!object.label) {
        object.label = object.attribute;
    }

    return object;
}


export default {
    name: 'TagTable',
    props: {
        options: {
            type: Object,
            default: {},
        }
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
                var label, attribute;

                switch (typeof col) {
                    case 'string':
                        return parseString(col);
                    case 'object':
                        return parseObject(col);
                    default:
                        break;
                }

                return {
                    label,
                    attribute
                };
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
            return row[col.attribute]
        },
        // 显示统计行内容
        _showSummaryContent(col) {
            if (col.type === 'serial') return '统计'

            if (!col.summary) return


            return this.data.reduce((a, b) => {
                a += b[col.attribute];
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
        }
    }
}
</script>
