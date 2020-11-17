<template>
  <detail-ability-content></detail-ability-content>
</template>

<script>
export default {
  layout: 'ability',
  validate({ params }) {
    // Must be a number
    return /([-_]*[a-zA-Z0-9]+([-_]*[a-zA-Z0-9]+)*)/.test(params.slug)
  },
  async asyncData({ store, params }) {
    await store.dispatch('ability/getAbility', params.slug)
  },
}
</script>
