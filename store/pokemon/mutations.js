export const SET_POKEMON = function (state, payload) {
  state.pokemon = payload
}

export const SET_ADD_POKEMON = function (state, payload) {
  payload.forEach((item) => {
    state.pokemons.push(item)
  })
}

export const REMOVE_POKEMON_DATA = function (state, payload) {
  state.pokemons = []
}

export const SET_POKEMON_URL = function (state, payload) {
  state.next = payload
}

// export const SET_POKEMONS = function (state, payload) {
//   state.pokemons = payload
// }
