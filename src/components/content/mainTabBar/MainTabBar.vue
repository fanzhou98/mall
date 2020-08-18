<template>
  <div>
    <TabBar>
      <!--首页-->
      <TabBarItem path="/home" class="col" >
        <div slot="item-icon" >
          <i class="fa fa-home fa-lg" ></i>
        </div>
        <div class="nav-text" slot="item-name">Home</div>
      </TabBarItem>

      <!--分类-->
      <TabBarItem path="/categories" class="col">
        <div slot="item-icon">
          <i class="fa fa-shopping-bag fa-lg" ></i>
        </div>
        <div class="nav-text" slot="item-name">Categories</div>
      </TabBarItem>

      <!--购物车-->
      <TabBarItem path="/cart" class="col">
        <div slot="item-icon">
          <i class="fa fa-shopping-cart fa-lg"></i>
        </div>
        <div class="nav-text" slot="item-name">Cart</div>
      </TabBarItem>

      <!--我的-->
      <TabBarItem path="/profile" class="col">
        <div slot="item-icon">
          <i class="fa fa-user fa-lg"></i>
        </div>
        <div class="nav-text" slot="item-name">Me</div>
      </TabBarItem>
    </TabBar>
  </div>

</template>

<script>
  import TabBar from "components/common/tabbar/TabBar"
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    },
  }
</script>

<style scoped>
  .nav-text{
    font-family:  Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 10px;
  }
</style>
