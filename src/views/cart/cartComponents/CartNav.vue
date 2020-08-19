<template>
  <div>
    <nav-bar class="row align-content-center" id="nav-wrap">
      <div slot="middle" :middleColNum="12" class="p-0 d-flex justify-content-center align-content-center">
        <div class="text-center text">
<!--          购物车({{this.$store.state.goodsItem.length}})-->
          购物车({{length}})
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  import { mapGetters } from 'vuex'
  export default {
    name: "CartNav",
    components:{
      NavBar
    },
    computed:{
      ...mapGetters({
        length:cartLength
      })
    }
  }
</script>

<style scoped>
  #nav-wrap{
    height: 45px;
    position: relative;
    background-color: var(--color-tint);
  }
  .text{
    font-size: 20px;
    color: floralwhite;
  }
</style>
