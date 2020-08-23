<template>
  <div>
    <swiper>
      <swiper-item v-for="item in topImages">
          <img :src="item" class="image" >
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";
  export default {
    name: "DetailSwiper",
    components:{
      swiper,
      SwiperItem,
    },
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.image{
  width: 100%;
  height: 400px;
}
</style>
