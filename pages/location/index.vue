<template>
  <location-content></location-content>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('location/getLocations')
  },
}
</script>
