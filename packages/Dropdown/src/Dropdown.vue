<template>
  <div class="dropdown">
    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      <span v-text="text"></span>
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <slot></slot>
      <template v-for="(item,i) in formatData">
        <li :key="i" v-if="isDivider(item)" class="divider" role="separator"></li>
        <li :key="i" v-else :class="itemClass(item)">
          <a href="#" v-text="itemText(item)"></a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TagDropdown",
  props: {
    text: String,
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    formatData() {
      return this.items.map((v, i) => {
        do {
          if ('string' == typeof v) {
            if ('-' == v) break;

            return {
              text: v,
            }
          }

        } while (false);
        return v;
      })
    }
  },
  methods: {

    itemText(item) {
      return item.text;
    },
    itemClass(item) {
      var classes = [];

      if (item.disabled) classes.push('disabled');

      return classes;
    },
    isDivider(item) {
      return item == '-'
    },
  },
};
</script>
