<template>
  <div>
    <div class="container">
      <!--NavBar-->
      <category-nav-bar/>

      <div class="row">
        <!--TabMenu-->
        <category-tab-menu class="col-3 p-0"
                           :tabInfo="tabInfo"
                           @tabClick="tabClick"/>
        <category-tab-detail class="col-9 p-0"
                             :detail-tab-info="detailTabInfo"
                             :goods="goods"
                             :currentTabIndex="currentTabIndex"/>
      </div>



    </div>
  </div>
</template>

<script>
  import CategoryNavBar from "./categoryChildComponents/CategoryNavBar";
  import CategoryTabMenu from "./categoryChildComponents/CategoryTabMenu";
  import CategoryTabDetail from "./categoryChildComponents/CategoryTabDetail";


  /*network*/
  import {getCategory,getDetailCategory,getMiniWallkeyGoods} from 'network/category'

  export default{
    name: "Category",
    components:{
      CategoryNavBar,
      CategoryTabMenu,
      CategoryTabDetail,
    },
    data(){
      return{
        tabInfo:null,
        currentTabIndex:0,
        categoryData:{},
        maitKey:[],
        miniWallkey:[],
        detailTabInfo:null,
        goods:{
          'pop':{list:[]},
          'new':{list:[]},
          'sell':{list:[]},
        },
      }
    },
    methods:{
      _getCategory(){
        getCategory().then((res)=>{
          const data = res.data.category
          //console.log(data);

          //1. 获取tabList
          this.tabInfo = data.list;
          /*
          * 2.获取maitkey&miniWallkey
          * */
          for (let item of this.tabInfo){
            this.maitKey.push(item.maitKey);
            this.miniWallkey.push(item.miniWallkey)
          }
          /*
          * 3.获取初始tab上部分展示的内容
          * */
          getDetailCategory(this.maitKey[this.currentTabIndex]).then((res)=>{
            this.detailTabInfo = res.data.list
          });
          /*
          * 4.获取初始下部分miniWallkey商品
          * */
          for (let i of ['pop','new','sell']){
            for(let key of this.miniWallkey){
              this._getDetailCategory(i,key)
            }
          }
        })
      },
      //tab点击事件
      tabClick(index){
        this.currentTabIndex = index;
        getDetailCategory(this.maitKey[index]).then((res)=>{
          this.detailTabInfo = res.data.list
        });
      },
      //获取goodsListItem
      _getDetailCategory(type,key){
          getMiniWallkeyGoods(type,key).then((res)=>{
            this.goods[type].list.push(res)
        })
      },
    },
    created() {
      //请求分类数据
     this._getCategory();

     //请求右下分类商品
     for (let i of this.miniWallkey){
       if (i===this.currentTabIndex){
         this._getDetailCategory('pop',i);
         this._getDetailCategory('sell',i);
         this._getDetailCategory('new',i);
         break
       }
     }
    },
  }
</script>

<style scoped>
.wrapper{
  height: 200px;
  background-color: red;
  overflow: hidden;
}
</style>
