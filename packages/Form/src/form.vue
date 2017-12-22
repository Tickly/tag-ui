<template>
  <form class="form-horizontal" :class="classBuilder">
    <slot></slot>
  </form>
</template>
<script>
import { Validator, Model } from 'tag-validators'


// prod mode
// import Model from '../../../../tag-validators/dist/app'

// dev mode
// import Model from "../../../../tag-validators/src/main";

export default {
  name: "TagForm",
  data() {
    return {
      model: null,
      hasError: false,
    };
  },
  props: {
    labels: Object,
    rules: {
      type: Array,
      default: () => []
    },
    form: Object,
    labelCol: {
      type: [String, Number],
      default: 2,
    },
  },
  computed: {
    classBuilder() {
      var classes = [];
      // if (this.model) {
      //   if (this.model.hasErrors()) {
      //     classes.push('was-validated');
      //   }
      // }
      return classes;
    },
  },
  created() {
    this.model = new Model({
      form: this.form,
      labels: this.labels,
      rules: this.rules
    });
  },
  methods: {
    validate() {
      return this.model.validate();
    }
  }
};
</script>
