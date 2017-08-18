<template>
    <div>
        <button @click="add">add</button>
        <tag-autoflow :column_size="3" :data="list" :renderItem="renderItem" />
    </div>
</template>
<script>
import _ from 'lodash'
export default {
    data() {

        const num = 20;

        var list = new Array(num).fill(0).map((v, i) => {
            return this.createItem(i);
        })


        return {
            list,
        }
    },
    methods: {
        add() {
            this.list.push(this.createItem(this.list.length))
        },
        createItem(i) {
            var title = i + ',' + new Array(_.random(10, 30)).fill('哈').join('');
            var img = `http://via.placeholder.com/${_.random(100, 400)}x${_.random(100, 400)}`;
            return {
                img, title
            }
        },
        renderItem(h, item, next) {
            console.log('renderItem', item.title)
            this.$nextTick(function () {
                next();
            })
            return h('p', item.title)
        }
    }
}
</script>
