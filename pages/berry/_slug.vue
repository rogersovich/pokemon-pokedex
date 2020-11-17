<template>
  <detail-berry-content></detail-berry-content>
</template>

<script>
export default {
  layout: 'berry',
  validate({ params }) {
    // Must be a number
    return /([-_]*[a-zA-Z0-9]+([-_]*[a-zA-Z0-9]+)*)/.test(params.slug)
  },
  async asyncData({ store, params }) {
    await store.dispatch('berry/getBerry', params.slug)
  },
}
</script>
