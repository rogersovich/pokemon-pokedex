<template>
  <detail-location-content></detail-location-content>
</template>

<script>
export default {
  layout: 'location',
  validate({ params }) {
    // Must be a number
    return /([-_]*[a-zA-Z0-9]+([-_]*[a-zA-Z0-9]+)*)/.test(params.slug)
  },
  async asyncData({ store, params }) {
    await store.dispatch('location/getLocation', params.slug)
  },
}
</script>
