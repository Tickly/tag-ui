<script>
const flag_render = '_render';
export default {
  name: "TagAutoflow",
  props: {
    column_size: {
      type: Number,
      default() {
        return 2;
      }
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    renderItem: {
      type: Function
    }
  },
  data() {
    return {
      queue: [],
      columns: []
    };
  },
  render(h) {
    // console.log('render')
    // return h("ul", null, [this.data.map(item => h("li", item.title))]);
    return h(
      "div",
      {
        class: "tag-autoflow"
      },
      this.columns.map(column => {
        return h(
          "div",
          {
            class: "tag-autoflow-column"
          },
          column.map(item => {
            return this.renderItem(h, item, this.next.bind(this, item));
          })
        );
      })
    );
  },
  created() {
    this.initColumns();
  },
  mounted() {
    this.updateQueue(this.data);
  },
  updated() {
    // console.log("updated");
    // for (let el of this.$el.children) console.log(el.offsetHeight);
  },
  methods: {
    next() {
      // console.log("next");
      if (item) {
        if (item[flag_render]) {
          return;
        }
        item[flag_render] = true;
      }

      if (this.queue.length < 1) return;

      let item = this.queue.shift();

      this.columns[this.findMin()].push(item);
    },
    // 找到当前高度最小的列
    findMin() {
      let min = 0;

      Array.prototype.reduce.call(this.$el.children, (a, b, i) => {
        return b.offsetHeight < a.offsetHeight ? ((min = i), b) : a;
      });

      console.log(min);
      return min;
    },

    updateQueue(list) {
      // console.log("updateQueue");
      // 拷贝数组
      this.initColumns();
      this.queue = [].concat(
        list.map(item => {
          item[flag_render] = false;
          return item;
        })
      );
      this.$nextTick(function() {
        this.next();
      });
    },
    initColumns() {
      this.columns = new Array(this.column_size).fill(0).map(() => []);
    },
    push(item) {
      this.queue.push(item);
    }
  },
  watch: {
    data(newValue) {
      // console.log("watch data");

      this.updateQueue(newValue);
    }
  }
};
</script>
<style lang="less">
.tag-autoflow {
  display: flex;
  align-items: flex-start;
}

.tag-autoflow-column {
  flex-grow: 1;
  flex-basis: 0;
  flex-shrink: 0;
  overflow: hidden;
}
</style>

