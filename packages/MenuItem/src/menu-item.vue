<template>
    <li class="tag-menu-item">
        <a :href="url">
            <span class="menu-icon">
                <i class="glyphicon glyphicon-menu-hamburger"></i>
            </span>
            <span class="menu-text" v-text="text"></span>
            <span class="pull-right">
                <i class="glyphicon glyphicon-menu-down"></i>
            </span>
        </a>
        <slot></slot>
    </li>
</template>

<script>
export default {
    name: 'TagMenuItem',
    props: {
        url: {
            type: String,
            default: '#',
        },
        text: String,
    }
}
</script>
<style lang="scss">
.tag-menu-item {
  > a {
    display: block;
    padding: 1em 2em;
  }

  .menu-icon {
    margin-right: 0.5em;
  }
}
</style>
