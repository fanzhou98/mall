<template>
  <div class="shadow-sm ">
    <!--text-->
    <div class="row mt-2">
      <div class="col">
        <div class="mb-3 text-muted">---------------*</div>
        <div style="font-size: 20px; font-weight: 200" class="">{{detailInfo.detailInfo}}</div>
        <div class="text-right text-muted">*----------------</div>
      </div>
    </div>
    <!--images-->
    <div class="row  mb-2" v-for="item in detailInfo.detailImage">
      <div class="col d-flex justify-content-center p-0">
        <img :src="item"  id="image" @load="imageLoaded">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
        count:0,
        imageLength:0,
      }
    },
    methods:{
      imageLoaded(){
        this.imageLength = this.detailInfo.detailImage.length
        if(++this.count === this.imageLength){
          this.$emit('imageLoaded')
        }
      }
    },

  }
</script>

<style scoped>
#image{
  width: 100%;
  height: 100%;
}
</style>
