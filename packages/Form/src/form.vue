<template>
  <form class="form-horizontal" :class="classBuilder">
    <slot></slot>
  </form>
</template>
<script>

export default {
  name: "TagForm",
  data() {
    return {
      hasError: false,
    };
  },
  props: {
    model: {
      type: Object,
      default: () => ({}),
    },
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

  },
  methods: {
    validate() {
      return this.model.validate();
    }
  }
};
</script>
