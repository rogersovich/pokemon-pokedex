export const SET_ITEM = function (state, payload) {
  state.item = payload
}

export const SET_ADD_ITEM = function (state, payload) {
  payload.forEach((item) => {
    state.items.push(item)
  })
}

export const SET_SEARCH_ITEM = function (state, payload) {
  state.items.push(payload)
}

export const REMOVE_ITEM_DATA = function (state, payload) {
  state.items = []
}

export const SET_SEARCH_STATUS = function (state, payload) {
  state.search = payload
}

export const SET_ITEM_URL = function (state, payload) {
  state.next = payload
}

export const SET_ITEM_SPECIES = function (state, payload) {
  state.itemSpecies = payload
}

export const SET_ITEM_NEXT = function (state, payload) {
  state.itemNext = payload
}

export const SET_ITEM_PREV = function (state, payload) {
  state.itemPrev = payload
}
