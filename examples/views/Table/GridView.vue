<template>
    <div>
        <section>
            <h3>基础表格</h3>
            <div>
                <tag-table :data="data" bordered>
                    <tag-table-column type="serial" />
                    <tag-table-column attr="name" />
                    <tag-table-column attr="date" label="日期" />
                    <tag-table-column attr="age" hAlign="center" width="100" />
                    <tag-table-column attr="address" label="地址" />
                </tag-table>
            </div>
        </section>
        <section>
            <h3>列的类型，统计，数据的格式化，</h3>
            <div>
                <tag-table :data="data" showPageSummary striped bordered>
                    <tag-table-column type="serial" />
                    <tag-table-column attr="name" />
                    <tag-table-column attr="age" summary />
                    <tag-table-column type="formula" label="相对于50岁(公式列)" :format="['percent', 2]" :formula="row=>{return row.age / 50}" />
                    <tag-table-column attr="money" format="currency" label="货币格式" summary />
                    <tag-table-column attr="date" format="date" label="日期格式" />
                    <tag-table-column attr="date" format="time" label="时间格式" />
                </tag-table>
            </div>
        </section>
        <section>
            <h3>带操作的列</h3>
            <div>
                <tag-table :data="data">
                    <tag-table-column type="serial" />
                    <tag-table-column attr="name" />
                    <tag-table-column type="template" label="操作">
                        <template slot-scope="scope">
                            <button class="btn btn-default" @click="click1(scope)">删除</button>
                        </template>
                    </tag-table-column>
                </tag-table>
            </div>
        </section>
        <section>
            <h3>自动显示labels</h3>
            <div>
                <tag-table :data="data" :labels="labels">
                    <tag-table-column type="serial" />
                    <tag-table-column attr="name" />
                    <tag-table-column attr="age" />
                    <tag-table-column attr="address" />
                </tag-table>
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
            labels: {
                name: '姓名',
                age: '年龄',
            },
        }
    },
    methods: {
        click1(row) {
            alert(`${row.name}, ${row.age}`)
        }
    },
    created() { },
}
</script>

