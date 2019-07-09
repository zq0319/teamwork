import { topAll, contentAll, dwonAll, detailStr, detailPicture, detailAddress, childsAll, tabArrayStyle } from '../../server/index'
const state = {
  topAll: [],
  contnetAll: [],
  dwonAlls: [],
  detailStr: {},
  detailStrImgsAll: [],
  detailAddressObj: {},
  scrollChildsAlls: [],
  tabsArrayFnTop: []
}

const actions = {
  //头部数据
  async scrollAll ({ commit }, payload) {
    let data = await topAll(payload)
    data.result.unshift({ cname: '今日推荐' })
    commit('topAll', data.result)
  },
  // 轮播图片
  async bannerimgUrl ({ commit }, payload) {
    var data = await contentAll(payload)
    commit('contentAll', data.result)
  },
  // 上拉数据
  async dwonAll ({ commit }, payload) {
    var data = await dwonAll(payload)
    commit('cdwonAll', [...state.dwonAlls, ...data.result])
  },
  //详情页面
  async detail ({ commit }, payload) {
    var data = await detailStr(payload)
    commit('detailAll', data.result)

    return data.result
  },
  //详情图片
  async detailStrImg ({ commit }, payload) {
    var data = await detailPicture(payload)
    commit('detailStrImgs', data.result)
  },
  //详情提示
  async detailAddress ({ commit }, payload) {
    var data = await detailAddress(payload)
    commit('detailAddressO', data)
  },
  //srcoll数据2.0
  async scrollChildsAll ({ commit }, payload) {
    var data = await childsAll(payload)
    commit('scrollChildsAlls', data.result)
  },
  //tab状态数据
  async tabsArray ({ commit }, payload) {
    var data = await tabArrayStyle(payload)
    console.log(payload.pageIndex !== 1)
    if (payload.pageIndex !== 1) {
      commit('tabsArrayFn', [...state.tabsArrayFnTop, ...data.result])
    } else {
      commit('tabsArrayFn', data.result)
    }

  },
}

const mutations = {
  topAll (state, options) {
    state.topAll = options
  },
  contentAll (state, options) {
    state.contnetAll = options
  },
  cdwonAll (state, options) {
    state.dwonAlls = options
  },
  detailAll (state, options) {
    state.detailStr = options
  },
  detailStrImgs (state, options) {
    state.detailStrImgsAll = options
  },
  detailAddressO (state, options) {
    state.detailAddressObj = options
  },
  scrollChildsAlls (state, options) {
    state.scrollChildsAlls = options
  },
  tabsArrayFn (state, options) {
    state.tabsArrayFnTop = options
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}