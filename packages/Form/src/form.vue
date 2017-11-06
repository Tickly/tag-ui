<template>
    <form class="form-horizontal">
        <slot></slot>
    </form>
</template>
<script>
import Model from 'tag-validators'

// prod mode
// import Model from '../../../../tag-validators/dist/app'

// dev mode
// import Model from "../../../../tag-validators/src/main";

export default {
  name: "TagForm",
  data() {
    return {
      model: null
    };
  },
  props: {
    labels: Object,
    rules: {
      type: Array,
      default: () => []
    },
    form: Object
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
