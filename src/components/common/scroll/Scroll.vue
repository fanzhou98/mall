<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
      return {
        scroll:null,
      }
    },
    props:{
      //滚动监听
      probeType:{
        type:Number,
        default(){
          return 0
        }
      },
      pullUpLoad:{
        type: Boolean,
        default() {
          return false
        }
      }
    },
    mounted() {
      /*原始*/
      /*//创建实例
        this.scroll = new BScroll(this.$refs.wrapper,{
          //默认为false，会导致scroll中的div如果绑定过点击方法无法被点击
          click:true,
          //监听滚动类型
          probeType: this.probeType,
          //滚动到底部
          pullUpLoad: this.pullUpLoad,
        });*/

        // 保证在DOM渲染完毕后初始化better-scroll
        setTimeout(() => {
          this._initScroll()
        }, 20)


   /*     /!*
        * 滚动监听事件
        * *!/
        //滚动监听
        if(this.probeType===2 || this.probeType === 3){
          this.scroll.on('scroll',(position)=>{
            this.$emit('getScrollPosition',position)
          });
        }
        //上拉加载更多，监听滚动到底部事件
        if(this.pullUpLoad){
          this.scroll.on('pullingUp',()=>{
            this.$emit('pullUp')
          })
        }*/
    },
    methods:{
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        // better-scroll的初始化
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: true,
        })

        if(this.probeType===2 || this.probeType === 3){
          this.scroll.on('scroll',(position)=>{
            this.$emit('getScrollPosition',position)
          });
        }
        //上拉加载更多，监听滚动到底部事件
        if(this.pullUpLoad){
          this.scroll.on('pullingUp',()=>{
            this.$emit('pullUp')
          })
        }
      },





      /*原来的*/

      //回到顶部，时间单位为ms
      /*scrollTo(x,y,time = 500){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },*/
      //完成滚动，scroll默认只完成一次上拉到底部
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
        this.scroll.refresh()
      },
      //图片加载完成后刷新scroll，重新定义高度
      imageLoaded(){
        this.scroll && this.scroll.refresh()
      },
      refresh() {
        // 代理better-scroll的refresh方法
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        // 代理better-scroll的scrollTo方法
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
    },
  }
</script>


<!--<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    props: {
      /**
       * 1 滚动的时候会派发scroll事件，会截流。
       * 2 滚动的时候实时派发scroll事件，不会截流。
       * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
       */
      probeType: {
        type: Number,
        default: 1
      },
      /**
       * 点击列表是否派发click事件
       */
      click: {
        type: Boolean,
        default: true
      },
      /**
       * 是否开启横向滚动
       */
      scrollX: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发滚动事件
       */
      listenScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 列表的数据
       */
      data: {
        type: Array,
        default: null
      },
      /**
       * 是否派发滚动到底部的事件，用于上拉加载
       */
      pullUpLoad: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发顶部下拉的事件，用于下拉刷新
       */
      pulldown: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发列表滚动开始的事件
       */
      beforeScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 当数据更新后，刷新scroll的延时。
       */
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    mounted() {
      // 保证在DOM渲染完毕后初始化better-scroll
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        // better-scroll的初始化
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
          scrollX: this.scrollX
        })
        // 是否派发滚动事件
        if (this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            this.$emit('scroll', pos)
          })
        }

        // 是否派发滚动到底部事件，用于上拉加载
        if (this.pullUpLoad) {
          this.scroll.on('scrollEnd', () => {
            // 滚动到底部
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
              this.$emit('pullUp')
            }
          })
        }

        // 是否派发顶部下拉事件，用于下拉刷新
        if (this.pulldown) {
          this.scroll.on('touchend', (pos) => {
            // 下拉动作
            if (pos.y > 50) {
              this.$emit('pulldown')
            }
          })
        }

        // 是否派发列表滚动开始的事件
        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
      },
      disable() {
        // 代理better-scroll的disable方法
        this.scroll && this.scroll.disable()
      },
      enable() {
        // 代理better-scroll的enable方法
        this.scroll && this.scroll.enable()
      },
      refresh() {
        // 代理better-scroll的refresh方法
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        // 代理better-scroll的scrollTo方法
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        // 代理better-scroll的scrollToElement方法
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
    },
    watch: {
      // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
      data() {
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      }
    }
  }
</script>-->

<style scoped>
</style>
