import fly from '../utils/request'

// scroll数据接口
export function topAll (options) {
  return fly.post('product/category/sub/1', options)
}

// 主页数据接口
export function contentAll (options) {
  return fly.post('page/home/list/1.0.0', options)
}

//模糊搜索
export function fuzzySearch (options) {
  return fly.post('api/open/search/query/1.0.0', options)
}
