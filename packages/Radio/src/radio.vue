<template>
    <div class="radio">
        <label v-for="option in options" :key="option.value" class="radio-inline">
            <input v-model="picked" :value="option.value" type="radio" @change="handleChange"> {{ option.text }}
        </label>
    </div>
</template>
<script>
import Options from '@/mixins/options.mixin'
export default {
    name: 'TagRadio',
    mixins: [Options],
    data() {
        return {
            picked: null,
        }
    },
    methods: {
        handleChange() {
            this.$emit('input', this.picked)
        }
    },
}
</script>
