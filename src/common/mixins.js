import {debounce} from './utils'

export const goodsListDebounce = {
  data(){
    return{
      goodsImageListener:null,
    }
  },
  mounted() {
    /*
    * debounce
    * 监听GoodsItem中的图片是否加载完成，完成后刷新Scroll，防止scroll在图片加载完成之前锁死内容的height
    * */
    //这里refresh必须拿出来，原因未知
    const refresh = debounce(this.$refs.scroll.imageLoaded,20);
    this.goodsImageListener = ()=>{
      refresh()
    };
    //$bus用于非父子组件间事件传递（参数1:传递事件名,参数2:接收事件后执行的函数）
    this.$bus.$on('imageLoaded',this.goodsImageListener)
  },
}

export const backTop = {
  methods:{
    //回到顶部
    backUpClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    }
  },
  data() {
    return {
      showBackTop:false,
    }
  }
}
