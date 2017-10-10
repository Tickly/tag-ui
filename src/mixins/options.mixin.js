export default {
  props: {
    data: [Object, Array],
  },
  computed: {
    options() {
      if (Array.isArray(this.data)) {
        return this.data.map(item => {
          return {
            value: item,
            text: item,
          }
        })
      } else {
        return Object.keys(this.data).map(key => {
          return {
            value: key,
            text: this.data[key]
          }
        })
      }
    }
  }
}
