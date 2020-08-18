<template>
  <div class="row">
    <goods-item :goodsItem="item" v-for="item in goods" class="col-6 p-0 mt-2 d-block align-items-center" ></goods-item>
  </div>
</template>

<script>
  import GoodsItem from "./GoodsItem";
  export default {
    name: "GoodsList",
    components:{
      GoodsItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
