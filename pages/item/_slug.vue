<template>
  <detail-item-content></detail-item-content>
</template>

<script>
export default {
  layout: 'item',
  validate({ params }) {
    // Must be a number
    return /([-_]*[a-zA-Z0-9]+([-_]*[a-zA-Z0-9]+)*)/.test(params.slug)
  },
  async asyncData({ store, params }) {
    await store.dispatch('item/getItem', params.slug)
  },
}
</script>
