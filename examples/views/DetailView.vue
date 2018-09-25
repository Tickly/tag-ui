<template>
    <div>
        <tag-detail-view :form="form" :rules="rules" :labels="labels" title="你开心就好" @submit="handleSubmit">
            <tag-detail-view-item attr="name">
                <template slot="edit">
                    <input v-model="form.name" type="text" class="form-control" />
                </template>
            </tag-detail-view-item>
            <tag-detail-view-item attr="age">
                <div slot="edit">
                    <input v-model.number="form.age" type="number" class="form-control" />
                </div>
            </tag-detail-view-item>
            <tag-detail-view-item attr="money">
                <template slot="edit">
                    <input v-model="form.money" type="number" class="form-control" />
                </template>
            </tag-detail-view-item>
            <tag-detail-view-item attr="address">
                <template slot="edit">
                    <input v-model="form.address" type="text" class="form-control" />
                </template>
            </tag-detail-view-item>
            <tag-detail-view-item attr="date" label="优先级最高的label">
                <template slot="edit">
                    <input v-model="form.date" type="text" class="form-control" />
                </template>
            </tag-detail-view-item>
        </tag-detail-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                date: '2016-05-02 12:08:34',
                name: '令狐冲',
                address: '上海市普陀区金沙江路 1518 弄',
                age: 25,
                money: 1000000,
            },
            rules: [
                ['required', 'name'],
                ['number', 'age', { max: 20, min: 100, }],
            ],
            labels: {
                name: '姓名',
                age: '年龄',
                money: '配送费',
                address: '地址',
                date: '配送时间',
            }
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.form);
        },
    }
}
</script>
