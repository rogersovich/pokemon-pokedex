export const SET_MOVE = function (state, payload) {
  state.move = payload
}

export const SET_ADD_MOVE = function (state, payload) {
  payload.forEach((move) => {
    state.moves.push(move)
  })
}

export const SET_SEARCH_MOVE = function (state, payload) {
  state.moves.push(payload)
}

export const REMOVE_MOVE_DATA = function (state, payload) {
  state.moves = []
}

export const SET_SEARCH_STATUS = function (state, payload) {
  state.search = payload
}

export const SET_MOVE_URL = function (state, payload) {
  state.next = payload
}

export const SET_MOVE_NEXT = function (state, payload) {
  state.moveNext = payload
}

export const SET_MOVE_PREV = function (state, payload) {
  state.movePrev = payload
}
