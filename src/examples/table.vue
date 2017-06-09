<template>
    <div>
        <h3>基础表格</h3>
        <div>
            <tag-table bordered hover :data="tableData" :columns="columns"></tag-table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [
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
                'age',
                {
                    attribute: 'address',
                    label: '地址',
                }
            ],
        }
    }
}
</script>

