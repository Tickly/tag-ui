<template>
    <div class="form-group" :class="classBuidler">
        <label class="control-label col-sm-2">{{ label }}</label>
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
            return this.$parent;
        },
        model() {
            return this.form.model;
        },
        error() {
            var [error] = this.model.errors[this.attr] || [];
            if (error) return error.replace(this.attr, this.label)
        },
        classBuidler() {
            var classes = [];
            if (this.error) classes.push('has-error')
            return classes;
        },
        value() {
            return this.model.form[this.attr]
        },
    },
    methods: {
        validate() {
            this.model.validate(this.attr, false);
        },
    },
    watch: {
        value(newVal) {
            this.validate();
        },
    }
}
</script>
