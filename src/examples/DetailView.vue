<template>
    <div>
        <tag-detail-view :options="options"></tag-detail-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            options: {
                model: {
                    date: '2016-05-02 12:08:34',
                    name: '令狐冲',
                    address: '上海市普陀区金沙江路 1518 弄',
                    age: 25,
                    money: 1000000,
                },
                attributes: [
                    'name:text:姓名',
                    {
                        attribute: 'age',
                        type: 'number',
                    },
                    // 'age',
                    'money:currency',
                    {
                        attribute: 'address',
                        type: 'textarea',
                        options: {
                            attrs: {
                                rows: 6,
                            }
                        },
                        value() {
                            return 1
                        }
                    },
                    {
                        attribute: 'date',
                        type: 'date',
                    }
                ],
                title: '你开心就好',
            }
        }
    }
}
</script>
