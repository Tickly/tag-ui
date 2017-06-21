<template>
    <nav aria-label="Page navigation">
        <ul class="pagination" :class="classPagination">
            <li @click="prev()" :class="{disabled:current === 1}">
                <a href="#" @click.prevent aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li :class="{active: current === 1}">
                <a href="#" @click.prevent>1</a>
            </li>
            <li v-if="showPrevMore">
                <a href="#" @click.prevent>...</a>
            </li>
            <li v-for="n in page_list" :class="{active: current === n}">
                <a href="#" @click.prevent>{{n}}</a>
            </li>
            <li v-if="showNextMore">
                <a href="#" @click.prevent>...</a>
            </li>
            <li :class="{active: current === page_count}">
                <a href="#" @click.prevent>{{page_count}}</a>
            </li>
            <li @click="next()" :class="{disabled:current === page_count}">
                <a href="#" @click.prevent aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>
<script>



export default {
    name: 'TagPagination',
    props: {
        // 分页组件的大小
        size: String,
        // 总数据条数
        total: {
            type: Number,
            required: true,
        },
        // 每一页的数据条数
        pageSize: {
            type: Number,
            default: 10,
        }
    },
    data() {
        return {
            current: 1,
            // 最多显示的页码数
            max: 10,
            showPrevMore: false,
            showNextMore: false,
        }
    },
    computed: {
        page_count() {
            return (Math.ceil(this.total / this.pageSize))
        },
        page_list() {
            const Radius = 2;

            var pages = new Array(5).fill(0).map((v, i) => {
                return this.current + i - Radius
            }), left = 1, right = this.page_count;

            var first, last;

            do {
                // console.log(JSON.stringify(pages));

                if (pages.length === 0) break;

                first = pages.shift();
                last = pages.pop();


                pages.unshift(first);
                if (last)
                    pages.push(last);
                else {
                    last = first;
                }

                if (first <= left) {
                    pages.shift();
                    pages.push(last + 1);
                    continue;
                }
                if (last >= right) {
                    pages.pop();
                    if (first > left + 1) {
                        pages.unshift(first - 1);
                    }
                    continue;
                }
                break;
            } while (true);


            this.showPrevMore = (first > 2);
            this.showNextMore = (last < right - 1);

            return pages;
        },
        classPagination() {
            var classes = [];
            if (this.size) {
                classes.push('pagination-' + this.size)
            }
            return classes;
        },
    },
    methods: {
        setPage(index) {
            if (index < 1) index = 1
            if (index > this.page_count) index = this.page_count

            this.current = index;
        },
        next() {
            this.setPage(this.current + 1)
        },
        prev() {
            this.setPage(this.current - 1)
        },
    }
}
</script>

