<template>
  <div>
    <button @click="add">add</button>
    <hr>
    <tag-autoflow ref="autoflow" :column_size="3" :data="list" :renderItem="renderItem" />
  </div>
</template>
<script>
import _ from "lodash";
import data from "./data.json";
import data1 from "./data1.json";

export default {
  data() {
    const num = 20;
    var list = new Array(num).fill(0).map((v, i) => {
      return this.createItem(i);
    });

    list = data.list;

    // console.log(list.length);
    // console.log(data1.list.length);
    return {
      list
    };
  },
  methods: {
    add() {
      // let item = this.createItem(this.list.length);
      this.list = [].concat(data1.list);
      // this.list.push(item);
      // this.$refs.autoflow.push(item);
    },
    createItem(i) {
      var title =
        i + "," + new Array(_.random(1, 5)).fill("哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈").join("");
      var img = `http://via.placeholder.com/${_.random(100, 400)}x${_.random(
        50,
        200
      )}`;
      return {
        i,
        img,
        title
      };
    },
    renderItem1(h, item, next) {
      // console.log('renderItem', item.title)
      // 纯文字就用下面的方式调用next，图片就onload里面调用next
      // this.$nextTick(function() {
      //   next();
      // });
      return h(
        "div",
        {
          class: "item",
          attrs: {
            key: item.i
          }
        },
        [
          h("img", {
            attrs: {
              src: item.img
            },
            on: {
              load: e => {
                console.log(e.target.src);
                next();
              },
              error: e => {
                console.log("error");
                next();
              }
            }
          }),
          h("p", item.title)
        ]
      );
    },
    renderItem(h, item, next) {
      console.log("render");
      // 简单的渲染一个img跟一个p标签
      // 因为img标签的图片加载需要时间，而图片影响了计算所在列的高度
      // 所以需要在img触发了load事件后，再去调用next渲染下一个item。
      return h("div", [
        h("img", {
          attrs: {
            src: item.contents[0].images,
            class: "img",
            key: item.contents[0]._id
          },
          on: {
            load: e => {
              console.log("load", e.path[0].src);
              next();
            }
          }
        }),
        ,
        //  <p class="title">{{item.title}}</p>
        //         <div class="bottom-info">
        //           <p v-if="list.length>1" class="loc_tim">{{item.store | locFilter(item)}}</p>
        //           <div class="none"></div>
        //           <span class="price">{{"￥" + item.price}}</span>
        //         </div>
        h(
          "div",
          {
            attrs: {
              class: "info"
            }
          },
          [
            h(
              "p",
              {
                attrs: {
                  class: "title"
                }
              },
              item.title
            ),
            h("div", { attrs: { class: "bottom-info" } }, [
              h(
                "p",
                {
                  attrs: {
                    class: "loc_tim"
                  }
                },
                item.store
              ),
              h("div", {
                attrs: {
                  class: "none"
                }
              }),
              h("span", { attrs: { class: "price" } }, "￥" + item.price)
            ])
          ]
        )
      ]);
    }
  }
};
</script>
<style lang="less">
.item {
  img {
    max-width: 100%;
  }
}
</style>
