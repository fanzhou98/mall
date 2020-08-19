import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    goodsItem:[],
  },
  mutations,
  actions,

/*  mutations:{
    addCart(state,payload){
      state.addedGoods.push(payload)
    }
  },*/
});

export default store


