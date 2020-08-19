import {
  ADD_CART,
  ADD_NUM
}from "./mutations-types";

export default {
  [ADD_CART](state,payload){
    state.goodsItem.push(payload)
  },

  [ADD_NUM](state,payload){
    payload.count += 1
  }
}
