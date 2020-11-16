export const SET_POKEMON = function (state, payload) {
  state.pokemon = payload
}

export const SET_ADD_POKEMON = function (state, payload) {
  payload.forEach((item) => {
    state.pokemons.push(item)
  })
}

export const SET_SEARCH_POKEMON = function (state, payload) {
  state.pokemons.push(payload)
}

export const REMOVE_POKEMON_DATA = function (state, payload) {
  state.pokemons = []
}

export const SET_SEARCH_STATUS = function (state, payload) {
  state.search = payload
}

export const SET_POKEMON_URL = function (state, payload) {
  state.next = payload
}

export const SET_POKEMON_SPECIES = function (state, payload) {
  state.pokemonSpecies = payload
}

export const SET_POKEMON_NEXT = function (state, payload) {
  state.pokemonNext = payload
}

export const SET_POKEMON_PREV = function (state, payload) {
  state.pokemonPrev = payload
}

export const SET_POKEMON_EVOLUTION = function (state, payload) {
  state.pokemonEvolution = payload
}
