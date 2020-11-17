<template>
  <ability-content></ability-content>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('ability/getAbilities')
  },
}
</script>
