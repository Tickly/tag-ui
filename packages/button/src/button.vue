<template>
    <button class="btn" :class="buttonClass" :type="buttonType" @click="handleClick">
        <slot>Button</slot>
    </button>
</template>
<script>
export default {
    name: 'TagButton',
    props: {
        type: {
            type: String,
            default: 'default',
        },
        size: String,
        active: Boolean,
        disabled: Boolean,
        submit: Boolean,
    },
    computed: {
        buttonClass() {
            var obj = {};
            obj['btn-' + this.type] = true;
            if (this.size) {
                obj['btn-' + this.size] = true;
            }
            if (this.active) {
                obj['active'] = true;
            }
            if (this.disabled) {
                obj['disabled'] = true;
            }
            return obj
        },
        buttonType() {
            return this.submit ? 'submit' : 'button'
        },
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e)
        }
    }
}
</script>
