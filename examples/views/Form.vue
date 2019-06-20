<template>
  <tg-form labelCol="2" ref="myForm" :form="form" :rules="rules" :labels="labels" @submit.prevent.native="handleSubmit">
    <tg-form-item attr="name">
      <input v-model="form.name" class="form-control">
    </tg-form-item>
    <tg-form-item attr="number">
      <input type="number" v-model.number="form.number" class="form-control">
    </tg-form-item>
    <tg-form-item attr="date">
      <input type="date" v-model="form.date" class="form-control">
    </tg-form-item>
    <tg-form-item attr="delivery">
      <tag-checkbox label="是" v-model="form.delivery" />
    </tg-form-item>
    <tg-form-item attr="type">
      <tag-checkbox-group v-model="form.type" :data="data_checkbox" />
    </tg-form-item>
    <tg-form-item attr="resouce">
      <tag-radio v-model="form.resouce" :data="data_radio" />
    </tg-form-item>
    <tg-form-item attr="desc">
      <textarea class="form-control" />
    </tg-form-item>
    <tg-form-item>
      <tag-button>验证</tag-button>
    </tg-form-item>
  </tg-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: null,
        delivery: false,
        type: [],
        resouce: null,
        desc: null,
        number: null,
        date: null
      },
      labels: {
        name: '活动名称',
        number: '数字',
        date: '时间',
        delivery: '即时配送',
        type: '活动性质',
        resouce: '特殊资源',
        desc: '活动形式',
      },
      rules: [
        [
          'required', ['name', 'type', 'resouce', 'number', 'date']
        ],
        [
          'number', 'number', {
            max: 100,
            min: 10
          }
        ],
        ['date', 'date']
      ],
      data_checkbox: {
        0: '美食/餐厅线上活动',
        1: '地推活动',
        2: '线下主题活动',
        3: '单纯品牌曝光'
      },
      data_radio: ['线上品牌商赞助', '线下场地免费'],
    };
  },

  methods: {
    handleSubmit() {
      this.$refs.myForm.validate();
    }
  }
};
</script>
