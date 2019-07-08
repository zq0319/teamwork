import fly from '../utils/request'
console.log(fly)
// scroll数据接口
export function topAll(options) {
  return fly.request(`product/category/sub/1`, {parentId:0}, {
    method: 'POST'
  })
}