<template>
  <div style="background-color: white">
    <div class="row">
      <div class="shadow-sm col text-center d-flex align-items-center justify-content-center" style="height: 60px;">
        <span style="font-size: 30px; font-weight:300">尺码详情</span>
      </div>
    </div>
    <div class="row shadow-sm  " v-for="item in this.params.tables" >
      <div class="col p-2 text-center text-muted d-flex align-items-center justify-content-center" v-for="items in item" >
        {{items}}
      </div>
    </div>
    <div class="row">
      <div class="shadow-sm col text-center d-flex align-items-center justify-content-center" style="height: 60px;">
        <span style="font-size: 30px; font-weight:300">其他信息</span>
      </div>
    </div>
    <div class="row mt-2 text-muted shadow-sm p-1" v-for="item in this.params.set" >
      <!--key-->
      <div class="col-3 p-0 d-flex align-content-center justify-content-center">
        <span class="d-flex align-items-center ">
          {{item.key}}
        </span>
      <!--value-->
      </div>
      <div class="col-9 p-0 d-flex align-items-center text-center">
        <span class="d-flex align-items-center ml-2" id="paramValue">
          {{item.value}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsParams",
    props:{
      params:{
        type:Object,
        default(){
          return {}
        }
      }
    },
  }
</script>

<style scoped>
#paramValue{
  color:#FC427B;
}
</style>
