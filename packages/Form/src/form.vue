<template>
  <form class="form-horizontal" :class="classBuilder">
    <slot></slot>
  </form>
</template>
<script>
import { Validator } from 'tag-validators'

export default {
  name: 'TagForm',
  data () {
    return {
      errors: null,
    };
  },
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
    labels: {
      type: Object,
      default: () => ({}),
    },
    rules: {
      type: Array,
      default: () => [],
    },


    labelCol: {
      type: [String, Number],
      default: 2,
    },
  },
  computed: {
    classBuilder () {
      var classes = [];

      return classes;
    },
  },
  created () { },
  methods: {
    validate () {
      return Validator.validate(this.form, this.rules, this.labels).catch(errors => this.errors = errors)
    }
  }
};
</script>
