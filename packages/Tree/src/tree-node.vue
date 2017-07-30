<template>
    <li class="tag-tree-node">
        <i v-if="item.children" class="glyphicon"  :class="classIcon" @click="toggle"></i>
        <span v-text="item.label"></span>
        <tag-tree v-if="item.children" v-show="expand" :data="item.children"></tag-tree>
    </li>
</template>
<script>
export default {
    name: 'TagTreeNode',
    props: {
        item: {
            type: Object,
        }
    },
    data() {
        return {
            expand: false,
        }
    },
    computed:{
        classIcon(){
            var classes = [];
            if(this.expand) classes.push('glyphicon-triangle-bottom')
            else classes.push('glyphicon-triangle-right')
            return classes;
        }
    },
    methods: {
        toggle() {
            this.expand = !this.expand;
        }
    }
}
</script>
