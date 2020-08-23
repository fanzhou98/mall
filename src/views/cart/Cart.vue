<template>
  <div>
    <div class="container ">
      <cart-nav/>
      <cart-item/>
      <cart-bottom-bar/>
    </div>
  </div>
</template>

<script>
  import CartNav from "./cartChildComponents/CartNav";
  import CartItem from "./cartChildComponents/CartItem";
  import CartBottomBar from "./cartChildComponents/CartBottomBar";

  export default {
    name: "Cart",
    components:{
      CartNav,
      CartItem,
      CartBottomBar
    }
  }
</script>

<style scoped>

</style>
