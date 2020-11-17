export const SET_BERRY = function (state, payload) {
  state.berry = payload
}

export const SET_ADD_BERRY = function (state, payload) {
  payload.forEach((berry) => {
    state.berries.push(berry)
  })
}

export const SET_SEARCH_BERRY = function (state, payload) {
  state.berries.push(payload)
}

export const REMOVE_BERRY_DATA = function (state, payload) {
  state.berries = []
}

export const SET_SEARCH_STATUS = function (state, payload) {
  state.search = payload
}

export const SET_BERRY_URL = function (state, payload) {
  state.next = payload
}

export const SET_BERRY_NEXT = function (state, payload) {
  state.berryNext = payload
}

export const SET_BERRY_PREV = function (state, payload) {
  state.berryPrev = payload
}
