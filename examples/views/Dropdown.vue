<template>
  <div>
    <tag-dropdown :text="dropdown1.text" :items="dropdown1.items"></tag-dropdown>
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
