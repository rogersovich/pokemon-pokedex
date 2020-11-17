const END_POINT = 'location'

export const getLocations = async function ({ commit }, payload) {
  try {
    commit('REMOVE_LOCATION_DATA')
    commit('SET_SEARCH_STATUS', false)
    const { data } = await this.$axios.get(`${END_POINT}`)
    commit('SET_LOCATION_URL', data.next)
    commit('SET_ADD_LOCATION', data.results)
  } catch (error) {
    // error
  }
}

export const addLocationMore = async function ({ commit }, payload) {
  try {
    const { data } = await this.$axios.get(`${END_POINT}/?${payload}`)
    commit('SET_LOCATION_URL', data.next)
    commit('SET_ADD_LOCATION', data.results)
  } catch (error) {
    // error
  }
}

export const searchLocation = async function ({ commit }, payload) {
  try {
    commit('REMOVE_LOCATION_DATA')
    commit('SET_SEARCH_STATUS', true)
    const { data } = await this.$axios.get(`${END_POINT}/${payload}`)
    commit('SET_SEARCH_LOCATION', data)
  } catch (error) {
    // error
  }
}

export const getLocation = async function ({ commit }, payload) {
  try {
    const { data } = await this.$axios.get(`${END_POINT}/${payload}`)

    if (data.id === 1) {
      const prev = 954
      const dataPrev = await this.$axios.get(`${END_POINT}/${prev}`)
      commit('SET_LOCATION_PREV', dataPrev.data)
    } else {
      const prev = data.id - 1
      const dataPrev = await this.$axios.get(`${END_POINT}/${prev}`)
      commit('SET_LOCATION_PREV', dataPrev.data)
    }

    if (data.id === 954) {
      const next = 1
      const dataNext = await this.$axios.get(`${END_POINT}/${next}`)
      commit('SET_LOCATION_NEXT', dataNext.data)
    } else {
      const next = data.id + 1
      const dataNext = await this.$axios.get(`${END_POINT}/${next}`)
      commit('SET_LOCATION_NEXT', dataNext.data)
    }

    commit('SET_LOCATION', data)
  } catch (error) {
    // error
  }
}
