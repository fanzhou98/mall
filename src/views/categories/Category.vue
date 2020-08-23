<template>
  <div>
    <div class="container">
      <!--NavBar-->
      <category-nav-bar/>

      <div class="row">
        <!--TabMenu-->
        <category-tab-menu class="col-3 p-0" :tabInfo="tabInfo"/>

      </div>
    </div>
  </div>
</template>

<script>
  import CategoryNavBar from "./categoryChildComponents/CategoryNavBar";
  import CategoryTabMenu from "./categoryChildComponents/CategoryTabMenu";

  /*network*/
  import {getCategory,getTabInfo} from 'network/category'

  export default{
    name: "Category",
    components:{
      CategoryNavBar,
      CategoryTabMenu
    },
    data(){
      return{
        tabInfo:null
      }
    },
    methods:{

    },
    created() {
      /*获取数据*/
      getCategory().then((res)=>{
        const data = res.data.category
        console.log(data);
        this.tabInfo = data.list
      })
    }
  }
</script>

<style scoped>
.wrapper{
  height: 200px;
  background-color: red;
  overflow: hidden;
}
</style>
