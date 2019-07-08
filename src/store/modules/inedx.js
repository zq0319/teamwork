import { topAll } from '../../server/index'
const state = {

}

const actions = {
  async scrollAll ({ commit }, options) {
    console.log(topAll)
    let data = await topAll()
    console.log(data)

    return data
  }
}

const mutations = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}