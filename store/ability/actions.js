const END_POINT = 'ability'

export const getAbilities = async function ({ commit }, payload) {
  try {
    commit('REMOVE_ABILITY_DATA')
    commit('SET_SEARCH_STATUS', false)
    const { data } = await this.$axios.get(`${END_POINT}`)
    commit('SET_ABILITY_URL', data.next)
    commit('SET_ADD_ABILITY', data.results)
  } catch (error) {
    // error
  }
}

export const addAbilityMore = async function ({ commit }, payload) {
  try {
    const { data } = await this.$axios.get(`${END_POINT}/?${payload}`)
    commit('SET_ABILITY_URL', data.next)
    commit('SET_ADD_ABILITY', data.results)
  } catch (error) {
    // error
  }
}

export const searchAbility = async function ({ commit }, payload) {
  try {
    commit('REMOVE_ABILITY_DATA')
    commit('SET_SEARCH_STATUS', true)
    const { data } = await this.$axios.get(`${END_POINT}/${payload}`)
    commit('SET_SEARCH_ABILITY', data)
  } catch (error) {
    // error
  }
}

export const getAbility = async function ({ commit }, payload) {
  try {
    const { data } = await this.$axios.get(`${END_POINT}/${payload}`)

    if (data.id === 1) {
      const prev = 233
      const dataPrev = await this.$axios.get(`${END_POINT}/${prev}`)
      commit('SET_ABILITY_PREV', dataPrev.data)
    } else {
      const prev = data.id - 1
      const dataPrev = await this.$axios.get(`${END_POINT}/${prev}`)
      commit('SET_ABILITY_PREV', dataPrev.data)
    }

    if (data.id === 233) {
      const next = 1
      const dataNext = await this.$axios.get(`${END_POINT}/${next}`)
      commit('SET_ABILITY_NEXT', dataNext.data)
    } else {
      const next = data.id + 1
      const dataNext = await this.$axios.get(`${END_POINT}/${next}`)
      commit('SET_ABILITY_NEXT', dataNext.data)
    }

    commit('SET_ABILITY', data)
  } catch (error) {
    // error
  }
}
