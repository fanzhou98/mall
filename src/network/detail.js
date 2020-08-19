import {request} from "./request";

export function getDetail(id) {
  return request({
    url:'/detail',
    params:{
      iid:id
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}


/*
* Detail
**/
/*Goods简介*/
export class Goods {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc =itemInfo.discountDesc;
    this.columns =columns;
    this.services = services;
    this.realPrice =itemInfo.realPrice
  }
}

/*商家信息*/
export class Shop {
  constructor(shopInfo){
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
    this.shopUrl = shopInfo.shopUrl
  }
}

/*产品参数*/
export class Params{
  constructor(itemParams){
    this.rule =itemParams.rule
    this.tables = itemParams.rule.tables[0]
    this.info = itemParams.info
    this.set = itemParams.info.set
  }
}

/*评论*/
export class Comments {
  constructor(lister){
    const list = lister[0]
    this.uname = list.user.uname;
    this.avatar = list.user.avatar;
    this.content = list.content;
    this.time = list.created;
    this.image = list.image
  }
}
