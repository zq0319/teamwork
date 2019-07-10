import fly from '../utils/request'

// scroll数据接口
export function topAll(options) {
  return fly.post('product/category/sub/1', options)
}

// 主页数据接口
export function contentAll(options) {
  return fly.post('page/home/list/1.0.0', options)
}

// 上拉数据
export function dwonAll(options) {
  return fly.post('page/home/products/1.0.0', options)
}

// 详情数据
export function detailStr(options) {
  return fly.post('product/info/1.0.0', options)
}

// 详情图片
export function detailPicture(options) {
  return fly.post('product/detailPicture/1.0.0', options)
}

// 详情提示
export function detailAddress(options) {
  return fly.post('shipping/templates/info/1.0.0', options)
}


// scroll数据接口2.0
export function childsAll(options) {
  return fly.post('product/category/query/1.0.0', options)
}

// tab状态数据
export function tabArrayStyle(options) {
  return fly.post('product/category/productList/1.0.0', options)
}

// banner part
export function goToBannerPart(options) {
  return fly.post(`sepcial/query/1.0.0`, options)
}

// 模糊搜索
export function fuzzySearch(options) {
  return fly.post('search/query/1.0.0', options)
}

// 保存收货地址
export function takeActionlist(options) {
  return fly.post('user/address/addAddress/1.0.0', options)
}


//实名认证保存
export function savedata(options) {
  return fly.post('user/auth/editBase64/1.0.0', options)
}

