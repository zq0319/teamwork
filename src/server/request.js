import fly from '../utils/request'

// scroll数据接口
export function topAll (options) {
  return fly.post('product/category/sub/1', options)
}

// 主页数据接口
export function contentAll (options) {
  return fly.post('page/home/list/1.0.0', options)
}

// 上拉数据
export function dwonAll (options) {
  return fly.post('page/home/products/1.0.0', options)
}