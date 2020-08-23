<template>
  <div>
    <nav-bar :middleColNum="12" class="row nav-wrap d-flex justify-content-center align-items-center shadow-sm">
      <div slot="middle" class="p-0 text-center">
        商品分类
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "CategoryNavBar",
    components:{
      NavBar
    },
  }
</script>

<style scoped>
  .nav-wrap{
    background-color: #ffcccc;
    height: 45px;
    position: relative;
    font-size: 20px;
    color: floralwhite;
    z-index: 999;
  }
</style>
