export const SET_LOCATION = function (state, payload) {
  state.location = payload
}

export const SET_ADD_LOCATION = function (state, payload) {
  payload.forEach((location) => {
    state.locations.push(location)
  })
}

export const SET_SEARCH_LOCATION = function (state, payload) {
  state.locations.push(payload)
}

export const REMOVE_LOCATION_DATA = function (state, payload) {
  state.locations = []
}

export const SET_SEARCH_STATUS = function (state, payload) {
  state.search = payload
}

export const SET_LOCATION_URL = function (state, payload) {
  state.next = payload
}

export const SET_LOCATION_NEXT = function (state, payload) {
  state.locationNext = payload
}

export const SET_LOCATION_PREV = function (state, payload) {
  state.locationPrev = payload
}
