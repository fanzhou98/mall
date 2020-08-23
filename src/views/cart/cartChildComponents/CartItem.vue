<template>
  <div>
    <Scroll class="scroll-wrap">
      <!--购物车商品-->
      <div class="row item pt-2 pb-2" v-for="(item,index) in cartItem" v-if="item.count>0">
        <!--选中图标-->
        <div class="col-2 d-flex align-items-center">
          <div class="select-wrap" @click="selectClick(item)" style="height: 2em;width: 2em">
            <div v-if="item.selected" class="d-flex align-items-center justify-content-center">
              <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-check2 select" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              </svg>
            </div>
          </div>
        </div>
        <!--商品图片-->
        <div class="col-3 p-0" style="height: 100%">
          <img :src="item.topImages" alt="" class="image">
        </div>
        <!--商品信息-->
        <div class="col-7 d-block ">
          <!--标题-->
          <div class="row ml-1 align-items-center" style="height: 30%; font-size: 20px">
            <span class="text">{{item.title}}</span>
          </div>
          <!--简介-->
          <div class="row m-auto text-muted align-items-center" style="height: 30%">
            <span class="text">{{item.desc}}</span>
          </div>
          <!--价格，数量-->
          <div class="row d-flex justify-content-between align-items-center" style="height: 30%;font-size: 23px">
            <div style="" class="ml-2">{{item.price}}</div>
            <div class="d-flex align-content-center align-items-center">
              <div class="num-btn" @click="addNum(item)">+</div>
              <div class="ml-1 mr-1 align-content-center">
                <div>
                  x{{item.count}}
                </div>
              </div>
              <div class="mr-3 num-btn" @click="subNum(item)">-</div>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";

  import {ADD_NUM,Sub_Num} from "store/mutations-types";

  import { mapGetters } from 'vuex'
  export default {
    name: "CartItem",
    components:{
      Scroll,
    },
    computed:{
      ...mapGetters(['cartItem'])
    },
    methods:{
      selectClick(item){
       /* this.cartItem[index].selected = !this.cartItem[index].selected;
        console.log(this.cartItem[index].selected);*/
        item.selected = !item.selected
      },
      addNum(item){
        this.$store.commit(ADD_NUM,item)
      },
      subNum(item){
        this.$store.commit(Sub_Num,item)
      }
    },
  }
</script>

<style scoped>
.scroll-wrap{
  height: calc(100vh - 45px - 49px - 45px);
}
  .image{
    height: 100%;
    width: 100%;
    border-radius: 20px;
  }
  .item{
    height: 150px;
  }
  .text{
    height: 20px;
    line-height: 20px;
    /*强制不换行*/
    white-space: nowrap;
    /*隐藏多余属性*/
    overflow: hidden;
    /*隐藏部分用省略号代替*/
    text-overflow:ellipsis;
  }
  .select{
    color: var(--color-dark);
  }
  .select-wrap{
    border:2px solid gainsboro;
    border-radius: 50%;
  }
  .num-btn{
    color: var(--color-dark);
    font-size: 30px;
  }


</style>
