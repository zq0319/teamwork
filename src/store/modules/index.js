import { topAll } from '../../server/index'
const state = {

}
const getters = {

}
const actions = {
  async topAll({ commit }, options) {
    let data = await topAll(options)
    return data
  }
}

const mutations = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}