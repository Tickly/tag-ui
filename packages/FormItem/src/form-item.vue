<template>
    <div class="form-group" :class="classBuidler">
        <label class="control-label" :class="classBuilderLabel">{{ _label }}</label>
        <div :class="classBuidlerControl">
            <slot></slot>
            <span v-if="error" class="invalid-feedback">{{ error }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TagFormItem',
    props: {
        label: String,
        attr: String,
        labelCol: [String, Number],
    },
    computed: {
        $form() {
            return this.$parent;
        },
        labels() {
            return this.$form.labels;
        },


        _label() {
            return this.label
                || this.labels[this.attr]
                || this.attr;
        },
        error() {
            let error;
            if (this.$form.errors) {
                [error] = this.$form.errors[this.attr] || [];
            }

            if (error) return error;
        },
        classBuidler() {
            var classes = [];
            if (this.error) classes.push('has-error')
            // classes.push('col-' + this.labelCol);
            return classes;
        },
        _labelCol() {
            return this.labelCol || this.$form.labelCol;
        },
        classBuilderLabel() {
            var classes = [];
            classes.push('col-sm-' + this._labelCol);
            return classes;
        },
        classBuidlerControl() {
            var classes = [];
            classes.push('col-sm-' + (12 - this._labelCol));
            return classes;
        },
        value() {
            return this.$form.form[this.attr]
        },
    },
    methods: {
        validate() {
            // this.model.validate(this.attr, false);
        },
    },
    watch: {
        value(newVal) {
            this.validate();
        },
    }
}
</script>
<style lang="scss">
.has-error {
  .form-control {
    border-color: #dc3545;
  }

  .radio,
  .checkbox,
  .control-label {
    color: #a94442;
  }

  .invalid-feedback {
    display: block;
  }
}
</style>
