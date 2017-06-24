<template>
    <div>
        <section>
            <h3>基础表格</h3>
            <div>
                <tag-table :options="options1"></tag-table>
            </div>
        </section>
        <section>
            <h3>基础表格，带边框</h3>
            <div>
                <tag-table :options="options2"></tag-table>
            </div>
        </section>
        <section>
            <h3>带操作的列</h3>
            <div>
                <tag-table :options="options3">
                    <template slot="col-action" scope="scope">
                        <button class="btn btn-default" @click="click1(scope)">删除</button>
                    </template>
                </tag-table>
                <tag-pagination :total="options3.data.length" :pageSize="1"></tag-pagination>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        const data = [
            {
                date: '2016-05-02 12:08:34',
                name: '令狐冲',
                address: '上海市普陀区金沙江路 1518 弄',
                age: 25,
                money: 1000000,
            },
            {
                date: '2016-05-04 09:09:09',
                name: '赵云',
                address: '上海市普陀区金沙江路 1517 弄',
                age: 31,
                money: 842934,
            },
            {
                date: '2016-05-01 00:00:00',
                name: '狙击手',
                address: '上海市普陀区金沙江路 1519 弄',
                age: 28,
                money: 492883,
            },
            {
                date: '2016-05-03 10:30:00',
                name: '我是警察',
                address: '上海市普陀区金沙江路 1516 弄',
                age: 27,
                money: 10000001,
            }
        ];
        return {
            options1: {
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
                        label: '十年后(公式列)',
                        summary: true,
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
            options2: {
                data,
                bordered: true,
                showSummary: true,
                columns: [
                    'name',
                    {
                        attribute: 'age',
                        hAlign: 'center',
                    },
                    'address',
                    {
                        attribute: 'money',
                        width: 200,
                        format: 'currency',
                        summary: true,
                    },
                    {
                        attribute: 'date',
                        format: 'date',
                    },
                    {
                        attribute: 'date',
                        label: 'time',
                        format: 'time',
                    },
                ]
            },
            options3: {
                data,
                bordered: true,
                columns: [
                    { type: 'serial' },
                    'name',
                    // 'age',
                    {
                        attribute: 'age',
                        width: 50,
                    },
                    'address',
                    {
                        label: '操作',
                        type: 'template',
                        template(h, { row }) {

                            return <button class="btn btn-default" onClick={() => {
                                console.log(this, row);
                            }}>del</button>
                        },
                    },
                ]
            }
        }
    },
    methods: {
        click1({ row }) {
            alert(`${row.name}, ${row.age}`)
        }
    },
    created() {
        console.log(this._renderProxy);
    },
}
</script>

