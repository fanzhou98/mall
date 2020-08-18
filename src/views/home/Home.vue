<template>
  <div>
    <div class="container">
      <!--navBar-->
      <nav-bar
        class="row justify-content-around align-items-center shadow-sm nav-bar"
        :middleColNum=12>
        <!--中间插槽-->
        <div class="slot align-items-center" slot="middle">
          <div class="title text-center">美丽说</div>
        </div>
      </nav-bar>
      <!--滚动后固定的tabbar-->
      <tab-control class="row tabControl-2"
                   :title="['Trends','New','Special']"
                   :currentTabIndex="currentTabIndex"
                   @homeTabClick="tabClick"
                   ref="tabControl2"
                   v-show="fixTabControl"
      />

      <!--
        滚动内容
      -->
      <scroll class="main-content"
              :probeType="3"
              :pull-up-load="true"
              ref="scroll"
              @getScrollPosition="getScrollPosition"
              @pullUp="loadMore"
              :pulldown="true"
              :data="[this.currentTabName,this.currentTabIndex,this.goods]"
              :listenScroll="true">
        <!--swiper-->
        <div class="row swiper">
          <div class="col">
            <home-swiper :banners="banners" @swiperImageLoaded="swiperImageLoaded"></home-swiper>
          </div>
        </div >

        <!--Recommends-->
        <home-recommand class="row d-flex align-items-center justify-content-between shadow-sm mt-1 pt-2 pb-2 mb-2"
                        :recommands="recommands"
                        id="recommand"/>

        <!--Feature-->
        <feature-view class="row d-flex align-items-center mb-2"/>

        <!--TabControl-->
        <tab-control class="row tabControl"
                     :title="['Trends','New','Special']"
                     @homeTabClick="tabClick"
                     ref="tabControl1"
                     :class={fixTabControl:fixTabControl}
                     :currentTabIndex="currentTabIndex"
        />

        <!--GoodsList-->
        <goods-list class="p-3 goodList-scroll"
                    :goods="goods[currentTabName].list"
        />
      </scroll>

      <!--BackTop-->
      <back-top @click.native="backUpClick"
                v-show="showBackTop"/>
    </div>
  </div>
</template>

<script>
  /*Home子组件*/
  import HomeSwiper from './childcomponents/HomeSwiper'
  import HomeRecommand from "./childcomponents/HomeRecommand";
  import FeatureView from "./childcomponents/FeatureView";

  /*common组件*/
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from "components/common/tabControl/TabControl";
  import GoodsList from "components/content/goodsList/GoodsList";
  import Scroll from "components/common/scroll/Scroll2";
  import BackTop from "components/content/backTop/BackTop";

  /*mixins*/
  import {goodsListDebounce,backTop} from 'common/mixins'

  /*网络请求*/
  import {
    getHomeMultidata,
    getHomeGoods
  } from "network/home";

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommand,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
    },
    mixins:[
      goodsListDebounce,
      backTop,
    ],
    data(){
      return{
        banners:[],
        recommands:[],
        /*必须传入默认值*/
        currentTabName:'pop',
        goods:{
            'pop':{list:[],page:0},
            'new':{list:[],page:0},
            'sell':{list:[],page:0}
        },
        //tab栏固定高度
        tabControlTop:500,
        fixTabControl:false,
        currentTabIndex:0,
        A:-480,
        B:-480,
        C:-480,
      }
    },
    /*当组件创建时，请求数据*/
    created() {
      //请求首页上方数据
      this.getHomeMultidata();

      //请求首页商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell')
    },
    methods:{
      /*
      *   组件监听相关
      * */
      //监听tab点击
      tabClick(index){
        this.$nextTick(()=>{
          switch (index) {
            case 0:{
              this.currentTabName = 'pop';
              break
            }
            case 1:{
              this.currentTabName = 'new';
              break
            }
            case 2:{
              this.currentTabName = 'sell';
              break
            }
          }
        })

        this.$refs.tabControl2.currentIndex = index
        this.$refs.tabControl1.currentIndex = index
      },


      getScrollPosition(position){
        //决定回到顶部是否显示的高度
        this.showBackTop = (-position.y) > 1000;
       // console.log(position);
        //决定tabbar是否固定
        this.fixTabControl = (-position.y) > this.tabControlTop
      },
      //上拉加载更多
      loadMore(){
        this.getHomeGoods(this.currentTabName)
      },
      //监听swiper加载
      swiperImageLoaded(){
        //这里获取的offsetTop是到最顶端的，是到元素外面一层位置为absolute/fixed/relative的元素的顶部的距离，也就是header，位置为relative
        this.tabControlTop = this.$refs.tabControl1.$el.offsetTop-45
      },

      /*
      *   网络请求
      * */
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banners = res.data.banner.list;
          this.recommands = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const goodsPage = this.goods[type].page + 1;
        getHomeGoods(type,goodsPage).then(res=>{
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page = goodsPage;
          //this.$refs.scroll.finishPullUp()
        })
      }
    },

    asctivated(){
      /*if (this.currentTabName === 'pop'){
        //this.$refs.scroll.scrollTo(0,this.tabA,0)
        console.log(this.tabA);
      }
      if(this.currentTabName === 'new'){
        this.$refs.scroll.scrollTo(0,this.tabB,0)
      }
      if(this.currentTabName === 'sell'){
        this.$refs.scroll.scrollTo(0,this.tabC,0)
      }*/

    },
    deactivated(){
      //取消对公共组件的全局事件监听
      this.$bus.$off('imageLoaded',this.goodsImageListener)
    }
  }
</script>

<style scoped>
  .nav-bar{
    position: relative;
    background-color: #ffcccc;
    height: 45px;
    z-index: 999;
  }
  .title{
    font-size: 20px;
    color: floralwhite;

  }
  #recommand{
    background-color:white ;
  }
  .container{
    height: 100vh;
    width: 100vw;
  }
  .main-content{
    height: calc(100vh - 94px);
  }
  .tabControl-2{
    position: fixed;
    right: 0;
    left: 0;
    z-index: 60;
    background-color: #fff;
    padding-left: 15px;
    padding-right: 15px;
  }
  .container{
    height: calc(100vh - 45px);
  }
</style>
