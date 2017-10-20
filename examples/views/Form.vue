<template>
  <tag-form ref="myForm" :form="form" :labels="labels" @submit.prevent.native="handleSubmit">
    <tag-form-item attr="name" label="活动名称">
      <input v-model="form.name" class="form-control">
    </tag-form-item>
    <tag-form-item attr="number" label="数字">
      <input type="number" v-model="form.number" class="form-control">
    </tag-form-item>
    <tag-form-item attr="date" label="时间">
      <input type="date" v-model="form.date" class="form-control">
    </tag-form-item>
    <tag-form-item attr="delivery" label="即时配送">
      <tag-checkbox label="是" v-model="form.delivery" />
    </tag-form-item>
    <tag-form-item attr="type" label="活动性质">
      <tag-checkbox-group v-model="form.type" :data="data_checkbox" />
    </tag-form-item>
    <tag-form-item attr="resouce" label="特殊资源">
      <tag-radio v-model="form.resouce" :data="data_radio" />
    </tag-form-item>
    <tag-form-item attr="desc" label="活动形式">
      <textarea class="form-control" />
    </tag-form-item>
    <tag-form-item>
      <tag-button>验证</tag-button>
    </tag-form-item>
  </tag-form>
</template>
<script>
export default {
  data() {
    var model = {
      form: {
        name: null,
        delivery: false,
        type: [],
        resouce: null,
        desc: null,
        number: null,
        date: null
      },
      labels: {},
      rules: [
        [["name", "type", "resouce", "number", "date"], "required"],
        [
          "number",
          "number",
          {
            max: 100,
            min: 10
          }
        ],
        ["date", "date"]
      ]
    };

    return {
      model,
      form: model.form,
      labels: model.labels,
      rules: model.rules,
      data_checkbox: {
        0: "美食/餐厅线上活动",
        1: "地推活动",
        2: "线下主题活动",
        3: "单纯品牌曝光"
      },
      data_radio: ["线上品牌商赞助", "线下场地免费"]
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.myForm.validate();
    }
  }
};
</script>
