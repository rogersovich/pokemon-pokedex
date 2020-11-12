export const TOGGLE_LOADING = function (state) {
  state.loading = !state.loading
}

export const TOGGLE_ERROR = function (state, payload) {
  if (payload) {
    state.errors = payload
  } else {
    state.errors = {}
  }
}
