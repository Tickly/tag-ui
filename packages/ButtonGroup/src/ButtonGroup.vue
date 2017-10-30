<template>
    <div :class="classBuilder">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "TagButtonGroup",
  props: {
    size: String,
    vertical: Boolean
  },
  computed: {
    classBuilder() {
      var classes = [];
      if (this.vertical) {
        classes.push("btn-group-vertical");
      } else {
        classes.push("btn-group");
      }
      if (this.size) {
        classes.push("btn-group-" + this.size);
      }
      return classes;
    }
  }
};
</script>
