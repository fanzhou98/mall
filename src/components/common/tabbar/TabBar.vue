<template>
  <div class="container shadow d-flex justify-content-center"  id="nav">
    <div class="row text-center  align-items-center" style="width: 100%">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
  }
</script>

<style scoped>
  #nav{
    height: 49px;
    background-color: #f1f2f6;
    text-decoration: none;
    width: 100vw;
    position: relative;
    z-index: 111;
  }
</style>
