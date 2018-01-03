<template>
    <div>
        <section>
            <h3>基础表格</h3>
            <div>
                <tag-table :data="data" :columns="opt1.columns" bordered />
            </div>
        </section>
        <section>
            <h3>列的类型，统计，数据的格式化，</h3>
            <div>
                <tag-table :data="data" :columns="options2.columns" showPageSummary striped bordered />
            </div>
        </section>
        <section>
            <h3>带操作的列</h3>
            <div>
                <tag-table :options="options3" :data="options3.data" :columns="options3.columns">
                    <template slot="col-action" slot-scope="scope">
                        <button class="btn btn-default" @click="click1(scope)">删除</button>
                    </template>
                </tag-table>
            </div>
        </section>
        <section>
            <h3>labels</h3>
            <div>
                <tag-table :data="data" :columns="opt4.columns" :labels="opt4.labels" />
            </div>
        </section>
    </div>
</template>
<script>
import data from './data'

export default {
    data() {
        return {
            data,
            opt1: {
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
            },
            opt4: {
                columns: [
                    'name',
                ],
                labels: {
                    name: '姓名',
                },
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

