<template>
    <div class="container">
        <h3>基础表格，带边框</h3>
        <div>
            <tag-table :options="tableOptions"></tag-table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableOptions: {
                bordered: true,
                hover: true,
                showSummary: true,
                data: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄',
                        age: 25,
                    },
                    {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄',
                        age: 31,
                    },
                    {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄',
                        age: 28,
                    },
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄',
                        age: 27,
                    }
                ],
                columns: [
                    { type: 'serial' },
                    'date:日期',
                    'name',
                    // 'age',
                    {
                        attribute: 'age',
                        summary: true,
                        hAlign: 'center',
                    },
                    {
                        type: 'formula',
                        label: '十年后(公式)',
                        value: (row) => {
                            return row.age + 10
                        }
                    },
                    {
                        attribute: 'address',
                        label: '地址',
                    }
                ],
            },
        }
    }
}
</script>

