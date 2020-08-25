import {request} from "./request";

export function getCategory() {
  return request({
    url:'/category',
  })
}
export function getDetailCategory(maitKey) {
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}

export function getMiniWallkeyGoods(type,miniWallkey) {
  return request({
    url:'/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
