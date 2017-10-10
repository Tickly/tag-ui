<template>
    <div class="form-group" :class="classBuidler">
        <label class="control-label col-sm-2">{{_label}}</label>
        <div class="col-sm-10">
            <slot></slot>
            <span v-if="error" class="help-block">{{ error }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TagFormItem',
    props: {
        label: String,
        attr: String,
    },
    computed: {
        form() {
            var parent = this.$parent;
            return parent;
        },
        error() {
            var error = this.form.model.errors[this.attr];
            if (error) return error[0]
        },
        classBuidler() {
            var classes = [];
            if (this.error) classes.push('has-error')
            return classes;
        },
        _label() {
            if (this.label) return this.label

            if (this.attr && this.form) {
                return this.form.labels[this.attr]
            }

        },
    }
}
</script>
