<template>
  <div>
    <div class="row bottom-bar">
      <div class="col-3 d-flex align-items-center p-0">
        <div class="select-wrap d-flex align-items-center justify-content-center" @click="selectClick()">
            <i class="fa fa-check fa-lg" v-show="this.allTicked"></i>
        </div>
        <div class="text ml-2">全选</div>
      </div>
      <div class="col d-flex p-0 justify-content-center align-items-center">
        <div class="total">合计:{{totalPrice}}</div>
      </div>
      <div class="col p-0 d-flex align-items-center justify-content-center button">
        <div class="text-center">
          去结算({{tickedItem.length}})
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import {Edit_Status_True,Edit_Status_False} from 'store/mutations-types'

  export default {
    name: "CartBottomBar",
    computed:{
      ...mapGetters(['cartItem','notTickedItem','addedGoods','tickedItem','allTicked']),
      /*总价格*/
      totalPrice(){
        //console.log(this.$store.state.goodsItem);
       return '￥' + this.tickedItem.reduce((preValue,item)=>{
          return item.price * item.count + preValue
          },0).toFixed(2)
      },
      /*判断购物车中是否存在未选中的货物，以此决定全选图案是否显示*/
      isActive(){
        return (this.addedGoods.filter(item=>{
          return  item.selected === false
        })).length <= 0
      }
    },
    methods:{
      selectClick(){
        if(this.notTickedItem.length > 0){
          this.$store.commit(Edit_Status_True,this.notTickedItem)
        }else{
          this.$store.commit(Edit_Status_False,this.addedGoods)
        }
      }
    }
  }
</script>

<style scoped>
.bottom-bar{
  position: relative;
  height: 45px;
  background-color: whitesmoke;
  z-index: 120;
  font-size: 20px;
  font-weight: 300;
}
  .select-wrap{
    border:2px solid gainsboro;
    border-radius: 50%;
    height: 36px;
    width: 36px;
    color: var(--color-dark);
  }
  .button{
    background-color: #ffb8b8;
  }
  .total{
    font-size: 15px
  }
</style>
