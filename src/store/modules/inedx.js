import { topAll, contentAll } from '../../server/index'
const state = {
  topAll: [],
  contnetAll: [],
  fuzzySearch: []
}

const actions = {
  //头部数据
  async scrollAll({ commit }, options) {
    // var data = await topAll(options)
    // console.log(data, '..............8520.')
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
  async fuzzySearchs({ commit }, options) {
    wx.request({
      url: `https://upapi.jinaup.com/api/open/search/query/1.0.0`, //开发者服务器接口地址",
      // url: `https://apis.map.qq.com/ws/place/v1/suggestion/?region=${options.selector[options.index]}&keyword=${options.title}&key=LRIBZ-N7L6D-R6M44-PM5RE-GTERH-V2F7E`,
      data: options, //请求的参数",
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: res => {
        if (res.data.res_code) {
          commit('fuzzySearch', res.data.result)
        }
      }
    })
  }
}

const mutations = {
  topAll(state, options) {
    // console.log(options)
    state.topAll = options
  },
  contentAll(state, options) {
    // console.log(options)
    state.contnetAll = options
  },
  fuzzySearch(state, options) {
    // console.log(options)
    state.fuzzySearch = options
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}