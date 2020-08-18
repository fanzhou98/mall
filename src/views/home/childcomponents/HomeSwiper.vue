<template>
<!--  <div>
    &lt;!&ndash;方法一：直接使用，详情见Typora&ndash;&gt;
    &lt;!&ndash;<swiper :options="swiperOption" :not-next-tick='notNextTick'>
      <swiper-slide v-for="item in banners">
        <a :href="item.link"><img :src="item.image" alt="" class="swiper-item"></a>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>&ndash;&gt;

    &lt;!&ndash;方法二&ndash;&gt;
    <Swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link"><img :src="item.image" alt="" class="swiper-item"></a>
      </swiper-item>
    </Swiper>
  </div>-->

  <div>
    <swiper-main :autoPlay="3000">
      <swiper-item v-for="item in banners">
        <a :href="item.link"><img :src="item.image" alt="" class="swiper-item" @load="swiperImageLoaded"></a>
      </swiper-item>
    </swiper-main>
  </div>
</template>

<script>
  import SwiperMain from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";

  export default {
    name: "HomeSwiper",
    components:{
      SwiperMain,
      SwiperItem,
    },
    data(){
      return{
        imageLoaded: false,
      }
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      swiperImageLoaded(){
        if(!this.imageLoaded){
          this.$emit('swiperImageLoaded')
          this.imageLoaded = true
        }
      }
    },
  }
</script>

<style scoped>
  .swiper-item{
    width:100%;
    height: 150px;
  }
</style>
