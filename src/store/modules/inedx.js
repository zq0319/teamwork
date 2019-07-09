import { topAll, contentAll, toBannerPart } from '../../server/index'
const state = {
  topAll: [],
  contnetAll: [],
  dwonAll: [],
  bannerDatas: []
}

const actions = {
  //头部数据
  async scrollAll({ commit }, options) {
    // var data = await topAll(options)
    // console.log(data, '...............')
    wx.request({
      url: 'https://upapi.jinaup.com/api/open/product/category/sub/1', //开发者服务器接口地址",
      data: options, //请求的参数",
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: res => {
        if (res.data.res_code) {
          commit('topAll', res.data.result)
        }
      }
    });
  },
  // 轮播图片
  async bannerimgUrl({ commit }, options) {
    // var data = await contentAll(options)
    // console.log(data, '...............')
    wx.request({
      url: 'https://upapi.jinaup.com/api/open/page/home/list/1.0.0', //开发者服务器接口地址",
      data: options, //请求的参数",
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: res => {
        if (res.data.res_code) {
          commit('contentAll', res.data.result)
        }
      }
    });
  },
}

const mutations = {
  topAll(state, options) {
    console.log(options)
    state.topAll = options
  },
  contentAll(state, options) {
    console.log(options)
    state.contnetAll = options
  },
  // 上拉数据
  async dwonAll({ commit }, options) {
    // var data = await contentAll(options)
    // console.log(data, '...............')
    wx.request({
      url: 'https://upapi.jinaup.com/api/open/page/home/products/1.0.0', //开发者服务器接口地址",
      data: options, //请求的参数",
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: res => {
        if (res.data.res_code) {
          commit('cdwonAll', [...state.dwonAll, ...res.data.result])
        }
      }
    });
  },
  //轮播跳转数据
  async gotobannerPart({ commit }, options) {
    let data = await toBannerPart(options)
    console.log(data, '0.0.0.0.0.0.0.0.0.0')
    commit("goToBannerParts", data)
  }
}

const mutations = {
  //头部数据
  topAll(state, options) {
    state.topAll = options
  },
  // 轮播图片
  contentAll(state, options) {
    state.contnetAll = options
  },
  // 上拉数据
  cdwonAll(state, options) {
    state.dwonAll = options
  },
  //轮播跳转数据
  goToBannerParts(state, options) {
    state.bannerDatas = options.result
    console.log(state.bannerDatas)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}