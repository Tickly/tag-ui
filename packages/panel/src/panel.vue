<template>
  <div class="panel tu-panel" :class="panelClass">
    <div class="panel-heading clearfix">
      <h3 class="panel-title pull-left" v-text="title"></h3>
      <div class="panel-tools pull-right">
        <slot name="tools"></slot>
        <template v-if="minable">
          <button type="button" class="btn btn-link btn-xs btn-minimize" aria-label="Left Align" @click="toggleCollapse">
            <span class="glyphicon glyphicon-plus" aria-hidden="true" v-if="collapsed"></span>
            <span class="glyphicon glyphicon-minus" aria-hidden="true" v-else></span>
          </button>
        </template>
      </div>
    </div>
    <div class="panel-body">
      <slot></slot>
    </div>
    <div class="panel-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
    <slot name="append"></slot>
  </div>
</template>
<script>
export default {
  name: 'TagPanel',
  data () {
    return {
      collapsed: false,
    }
  },
  props: {
    title: String,
    type: {
      type: String,
      default: 'default',
    },
    // 是否可最小化
    minable: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    panelClass () {
      return {
        ['panel-' + this.type]: true,
        collapsed: this.collapsed,
      }
    }
  },
  methods: {
    toggleCollapse () {
      this.collapsed = !this.collapsed;
    }
  }
}
</script>
<style lang="less">
.tu-panel {
  .panel-body,
  .panel-footer {
    transition: all 0.5s;
  }

  &.collapsed {
    .panel-body,
    .panel-footer {
      // display: none;
      height: 0;
      padding: 0;
    }
  }
  .panel-heading {
    .btn-minimize {
      color: inherit;
    }
  }
}
</style>

