import {
  ADD_CART,
  ADD_NUM
}from "./mutations-types";
export default {
  addCart(context,payload){
    let oldProduct = context.state.goodsItem.find(item =>item.id === payload.id);
    if (oldProduct){
      context.commit(ADD_NUM,oldProduct)
    }else {
      context.commit(ADD_CART,payload)
    }
  },
}
