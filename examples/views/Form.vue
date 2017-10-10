<template>
  <tag-form ref="myForm" :form="form" :labels="labels" :rules="rules" @submit.prevent.native="handleSubmit">
    <tag-form-item attr="name"><input v-model="form.name" class="form-control"></tag-form-item>
    <tag-form-item attr="region"><input v-model="form.region" class="form-control"></tag-form-item>
    <tag-form-item attr="delivery"><input class="form-control"></tag-form-item>
    <tag-form-item attr="type">
      <tag-checkbox v-model="form.type" :data="data_checkbox" />
    </tag-form-item>
    <tag-form-item attr="resouce">
      <tag-radio v-model="form.resouce" :data="data_radio" />
    </tag-form-item>
    <tag-form-item attr="desc">
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
        region: null,
        delivery: false,
        type: [],
        resouce: null,
        desc: null,
      },
      labels: {
        name: '活动名称',
        region: '活动区域',
        delivery: '即时配送',
        type: '活动性质',
        resouce: '特殊资源',
        desc: '活动形式',
      },
      rules: [
        [['name', 'region', 'type', 'resouce'], 'required']
      ]
    };


    return {
      model,
      form: model.form,
      labels: model.labels,
      rules: model.rules,
      data_checkbox: {
        0: '美食/餐厅线上活动',
        1: '地推活动',
        2: '线下主题活动',
        3: '单纯品牌曝光',
      },
      data_radio: [
        '线上品牌商赞助',
        '线下场地免费',
      ]
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.myForm.validate();
    }
  }
}
</script>
