<template>
  <item-content></item-content>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('item/getItems')
  },
}
</script>
