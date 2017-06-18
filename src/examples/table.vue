<template>
    <div class="container">
        <section>
            <h3>基础表格</h3>
            <div>
                <tag-table :options="tableOptions"></tag-table>
            </div>
        </section>
        <section>
            <h3>基础表格，带边框</h3>
            <div>
                <tag-table :options="options1"></tag-table>
            </div>
        </section>
        <section>
            <h3>带操作的列</h3>
            <div>
                <tag-table :options="options2">
                    <template slot="col-action" scope="scope">
                        <button class="btn btn-default" @click="click1(scope)">删除</button>
                    </template>
                </tag-table>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        const data = [
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
        ];
        return {
            tableOptions: {
                // bordered: true,
                hover: true,
                showSummary: true,
                data,
                columns: [
                    { type: 'serial' },
                    'date:日期',
                    'name',
                    // 'age',
                    {
                        attribute: 'age',
                        summary: true,
                        hAlign: 'center',
                        width: 100,
                    },
                    {
                        type: 'formula',
                        label: '十年后(公式)',
                        value: ({ row }) => {
                            return row.age + 10
                        }
                    },
                    {
                        attribute: 'address',
                        label: '地址',
                    }
                ],
            },
            options1: {
                data,
                bordered: true,
                columns: [
                    'name',
                    // 'age',
                    {
                        attribute: 'age',
                        width: 50,
                    },
                    'address',
                ]
            },
            options2: {
                data,
                bordered: true,
                columns: [
                    'name',
                    // 'age',
                    {
                        attribute: 'age',
                        width: 50,
                    },
                    'address',
                    {
                        type: 'template',
                        template: 'col-action',
                    },
                ]
            }
        }
    },
    methods: {
        click1(scope) {
            console.log(scope);
        }
    }
}
</script>

