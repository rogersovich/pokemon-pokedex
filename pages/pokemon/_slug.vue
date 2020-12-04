<template>
  <detail-pokemon-content></detail-pokemon-content>
</template>

<script>
export default {
  layout: 'pokemon',
  validate({ params }) {
    // Must be a number
    return /([-_]*[a-zA-Z0-9]+([-_]*[a-zA-Z0-9]+)*)/.test(params.slug)
  },
  async asyncData({ store, params }) {
    await store.dispatch('pokemon/getPokemonSpecies', params.slug)
    await store.dispatch('pokemon/getPokemon', params.slug)
  },
}
</script>
