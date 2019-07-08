import { topAll, contentAll } from '../../server/index'
const state = {
  topAll: [],
  contnetAll: []
}
const getters = {

}
const actions = {
  //头部数据
  async scrollAll ({ commit }, options) {
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
  async bannerimgUrl ({ commit }, options) {
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
  topAll (state, options) {
    console.log(options)
    state.topAll = options
  },
  contentAll (state, options) {
    console.log(options)
    state.contnetAll = options
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}