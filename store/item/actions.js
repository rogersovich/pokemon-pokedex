const END_POINT = 'item'

export const getItems = async function ({ commit }, payload) {
  try {
    commit('REMOVE_ITEM_DATA')
    commit('SET_SEARCH_STATUS', false)
    const { data } = await this.$axios.get(`${END_POINT}`)
    commit('SET_ITEM_URL', data.next)
    commit('SET_ADD_ITEM', data.results)
  } catch (error) {
    // error
  }
}

export const addItemMore = async function ({ commit }, payload) {
  try {
    const { data } = await this.$axios.get(`${END_POINT}/?${payload}`)
    commit('SET_ITEM_URL', data.next)
    commit('SET_ADD_ITEM', data.results)
  } catch (error) {
    // error
  }
}

export const searchItem = async function ({ commit }, payload) {
  try {
    commit('REMOVE_ITEM_DATA')
    commit('SET_SEARCH_STATUS', true)
    const { data } = await this.$axios.get(`${END_POINT}/${payload}`)
    commit('SET_SEARCH_ITEM', data)
  } catch (error) {
    // error
  }
}

export const getItem = async function ({ commit }, payload) {
  try {
    const { data } = await this.$axios.get(`${END_POINT}/${payload}`)

    if (data.id === 1) {
      const prev = 954
      const dataPrev = await this.$axios.get(`${END_POINT}/${prev}`)
      commit('SET_ITEM_PREV', dataPrev.data)
    } else {
      const prev = data.id - 1
      const dataPrev = await this.$axios.get(`${END_POINT}/${prev}`)
      commit('SET_ITEM_PREV', dataPrev.data)
    }

    if (data.id === 954) {
      const next = 1
      const dataNext = await this.$axios.get(`${END_POINT}/${next}`)
      commit('SET_ITEM_NEXT', dataNext.data)
    } else {
      const next = data.id + 1
      const dataNext = await this.$axios.get(`${END_POINT}/${next}`)
      commit('SET_ITEM_NEXT', dataNext.data)
    }

    commit('SET_ITEM', data)
  } catch (error) {
    // error
  }
}
