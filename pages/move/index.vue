<template>
  <move-content></move-content>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('move/getMoves')
  },
}
</script>
