<template>
    <li :class="classBuilder">
        <slot v-if="header"></slot>
        <template v-else>
            <a v-if="!divider" :href="url">
                <slot></slot>
            </a>
        </template>
    </li>
</template>
<script>
export default {
    name: 'TagDropdownItem',
    props: {
        divider: Boolean,
        disabled: Boolean,
        header: Boolean,
        url: {
            type: String,
            default: '#',
        }
    },
    computed: {
        classBuilder() {
            var classes = [];
            if (this.header) classes.push('dropdown-header')
            if (this.divider) classes.push('divider')
            if (this.disabled) classes.push('disabled')
            return classes;
        }
    }
}
</script>

