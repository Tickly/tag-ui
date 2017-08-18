<template>
    <div>
        <section>
            <h3>基础表格</h3>
            <div>
                <tag-table :options="options1" :data="options1.data" :columns="options1.columns" :bordered="true"></tag-table>
            </div>
        </section>
        <section>
            <h3>列的类型，统计，数据的格式化，</h3>
            <div>
                <tag-table :options="options2" :data="options2.data" :columns="options2.columns" :showPageSummary="true" :striped="true" :bordered="true"></tag-table>
            </div>
        </section>
        <section>
            <h3>带操作的列</h3>
            <div>
                <tag-table :options="options3" :data="options3.data" :columns="options3.columns">
                    <template slot="col-action" scope="scope">
                        <button class="btn btn-default" @click="click1(scope)">删除</button>
                    </template>
                </tag-table>
            </div>
        </section>
    </div>
</template>
<script>
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
export default {
    data() {
        return {
            options1: {
                // bordered: true,
                hover: true,
                responsive: true,
                data,
                columns: [
                    { type: 'serial' },
                    'date:日期',
                    'name',
                    // 'age',
                    {
                        attribute: 'age',
                        hAlign: 'center',
                        width: 100,
                    },
                    {
                        attribute: 'address',
                        label: '地址',
                    },
                    'address',
                    'address',
                    'address',
                    'address',
                    'address',
                    'address',
                    'address',
                    'address',
                    'address',
                ],
            },
            options2: {
                data,
                bordered: true,
                striped: true,
                showPageSummary: true,
                columns: [
                    { type: 'serial' },
                    'name',
                    {
                        attribute: 'age',
                        hAlign: 'center',
                        summary: true,
                    },
                    {
                        type: 'formula',
                        label: '相对于50岁(公式列)',
                        // format: 'percent',
                        format: ['percent', 2],
                        // 指定公式
                        formula(row) {
                            return row.age / 50
                        },
                    },
                    // 'address',
                    {
                        attribute: 'money',
                        label: '货币格式',
                        width: 200,
                        format: 'currency',
                        summary: true,
                    },
                    {
                        attribute: 'date',
                        label: '日期格式',
                        format: 'date',
                    },
                    {
                        attribute: 'date',
                        label: '时间格式',
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
                            // return [
                            //     h('button',123),
                            //     h('button',123),
                            // ]
                            return <button class="btn btn-default" onClick={() => {
                                console.log(this.click1({ row }));
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
        // console.log(this._renderProxy);
    },
    render(h) {

    },
}
</script>

