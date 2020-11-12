<template>
  <pokemon-content></pokemon-content>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('pokemon/getPokemons')
  },
}
</script>
