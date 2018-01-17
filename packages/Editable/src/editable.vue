<template>
  <div class="tag-editable" :class="classBuilder">
    <div class="view" ref="reference" @click.stop="edit">
      <p v-text="currentValue"></p>
    </div>
    <div ref="popper" class="popover fade right in">
      <div class="arrow"></div>
      <div class="popover-header">
        <h3 class="popover-title">标题</h3>
      </div>
      <div class="popover-content">
        你好啊
      </div>
      <div class="popover-footer">
        <button class="btn btn-sm btn-default">
          <i class="glyphicon glyphicon-ban-circle"></i>
        </button>
        <button class="btn btn-sm btn-primary">
          <i class="glyphicon glyphicon-save"></i>
        </button>
      </div>
    </div>
    <!-- <div class="edit" v-show="isEdit" @click.stop>
      <input type="text" v-model="currentValue">
    </div> -->
  </div>
</template>
<script>
import Popper from 'popper.js'
export default {
  name: 'TagEditable',
  data() {
    return {
      isEdit: false,
      currentValue: 'this is editable123',
      popper: null,
    }
  },
  computed: {
    classBuilder() {
      var classes = [];
      if (this.isEdit) classes.push('edit')
      return classes;
    }
  },
  mounted() {

    // $(this.$refs.view).popover()
    // document.body.addEventListener('click', this.handleBodyClick)
  },
  // destroyed() {
  //   document.body.removeEventListener('click', this.handleBodyClick)
  // },
  methods: {
    handleBodyClick() {
      this.isEdit = false;
    },
    edit() {
      this.isEdit = true;

      if (null === this.popper) {
        this.$nextTick(function () {
          this.popper = new Popper(this.$refs.reference, this.$refs.popper, {
            placement: 'right'
          });
        })
      }
    },
  }
}
</script>
<style lang="less">
.tag-editable {
  display: flex;

  &.edit {
    .popover {
      display: block;
    }
  }

  .popover {
    min-width: 200px;
  }

  .popover-footer {
    padding: 4px;
    text-align: right;
    background-color: #fbfbfb;
    border-top: 1px solid #ebebeb;
  }

  .view {
    cursor: pointer;
    border: 1px dashed transparent;
    border-bottom-color: #337ab7;

    &:hover {
      border-color: #337ab7;
    }
  }
}
</style>
