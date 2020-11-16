const END_POINT = 'move'

export const getMoves = async function ({ commit }) {
  try {
    commit('REMOVE_MOVE_DATA')
    commit('SET_SEARCH_STATUS', false)
    const { data } = await this.$axios.get(`${END_POINT}`)
    commit('SET_MOVE_URL', data.next)
    commit('SET_ADD_MOVE', data.results)
  } catch (error) {
    // error
  }
}

export const addMoveMore = async function ({ commit }, payload) {
  try {
    const { data } = await this.$axios.get(`${END_POINT}/?${payload}`)
    commit('SET_MOVE_URL', data.next)
    commit('SET_ADD_MOVE', data.results)
  } catch (error) {
    // error
  }
}

export const searchMove = async function ({ commit }, payload) {
  try {
    commit('REMOVE_MOVE_DATA')
    commit('SET_SEARCH_STATUS', true)
    const { data } = await this.$axios.get(`${END_POINT}/${payload}`)
    commit('SET_SEARCH_MOVE', data)
  } catch (error) {
    // error
  }
}

export const getMove = async function ({ commit }, payload) {
  try {
    const { data } = await this.$axios.get(`${END_POINT}/${payload}`)

    if (data.id === 1) {
      const prev = 813
      const dataPrev = await this.$axios.get(`${END_POINT}/${prev}`)
      commit('SET_MOVE_PREV', dataPrev.data)
    } else {
      const prev = data.id - 1
      const dataPrev = await this.$axios.get(`${END_POINT}/${prev}`)
      commit('SET_MOVE_PREV', dataPrev.data)
    }

    if (data.id === 813) {
      const next = 1
      const dataNext = await this.$axios.get(`${END_POINT}/${next}`)
      commit('SET_MOVE_NEXT', dataNext.data)
    } else {
      const next = data.id + 1
      const dataNext = await this.$axios.get(`${END_POINT}/${next}`)
      commit('SET_MOVE_NEXT', dataNext.data)
    }

    commit('SET_MOVE', data)
  } catch (error) {
    // error
  }
}
