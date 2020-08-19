<template>
  <div>
    <div class="container">
      <cart-nav/>
    </div>
  </div>
</template>

<script>
  import CartNav from "./cartComponents/CartNav";
  export default {
    name: "Cart",
    components:{
      CartNav
    }
  }
</script>

<style scoped>

</style>
