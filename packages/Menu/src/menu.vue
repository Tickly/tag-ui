<template>
    <ul class="tag-menu">
        <slot></slot>
    </ul>
</template>
<script>
export default {
    name: 'TagMenu',
}
</script>
<style lang="scss">
.tag-menu {
  color: white;
  list-style: none;
  background-color: black;
}
</style>
