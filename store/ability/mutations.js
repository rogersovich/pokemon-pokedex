export const SET_ABILITY = function (state, payload) {
  state.ability = payload
}

export const SET_ADD_ABILITY = function (state, payload) {
  payload.forEach((ability) => {
    state.abilities.push(ability)
  })
}

export const SET_SEARCH_ABILITY = function (state, payload) {
  state.abilities.push(payload)
}

export const REMOVE_ABILITY_DATA = function (state, payload) {
  state.abilities = []
}

export const SET_SEARCH_STATUS = function (state, payload) {
  state.search = payload
}

export const SET_ABILITY_URL = function (state, payload) {
  state.next = payload
}

export const SET_ABILITY_NEXT = function (state, payload) {
  state.abilityNext = payload
}

export const SET_ABILITY_PREV = function (state, payload) {
  state.abilityPrev = payload
}
