<template>
<div>
  <nav-bar :middleColNum="12" class="wrap d-flex justify-content-center align-items-center" >
    <div slot="middle" class="text-center">
      我的
    </div>
  </nav-bar>
</div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "ProfileNavBar",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
  .wrap{
    position: relative;
    background-color: #ffcccc;
    height: 45px;
    z-index: 999;
    font-size: 20px;
    color: floralwhite;
  }
</style>
