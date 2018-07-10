const Component = {
  name: 'TagTableColumn',
  props: {
    type: {
      default: 'data',
      validator(value) {
        return ['serial'].includes(value);
      }
    }
  },
  created() {
    this.$parent.appendColumn();
  },
  render(h) {
    return h('div', 9)
  },
}

export default Component
