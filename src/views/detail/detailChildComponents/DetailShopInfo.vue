<template>
  <div>
    <!--shopImage & title-->
    <div class="row mt-3">
      <div class="col">
        <img :src="shop.shopLogo" alt="" style="width: 50px; border-radius: 25px" >
        <span class="ml-2">{{shop.name}}</span>
      </div>
    </div>
    <!--shopInfo-->
    <div class="row mt-3">
      <div class="col-3 d-flex align-items-center justify-content-center">
        <div>
          <div class="row d-flex justify-content-center">
            {{(shop.sells / 10000).toFixed(2)}}万
          </div>
          <div class="row d-flex justify-content-center">
            销量
          </div>
        </div>
      </div>
      <div class="col-3 d-flex align-items-center justify-content-center border-secondary" id="split">
        <div>
          <div class="row d-flex justify-content-center">
            {{shop.goodsCount}}
          </div>
          <div class="row d-flex justify-content-center">
            全部宝贝
          </div>
        </div>
      </div>
      <div class="col-6 score-wrap">
        <div class="row d-flex justify-content-between" v-for="item in shop.score">
          <div>
            {{item.name}}
          </div>
          <div class="ml-3">
           {{item.score}}
          </div>
          <div class="ml-3">
            <span v-if="item.isBetter === true" class="text-danger">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 8.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z"/>
</svg>
            </span>
            <span v-else class="text-success">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"/>
                </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!--ShopBtn-->
    <div class="row mt-4 mb-4 btn-wrap  shadow-sm">
      <div class="col">
        <div class="d-flex justify-content-center">
          <a :href="shop.shopUrl">
            <button class="btn" style="width: 200px;background-color: #FC427B;color: whitesmoke">进店逛逛</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.score-wrap{
  padding-left: 30px;
  padding-right: 30px;
}
  #split{
    border-right: 1px solid;
  }
  .btn-wrap{
    height: 60px;
  }
</style>
