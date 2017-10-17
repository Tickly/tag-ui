<template>
    <div class="checkbox">
        <label>
            <input type="checkbox" @change="handleChange"> {{ label }}
        </label>
    </div>
</template>
<script>
export default {
    name: 'TagCheckbox',
    props: {
        label: String,
        value: Boolean,
    },
    methods: {
        handleChange(e) {
            this.$emit('input', e.target.checked);
        }
    }
}
</script>
