<template>
  <div>
    <nav-bar class="row d-flex justify-content-center align-content-center shadow-sm" id="nav-wrap">
      <div slot="middle" :middleColNum="12" class="p-0 d-flex justify-content-center align-items-center">
        <div class="text-center text">
<!--          购物车({{this.$store.state.goodsItem.length}})-->
          购物车({{cartLength}})
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
        cartLength:'cartLength'
      }),
    }
  }
</script>

<style scoped>
  #nav-wrap{
    height: 45px;
    position: relative;
    background-color: var(--color-tint);
    z-index: 120;
  }
  .text{
    font-size: 20px;
    color: floralwhite;
  }
</style>
