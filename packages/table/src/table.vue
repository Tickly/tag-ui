<template>
    <table class="table" :class="tableClass">
        <colgroup>
            <col v-for="col in _columns" :width="_colWidth(col)">
        </colgroup>
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
        <table-body></table-body>
        <tfoot v-if="showSummary">
            <tr>
                <th v-for="col in _columns" :class="_summaryCellClass(col)" v-text="_showSummaryContent(col)"></th>
            </tr>
        </tfoot>
    </table>
</template>
<script>
// import Vue from 'vue'
import TableBody from './table-body'


function parseString(str) {
    var [attribute, label] = str.split(':');
    if (!label) label = attribute;
    return {
        label,
        attribute,
    }
}
function parseObject(object) {
    var obj = Object.assign({}, object);


    if (obj.type === 'serial') {
        Object.assign(obj, serial);
    } else if (obj.type === 'action') {
        Object.assign(obj, action);
    }
    if (!obj.label) {
        obj.label = obj.attribute;
    }

    return obj;
}



const serial = {
    label: '#',
    width: 50,
    hAlign: 'center',
}
const action = {
    label: '操作',
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
    render(createElement) {
        console.log('render');
        return createElement('div', []);
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
        },
        _colWidth(col) {
            if (col.width) return col.width;
            return 0;
        }
    },
    components:{
        TableBody,
    }
}
</script>
<style lang="less">
.table {
    border: 1px solid #ddd;
}
</style>
