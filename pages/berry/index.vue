<template>
  <berry-content></berry-content>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('berry/getBerries')
  },
}
</script>
