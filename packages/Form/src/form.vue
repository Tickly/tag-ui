<template>
    <form class="form-horizontal">
        <slot></slot>
    </form>
</template>
<script>
// import Model from 'tag-validators'
import Model from '../../../../tag-validators/dist/app'

export default {
    name: 'TagForm',
    data() {
        return {
            model: null,
        }
    },
    props: {
        labels: Object,
        rules: [Array],
        form: Object,
    },
    created() {
        this.model = new Model({
            form: this.form,
            labels: this.labels,
            rules: this.rules,
        })
    },
    methods: {
        validate() {
            this.model.form = this.form;
            this.model.validate();
            // console.log('validate')
        }
    }
}
</script>
