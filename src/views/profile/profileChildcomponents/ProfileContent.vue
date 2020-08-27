<template>
  <div>
    <scroll class="main-content">
      <div class="content row">
        <div class="col">
          <!--Avatar-->
          <div class="row">
            <div class="avatar-wrap col-5 p-0 d-flex justify-content-center align-items-center">
              <div>
                <svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-person-circle text-muted " fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                  <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                </svg>
              </div>
              <div class="avatar-text ml-3">
                未登录
                <div class="text-muted" style="font-size: 13px">登录/注册</div>
              </div>
            </div>
          </div>
          <!--Content-->
          <div class="row m-1 shadow-sm">
            <div class="col">
              <div class="row favour border-bottom">
                <div class="col d-flex align-items-center justify-content-between border-right">
                  <div>
                    收藏夹
                  </div>
                  <div >
                    >
                  </div>
                </div>
                <div class="col d-flex align-items-center justify-content-between">
                  <div>
                    浏览历史
                  </div>
                  <div>
                    >
                  </div>
                </div>
              </div>
              <div class="row order">
                <div class="col d-flex align-items-center justify-content-around " v-for="item in ['订单','优惠券','补贴']">
                  <div>
                    {{item}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../../../components/common/scroll/Scroll2";
  export default {
    name: "ProfileContent",
    components:{
      Scroll
    },
  }
</script>

<style scoped>
  .main-content{
    height: calc(100vh - 45px - 49px);
  }
  .content{
    /*height: 20000px;*/
  }
  .avatar-wrap{
    margin:10px 0 10px 10px;
    height: 100%;
    width: 100%;
  }
  .avatar-text{
    font-size: 22px;
    font-weight: 300;
  }
  .favour{
    height: 60px;
    background-color: white;
    font-size: 20px;
    font-weight: 400;
  }
  .order{
    height: 50px;
    background-color: white;
    font-size: 15px;
    font-weight: 300;
  }
</style>
