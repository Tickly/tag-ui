<template>
    <nav aria-label="Page navigation">
        <ul class="pagination">
            <li @click="prev()">
                <a href="#" @click.prevent aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li :class="{active: current === 1}">
                <a href="#" @click.prevent>1</a>
            </li>
            <li v-if="showPrevMore">
                <a href="#" @click.prevent>&laquo;</a>
            </li>
            <li v-for="n in page_list" :class="{active: current === n}">
                <a href="#" @click.prevent>{{n}}</a>
            </li>
            <li v-if="showNextMore">
                <a href="#" @click.prevent>&raquo;</a>
            </li>
            <li  :class="{active: current === page_count}">
                <a href="#" @click.prevent>{{page_count}}</a>
            </li>
            <li @click="next()">
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
        size: {
            type: Number,
            default: 10,
        },
        total: {
            type: Number,
            required: true,
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
            return (Math.ceil(this.total / this.size))
        },
        page_list() {
            const Radius = 2;

            var pages, left = this.current - Radius, right = this.current + Radius;

            if (left <= 1) {
                right += 1 - left + 1;
                left = 2;
            }
            if (right >= this.page_count) {
                left -= right - this.page_count + 1;
                right = this.page_count - 1;
            }



            this.showPrevMore = (left > 2);
            this.showNextMore = (right < this.page_count - 1);

            pages = new Array(right - left + 1).fill(0).map((v, i) => {
                return left + i
            })


            return pages;
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

