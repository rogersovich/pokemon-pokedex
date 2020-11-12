<template>
  <detail-pokemon-content></detail-pokemon-content>
</template>

<script>
export default {
  layout: 'detail',
  validate({ params }) {
    // Must be a number
    return /([-_]*[a-zA-Z0-9]+([-_]*[a-zA-Z0-9]+)*)/.test(params.slug)
  },
  async asyncData({ store, params }) {
    await store.dispatch('pokemon/getPokemonSpecies', params.slug)
    await store.dispatch('pokemon/getPokemon', params.slug)
    // const id = payload.evolution_chain.url
    //   .split('https://pokeapi.co/api/v2/evolution-chain/')[1]
    //   .replace('/', '')
    // console.log(payload.evolution_chain.url)
    // const chainEvo = await this.$axios.get(`evolution-chain/${id}`)
    // commit('SET_POKEMON_EVOLUTION', chainEvo.data.chain)
  },
}
</script>
