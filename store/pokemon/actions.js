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
    const next = data.id + 1

    if (data.id === 1) {
      const prev = 887
      const dataPrev = await this.$axios.get(`${END_POINT}/${prev}`)
      commit('SET_POKEMON_PREV', dataPrev.data)
    } else {
      const prev = data.id - 1
      const dataPrev = await this.$axios.get(`${END_POINT}/${prev}`)
      commit('SET_POKEMON_PREV', dataPrev.data)
    }

    const dataNext = await this.$axios.get(`${END_POINT}/${next}`)

    commit('SET_POKEMON', data)

    commit('SET_POKEMON_NEXT', dataNext.data)
  } catch (error) {
    // error
  }
}

export const getPokemonSpecies = async function ({ commit }, payload) {
  try {
    const { data } = await this.$axios.get(`pokemon-species/${payload}`)
    commit('SET_POKEMON_SPECIES', data)
  } catch (error) {
    // error
  }
}
