<script>
/**
 * 发现render有点问题，加入元素的时候，所有已加入的元素都会重新render一遍，导致下次会调用很多next
 */
export default {
    name: 'TagAutoflow',
    props: {
        column_size: {
            type: Number,
            default() {
                return 2
            },
        },
        data: {
            type: Array,
            default() {
                return []
            }
        },
        renderItem: {
            type: Function,
        }
    },
    data() {
        return {
            queue: [],
            columns: [],
        }
    },
    render(h) {
        // console.log('render')
        return h('div', {
            class: 'tag-autoflow',
        }, this.columns.map((column) => {
            return h('div', {
                class: 'tag-autoflow-column',
            }, column.map(item => {
                return this.renderItem(h, item, this.next.bind(this, item));
            }))
        }))
    },
    created() {
        this.initColumns()
    },
    mounted() {
        this.updateQueue(this.data);
    },
    methods: {
        next(item) {
            if (item) {
                if (item.rendered) {
                    // console.log('rendered', item)
                    return;
                }
                item.rendered = true;
            }
            if (this.queue.length < 1) return;

            this.$nextTick(function () {
                // 找到当前高度最小的列
                let min = 0;

                Array.prototype.reduce.call(this.$el.children, (a, b, i) => {
                    // console.log(a.offsetHeight, b.offsetHeight);
                    if (b.offsetHeight < a.offsetHeight) return min = i, b;
                    return a;
                });

                // 把元素加到对应的列里
                this.columns[min].push(this.queue.shift());
            });
        },
        updateQueue(list) {
            // 拷贝数组
            this.initColumns();
            this.queue = [].concat(list.map(item => {
                item.rendered = false;
                return item;
            }));
            this.next();
        },
        initColumns() {
            this.columns = new Array(this.column_size).fill(0).map(() => []);
        },
    },
    watch: {
        data(newValue) {
            this.updateQueue(newValue)
        },
    }
}
</script>
<style lang="less">
.tag-autoflow {
    display: flex;
    align-items: flex-start;
}

.tag-autoflow-column {
    flex-grow: 1;
    flex-basis: 0;
    flex-shrink: 0;
}
</style>

