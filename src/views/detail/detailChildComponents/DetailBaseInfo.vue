<template>
  <div>
    <!--title-->
    <div class="row">
      <div class="col p-2 title">
        {{this.goods.title}}
      </div>
    </div>
    <!--price-->
    <div class="row">
      <div class="col d-flex">
        <b class="nowPice">{{'￥'+this.goods.lowNowPrice}}</b>
        <s class="text-muted pt-3">{{this.goods.oldPrice}}</s>
        <div class="tag" v-show="this.goods.discountDesc">
          <b class="border-danger" >{{this.goods.discountDesc}}</b>
        </div>
      </div>
    </div>
    <!--content-->
    <div class="row d-flex justify-content-between align-items-center text-center mt-2 text-muted border-bottom p-2" >
      <div class="col" v-for="item in this.goods.columns">
        {{item}}
      </div>
    </div>
    <!--services-->
    <div class="row shadow-sm">
      <div class="col-6 p-1 mt-2 d-flex justify-content-around" v-for="item in this.goods.services" id="services">
        <div class="d-flex align-items-center ">
          <img :src="item.icon" alt="" class="service-image" >
          <span class="ml-1">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
        title:'',
      }
    },
    mounted() {
      //描述
      this.title = this.goods.title
      //console.log(this.goods);
    }
  }
</script>

<style scoped>
  .title{
    font-size: 22px;
  }
  .nowPice{
    color: #FC427B;
    font-size: 30px;
  }
  .tag{
    height: 30px;
    width: 80px;
    margin: auto;
    margin-left: 10px;
    /*margin-top: 8px;
    margin-left: 10px;*/
    background-color: #FC427B;
    color: white;
    font-size:18px;
    border: white;
    border-radius: 10px;
    text-align: center;
  }
  #services{
    font-size: 15px;
  }
  .service-image{
    width: 18px;
  }
</style>
