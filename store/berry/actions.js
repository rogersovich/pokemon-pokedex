const END_POINT = 'berry'

export const getBerries = async function ({ commit }, payload) {
  try {
    commit('REMOVE_BERRY_DATA')
    commit('SET_SEARCH_STATUS', false)
    const { data } = await this.$axios.get(`${END_POINT}`)
    commit('SET_BERRY_URL', data.next)
    commit('SET_ADD_BERRY', data.results)
  } catch (error) {
    // error
  }
}

export const addBerryMore = async function ({ commit }, payload) {
  try {
    const { data } = await this.$axios.get(`${END_POINT}/?${payload}`)
    commit('SET_BERRY_URL', data.next)
    commit('SET_ADD_BERRY', data.results)
  } catch (error) {
    // error
  }
}

export const searchBerry = async function ({ commit }, payload) {
  try {
    commit('REMOVE_BERRY_DATA')
    commit('SET_SEARCH_STATUS', true)
    const { data } = await this.$axios.get(`${END_POINT}/${payload}`)
    commit('SET_SEARCH_BERRY', data)
  } catch (error) {
    // error
  }
}

export const getBerry = async function ({ commit }, payload) {
  try {
    const { data } = await this.$axios.get(`${END_POINT}/${payload}`)

    if (data.id === 1) {
      const prev = 64
      const dataPrev = await this.$axios.get(`${END_POINT}/${prev}`)
      commit('SET_BERRY_PREV', dataPrev.data)
    } else {
      const prev = data.id - 1
      const dataPrev = await this.$axios.get(`${END_POINT}/${prev}`)
      commit('SET_BERRY_PREV', dataPrev.data)
    }

    if (data.id === 64) {
      const next = 1
      const dataNext = await this.$axios.get(`${END_POINT}/${next}`)
      commit('SET_BERRY_NEXT', dataNext.data)
    } else {
      const next = data.id + 1
      const dataNext = await this.$axios.get(`${END_POINT}/${next}`)
      commit('SET_BERRY_NEXT', dataNext.data)
    }

    commit('SET_BERRY', data)
  } catch (error) {
    // error
  }
}
