import {
  ADD_CART,
  ADD_NUM,
  Sub_Num,
  Edit_Status_True,
  Edit_Status_False
}from "./mutations-types";

export default {
  /*
  * 加入购物车
  * */
  [ADD_CART](state,payload){
    //给物品添加选中属性，默认为false
    payload.selected = false;
    //修改state状态
    state.goodsItem.push(payload)
  },

  /*
  * 增加购物车中选中物品的数量
  * */
  [ADD_NUM](state,payload){
    payload.count += 1
  },

  /*
  * 减少购物车中选中物品的数量
  * */
  [Sub_Num](state,payload){
    payload.count -= 1
  },

  /*
  * 全选购物车中物品
  * */
  [Edit_Status_True](state,payload){
    for (let item of payload){
      item.selected = true
    }
  },

  /*
  * 取消全选
  * */
  [Edit_Status_False](state,payload){
    for (let item of payload){
      item.selected = false
    }
  }
}
