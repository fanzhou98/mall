import {
  ADD_CART,
  ADD_NUM
}from "./mutations-types";
export default {
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      let oldProduct = context.state.goodsItem.find(item =>item.id === payload.id);
      if (oldProduct){
        context.commit(ADD_NUM,oldProduct);
        resolve('您之前已经添加过此商品')
      }else {
        context.commit(ADD_CART,payload);
        resolve('新商品已添加进购物车')
      }
    })
  },
}
