const END_POINT = 'pokemon'

export const getPokemons = async function ({ commit }, payload) {
  try {
    commit('REMOVE_POKEMON_DATA')
    commit('SET_SEARCH_STATUS', false)
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

export const searchPokemon = async function ({ commit }, payload) {
  try {
    commit('REMOVE_POKEMON_DATA')
    commit('SET_SEARCH_STATUS', true)
    const { data } = await this.$axios.get(`${END_POINT}/${payload}`)
    commit('SET_SEARCH_POKEMON', data)
  } catch (error) {
    // error
  }
}

export const getPokemon = async function ({ commit }, payload) {
  try {
    const { data } = await this.$axios.get(`${END_POINT}/${payload}`)

    if (data.id === 1) {
      const prev = 887
      const dataPrev = await this.$axios.get(`${END_POINT}/${prev}`)
      commit('SET_POKEMON_PREV', dataPrev.data)
    } else {
      const prev = data.id - 1
      const dataPrev = await this.$axios.get(`${END_POINT}/${prev}`)
      commit('SET_POKEMON_PREV', dataPrev.data)
    }

    if (data.id === 887) {
      const next = 1
      const dataNext = await this.$axios.get(`${END_POINT}/${next}`)
      commit('SET_POKEMON_NEXT', dataNext.data)
    } else {
      const next = data.id + 1
      const dataNext = await this.$axios.get(`${END_POINT}/${next}`)
      commit('SET_POKEMON_NEXT', dataNext.data)
    }

    commit('SET_POKEMON', data)
  } catch (error) {
    // error
  }
}

export const getPokemonSpecies = async function ({ commit }, payload) {
  try {
    const { data } = await this.$axios.get(`pokemon-species/${payload}`)
    const id = data.evolution_chain.url
      .split('https://pokeapi.co/api/v2/evolution-chain/')[1]
      .replace('/', '')
    const chainEvo = await this.$axios.get(`evolution-chain/${id}`)
    commit('SET_POKEMON_EVOLUTION', chainEvo.data.chain)
    commit('SET_POKEMON_SPECIES', data)
  } catch (error) {
    // error
  }
}
