import { topAll } from '../../server/index'
const state = {

}
const getters = {

}
const actions = {
  async topAll({ commit }, options) {
    console.log("555", topAll)
    let data = await topAll(options)
    console.log('11111')
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