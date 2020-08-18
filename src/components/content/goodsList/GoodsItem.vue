<template>
  <div class="d-block" >
    <!--img-->
    <div class="p-1" @click="showDetail">
        <img :src='imgUrl' alt="" class="image shadow" @load="imageLoad" >
    </div>
    <!--text-->
    <div class="p-0 mt-1 ml-2 text-wrap">
      <p class="m-0">{{this.goodsItem.title}}</p>
      <div  class="d-flex align-items-center justify-content-between">
        <div>
          <i style="font-size: 16px">{{this.goodsItem.price}}￥</i>
        </div>
        <div class="ml-2" >
          <i class="fa fa-star-o fa-lg text-warning " style="font-size:16px">{{this.goodsItem.cfav}}</i>
        </div>
        <div class="mr-2">
          <i class="fa fa-cart-plus fa-2x text-secondary"  style="font-size:24px"></i>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: "GoodsItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      imgUrl(){
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods:{
      imageLoad(){
        this.$bus.$emit('imageLoaded')
      },
      showDetail(){
        this.$router.push(
            {
              path: '/detail',
              query:{
               id:this.goodsItem.iid
             }
            })
      }
    }
  }
</script>

<style scoped>
.image{
  width:100%;
  border-radius: 10px;
}
.text-wrap{
  font-size: 10px;
}
p{
  /*设置行高*/
  height: 16px;
  line-height: 16px;
  /*强制不换行*/
  white-space: nowrap;
  /*隐藏多余属性*/
  overflow: hidden;
  /*隐藏部分用省略号代替*/
  text-overflow:ellipsis;
}
</style>
