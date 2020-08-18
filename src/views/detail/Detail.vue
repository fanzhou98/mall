<template>
  <div>
      <div class="container" id="main-wrap">
        <detail-nav-bar class="nav shadow-sm row" @navClick="navClick"></detail-nav-bar>
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

        /*debounce*/
        this.getNavY = debounce(()=>{
          this.navY = []
          // console.log(this.$refs.recommends.$el);
          this.navY.push(0)
          this.navY.push(this.$refs.params.$el.offsetTop)
          this.navY.push(this.$refs.comments.$el.offsetTop)
          this.navY.push(this.$refs.recommends.$el.offsetTop)
          console.log(this.navY);
        })

        this.imageLoad = debounce(()=>{
          this.$refs.scroll.refresh()
        })
      })

    },
    methods:{
      //图片加载完成后刷新scroll
      imageLoaded(){
        this.imageLoad()
        //this.$refs.scroll.refresh()
        this.getNavY()
      },
      //决定回到顶部是否显示的高度
      getScrollPosition(position){
        this.showBackTop = (-position.y) > 1000;
        //console.log(position.y);
      },
      //nav点击
      navClick(index){
        this.$refs.scroll.refresh()
        this.$refs.scroll.scrollTo(0,-this.navY[index])
      }
    },
    /*
    * 当离开detail时，停止对公共组件goosItem中imageLoaded的监听
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
    height: 100vh;
    font-weight: 200;
  }
  .nav{
    position: relative;
    z-index: 102;
    background-color: white;
  }
  .scroll{
    height: calc(100% - 45px);
  }
</style>
