<template>
  <div>
    <section>
      <h2>数组声明</h2>
      <tag-dropdown :text="dropdown1.text" :items="dropdown1.items"></tag-dropdown>
    </section>
    <section>
      <h2>标签声明</h2>
      <tag-dropdown text="Dropdown2">
        <tag-dropdown-item header>Header</tag-dropdown-item>
        <tag-dropdown-item>Action</tag-dropdown-item>
        <tag-dropdown-item disabled>Disabled action</tag-dropdown-item>
        <tag-dropdown-item divider></tag-dropdown-item>
        <tag-dropdown-item url="//www.baidu.com">Separated link</tag-dropdown-item>
      </tag-dropdown>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dropdown1: {
        text: "Dropdown1",
        items: [
          {
            text: 'Disabled action',
            disabled: true,
          },
          'Another action',
          'Something else here',
          '-',
          'Separated link',
        ]
      }
    };
  }
};
</script>
