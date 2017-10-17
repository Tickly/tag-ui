<template>
    <div class="checkbox">
        <label v-for="option in options" :key="option.value" class="checkbox-inline">
            <input v-model="checked" :value="option.value" type="checkbox" @change="handleChange"> {{ option.text }}
        </label>
    </div>
</template>
<script>
import Options from '@/mixins/options.mixin'
export default {
    name: 'TagCheckboxGroup',
    mixins: [Options],
    data() {
        return {
            checked: [],
        }
    },
    props: {
        multiple: {
            type: Boolean,
            default: true,
        }
    },
    methods: {
        handleChange() {
            this.$emit('input', this.checked)
        }
    },
}
</script>