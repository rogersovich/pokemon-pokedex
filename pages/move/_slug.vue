<template>
  <detail-move-content></detail-move-content>
</template>

<script>
export default {
  layout: 'move',
  validate({ params }) {
    // Must be a number
    return /([-_]*[a-zA-Z0-9]+([-_]*[a-zA-Z0-9]+)*)/.test(params.slug)
  },
  async asyncData({ store, params }) {
    await store.dispatch('move/getMove', params.slug)
  },
}
</script>
