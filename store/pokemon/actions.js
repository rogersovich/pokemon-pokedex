const END_POINT = 'pokemon'

export const getPokemons = async function ({ commit }, payload) {
  try {
    commit('REMOVE_POKEMON_DATA')
    const { data } = await this.$axios.get(`${END_POINT}`)
    commit('SET_POKEMON_URL', data.next)
    commit('SET_ADD_POKEMON', data.results)
  } catch (error) {
    // error
  }
}

export const addPokemonMore = async function ({ commit }, payload) {
  try {
    const { data } = await this.$axios.get(`${END_POINT}/?${payload}`)
    commit('SET_POKEMON_URL', data.next)
    commit('SET_ADD_POKEMON', data.results)
  } catch (error) {
    // error
  }
}

export const getPokemon = async function ({ commit }, payload) {
  try {
    const { data } = await this.$axios.get(`${END_POINT}/${payload}`)
    commit('SET_POKEMON', data)
  } catch (error) {
    // error
  }
}
