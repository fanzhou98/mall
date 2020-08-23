export default {
  //购物车物品列表(包括添加后被删除的)
  cartItem(state){
    return state.goodsItem
  },
  //购物车中物品的数量
  cartLength(state){
    return (state.goodsItem.filter(item=>{
      return item.count>0
    })).length
  },
  //实际购物车中的物品列表
  addedGoods(state){
    return state.goodsItem.filter(item=>{
      return item.count > 0
    })
  },
  //购物车中被选中的物品
  tickedItem(state,getters){
    return getters.addedGoods.filter(item=>{
      return item.selected
    })
  },
  //购物车中未被选中的物品
  notTickedItem(state){
    return state.goodsItem.filter(item=>{
      return item.count > 0 && item.selected === false
    })
  },
  //购物车中物品是否被全部选中
  /*allTicked(state,getters){
    return ( (getters.addedGoods.filter(item=>{
      return  item.selected === false
    })).length === 0 && getters.cartLength > 0)
  }*/
  allTicked(state,getters){
    if (getters.addedGoods.length === 0)return false;
    return !getters.addedGoods.find(item=>item.selected === false)

  }
}
