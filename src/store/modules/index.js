import {
  topAll,
  contentAll,
  dwonAll,
  detailStr,
  detailPicture,
  detailAddress,
  childsAll,
  tabArrayStyle,
  goToBannerPart,
  fuzzySearch,
  speciFication,
  selectShoppings,
  order
} from '../../server/index'
const state = {
  topAll: [],
  contnetAll: [],
  dwonAlls: [],
  detailStr: {},
  detailStrImgsAll: [],
  detailAddressObj: {},
  scrollChildsAlls: [],
  tabsArrayFnTop: [],
  bannerDatas: [],
  fuzzySearch: [],
  specification: [],
  selectAll: {},
  orderAll: []
}
const getters = {

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
  // banner part
  async gotobannerPart ({ commit }, payload) {
    let data = await goToBannerPart(payload)
    commit('BannerPartData', data)
  },
  //模糊搜索
  async fuzzySearchs ({ commit }, payload) {
    var data = await fuzzySearch(payload)
    if (payload.pageIndex !== 1) {
      commit('fuzzySearch', [...state.fuzzySearch, ...data.result])
    } else {
      commit('fuzzySearch', data.result)
    }
  },
  // 规格
  async speciFication ({ commit }, payload) {
    var data = await speciFication(payload)
    commit('speciFicationFn', data.result)
  },
  // 选择商品
  async selectActionFn ({ commit }, payload) {
    var data = await selectShoppings(payload)
    commit('selectFn', data.result)
  },
  //订单请求
  async orderActionFn ({ commit }, payload) {
    var data = await order(payload)
    commit('orderFn', data.result)
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
  BannerPartData (state, options) {
    state.bannerDatas = options.result
  },
  fuzzySearch (state, options) {
    state.fuzzySearch = options
  },
  speciFicationFn (state, options) {
    state.specification = options
  },
  selectFn (state, options) {
    state.selectAll = options
  },
  orderFn (state, options) {
    state.orderAll = options
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}