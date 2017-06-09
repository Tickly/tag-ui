<template>
    <table class="table" :class="tableClass">
        <thead v-if="columns.length">
            <tr>
                <th v-for="col in _columns" v-text="col.label"></th>
            </tr>
        </thead>
        <tbody v-if="data.length && columns.length">
            <tr v-for="(row,rowIndex) in data">
                <td v-for="col in _columns" v-text="_showCellContent(row,col,rowIndex)"></td>
            </tr>
        </tbody>
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
    return object;
}


export default {
    name: 'TagTable',
    props: {
        data: {
            type: Array,
            default: [],
        },
        columns: Array,
        hover: Boolean,
        bordered: Boolean,
    },
    computed: {
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
        _showCellContent(row, col, rowIndex) {
            if (col.type === 'serial') {
                return rowIndex + 1
            }
            return row[col.attribute]
        }
    }
}
</script>
