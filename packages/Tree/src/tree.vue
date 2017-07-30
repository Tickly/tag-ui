<template>
    <ul class="tag-tree">
        <tag-tree-node v-for="(item,i) in data" :key="i" :item="item"></tag-tree-node>
    </ul>
</template>
<script>
import TagTreeNode from './tree-node';

export default {
    name: 'TagTree',
    props: {
        data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
        }
    },
    components: {
        TagTreeNode,
    }
}
</script>

<style lang="less" scoped>
.tag-tree {
    list-style: none;
}
</style>
