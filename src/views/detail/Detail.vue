<template>
  <div>
      <div class="container" id="main-wrap">
        <detail-nav-bar class="nav shadow-sm row"
                        @navClick="navClick"
                        ref="navBar"/>
        <!--Scroll-->
        <scroll class="scroll"
                :probeType="3"
                :pull-up-load="true"
                ref="scroll"
                :listen-scroll="true"
                :pulldown="true"
                @getScrollPosition="getScrollPosition">
          <!--Swiper-->
          <div class="row swiper">
            <div class="col p-0">
              <detail-swiper :topImages="topImages"></detail-swiper>
            </div>
          </div>

          <!--goodsBaseInfo-->
          <detail-base-info :goods="goods"></detail-base-info>

          <!--goodsDetailInfo-->
          <detail-shop-info :shop="shop"></detail-shop-info>

          <!--detailGoodsInfo-->
          <detail-goods-info :detailInfo="detailGoodsInfo" @imageLoaded="imageLoaded"/>

          <!--DetailGoodsParams-->
          <detail-goods-params :params="params" ref="params"/>

          <!--DetailComments-->
          <detail-comments :comments="comments" ref="comments" :showComment="showComment"/>

          <!--GoodsList-->
          <goods-list :goods="recommends" ref="recommends"/>
        </scroll>
      </div>

    <!--BackTop-->
    <back-top @click.native="backUpClick"
              v-show="showBackTop"/>

    <!--DetailBottomBar-->
    <detail-bottom-bar @addCart="addCart"/>
  </div>
</template>

<script>
  /*child components*/
  import DetailNavBar from "./childComponents/DetailNavBar";
  import DetailSwiper from "./childComponents/DetailSwiper";
  import DetailBaseInfo from "./childComponents/DetailBaseInfo";
  import DetailShopInfo from "./childComponents/DetailShopInfo";
  import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
  import DetailGoodsParams from "./childComponents/DetailGoodsParams";
  import DetailComments from "./childComponents/DetailComments";
  import DetailBottomBar from "./childComponents/DetailBottomBar";

  /*network*/
  import {getDetail,Goods,Shop,Params,Comments,getRecommend} from 'network/detail'

  /*general components*/
  import scroll from 'components/common/scroll/Scroll2'
  import GoodsList from "components/content/goodsList/GoodsList";
  import BackTop from "components/content/backTop/BackTop";

  /*minxins*/
  import {goodsListDebounce,backTop} from 'common/mixins'

  /*utils*/
  import {debounce} from "../../common/utils";

  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      scroll,
      DetailGoodsInfo,
      DetailGoodsParams,
      DetailComments,
      GoodsList,
      BackTop,
      DetailBottomBar,
    },
    mixins:[
      goodsListDebounce,
      backTop,
    ],
    data(){
      return{
        id: null,
        topImages: [],
        goods:{},
        shop:{},
        detailGoodsInfo:{},
        params:{},
        showComment:true,
        comments:{},
        recommends:[],
        navY:[],
        getNavY:null,
        imageLoad:null,
        tabChange:false,
      }
    },
    created() {
      //从路由中获取货物id
      this.id = this.$route.query.id
      /*
      * 使用id从服务器获取数据
      * */
      getDetail(this.id).then((res)=>{
        const data = res.result
        //console.log(data);
        /*
        *轮播图
        * */
        this.topImages = data.itemInfo.topImages

        /*
        * 货物页面
        * */
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

        /*
        * 商家简介
        * */
        this.shop = new Shop(data.shopInfo)

        /*
        * 物品详情
        * */
        this.detailGoodsInfo = {
          detailInfo:data.detailInfo.desc,
          detailImage:data.detailInfo.detailImage[0].list
        }

        /*
        * 物品参数
        * */
        this.params = new Params(data.itemParams)

        /*
        * 评论
        * */
        if(data.rate.list){
          this.comments = new Comments(data.rate.list)
        }else {
          this.showComment = false
        }

        /*
        * 商品推荐
        * */
        getRecommend().then((res)=>{
          //console.log(res.data.list);
          this.recommends = res.data.list
        })

        /*debounce
        * 当图片加载完成进入debounce，因为每一张图片的加载完成都会调用一次imageLoad方法，
        * 所以这里使用debounce
        * */
        //高度赋值debounce
        this.getNavY = debounce(()=>{
          this.navY = []
          this.navY.push(0)
          this.navY.push(this.$refs.params.$el.offsetTop)
          this.navY.push(this.$refs.comments.$el.offsetTop)
          this.navY.push(this.$refs.recommends.$el.offsetTop)
          this.navY.push(this.$refs.recommends.$el.offsetTop+10000)
          this.tabChange = true
          //console.log(this.navY);
        },20)
        //图片加载完成滚动刷新debounce
        this.imageLoad = debounce(()=>{
          this.$refs.scroll.refresh()
        })
      })
    },
    methods:{
      /*
      * 图片加载监听
      * */
      imageLoaded(){
        //图片加载完成后刷新scroll
        this.imageLoad();
        this.getNavY()
      },
      /*
      * 滚动监听
      * */
      getScrollPosition(position){
        //回到顶部按钮
        this.showBackTop = (-position.y) > 1000;
        //navBar随滚动变化
        for(let i = 0; i<this.navY.length-1; i++){
          let nowY = -position.y
          /*第一个条件防止赋值频繁*/
          if(this.currentIndex!==i && this.navY[i] < nowY && nowY <= this.navY[i+1]){
            this.$refs.navBar.currentIndex = i
          }
        }
      },
      /*
      * nav点击
      * */
      navClick(index){
        if(this.tabChange){
          this.$refs.scroll.scrollTo(0,-this.navY[index]-1,0)
          this.$refs.navBar.currentIndex = index
        }else {
          setTimeout(()=>{
            this.$refs.scroll.scrollTo(0,-this.navY[index],500)
          },500)
        }
      },
      addCart(){
        let addedGoods = {};
        /*加入购物车数据*/
        addedGoods.topImages = this.topImages[0];
        addedGoods.title = this.goods.title;
        addedGoods.desc = this.goods.desc;
        addedGoods.price = this.goods.lowNowPrice;
        addedGoods.id = this.id;
        addedGoods.count = 1;
        //console.log(this.$store.state);
        //this.$store.commit('addCart',addedGoods)
        this.$store.dispatch('addCart',addedGoods)
      }
    },

    /*
    * 当离开detail时，停止对公共组件goodsItem中imageLoaded的监听
    * */
    destroyed() {
      this.$bus.$off('imageLoaded',this.goodsImageListener)
    }
  }
</script>

<style scoped>
  #main-wrap{
    background-color: white;
    position: relative;
    z-index: 101;
    font-weight: 200;
  }
  .nav{
    position: relative;
    z-index: 102;
    background-color: white;
  }
  .scroll{
    height: calc(100vh - 100px);
  }
</style>
