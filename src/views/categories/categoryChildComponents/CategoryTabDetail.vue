<template>
  <div>
    <scroll class="scroll"
            :probeType="3"
            :pull-up-load="true"
            :listenScroll="true"
            ref="scroll"
            @getScrollPosition="getScrollPosition">
      <div class="row p-3">
        <div class="col-3 d-block justify-content-center align-items-center mb-2" v-for="(item,index) in detailTabInfo.list[this.currentTabIndex]">
            <div class="d-flex justify-content-center"><img :src="item.image" alt="" class="image"></div>
            <div class="text-center text">{{item.title}}</div>
        </div>
      </div>
      <tab-control class="row"
                   :title="['流行','新品','推荐']"
                   @homeTabClick="homeTabClick"/>

      <div class="row p-3">
       <!-- <category-goods-item :goodsItem="item"
                             v-for="item in goods[this.currentTabName].list[this.currentTabIndex]"
                             class="col-6 p-0 mt-2 d-block align-items-center"
                             @imageLoaded="imageLoaded" /> -->
        <category-goods-item :goodsItem="item"
                             v-for="item in detailTabInfo[currentTabName][currentTabIndex]"
                             class="col-6 p-0 mt-2 d-block align-items-center"
                             @imageLoaded="imageLoaded" />
      </div>
    </scroll>

    <back-top @click.native="backUpClick"
              v-show="showBackTop" :right="20" :bottom="100"/>
  </div>
</template>

<script>
  import TabControl from "components/common/tabControl/TabControl";
  import Scroll from "components/common/scroll/Scroll2";

  import CategoryGoodsItem from "./CategoryGoodsItem";

  import BackTop from 'components/content/backTop/BackTop'
  import {backTop} from 'common/mixins'
  import {debounce} from 'common/utils'

  export default {
    name: "CategoryTabDetail",
    components:{
      TabControl,
      Scroll,
      CategoryGoodsItem,
      BackTop
    },
    mixins:[
      backTop
    ],
    props:{
      detailTabInfo:{
        // type:Object,
        default(){
          return {}
        }
      },
      goods:{
        type: Object,
        default(){
          return {}
        }
      },
      currentTabIndex:{
        type: Number,
        default: 0
      },
    },
    data(){
      return{
        show:false,
        currentIndex:0,
        currentTabName:'pop',
        goodsList:[],
      }
    },
    methods:{
      homeTabClick(index){
        switch (index) {
          case 0:{
            this.currentTabName = 'pop';
            // this.$refs.scroll.scrollTo(0,this.A,150)
            break
          }
          case 1:{
            this.currentTabName = 'new';
            // this.$refs.scroll.scrollTo(0,this.B,150)
            break
          }
          case 2:{
            this.currentTabName = 'sell';
            // this.$refs.scroll.scrollTo(0,this.C,150)
            break
          }
        }
      },
      getScrollPosition(position){
        //回到顶部按钮
        this.showBackTop = (-position.y) > 1000;
      },
      imageLoaded(){
        debounce(()=>{
          this.$refs.scroll.refresh()
        },20)
      },
    },
  }
</script>

<style scoped>
  .image{
    width: 45px;
    height: 45px;
  }
  .text{
    font-size: 12px;
    font-weight: 300;
  }
  .scroll{
    height: calc(100vh - 45px - 49px);
  }
</style>
