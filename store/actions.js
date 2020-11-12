export const toggleLoading = function ({ commit }) {
  commit('TOGGLE_LOADING')
}

export const toggleError = function ({ commit }, payload) {
  commit('TOGGLE_ERROR', payload)
}
