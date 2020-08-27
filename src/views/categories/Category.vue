<template>
  <div>
    <div class="container">
      <!--NavBar-->
      <category-nav-bar/>

      <div class="row" style="background-color: white">
        <!--TabMenu-->
        <category-tab-menu class="col-3 p-0"
                           :tabInfo="tabInfo"
                           @tabClick="tabClick"/>

        <!--8.26卡在这了，给子组件传值-->
        <category-tab-detail class="col-9 p-0"
                             :detail-tab-info="this.list"
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
        tabInfo:[],
        currentTabIndex:0,
        categoryData:{},
        maitKey:[],
        miniWallkey:[],
        goods:{
          'pop':{list:[]},
          'new':{list:[]},
          'sell':{list:[]},
        },
        list:{
          list:[],
          'pop':[],
          'new':[],
          'sell':[],
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
          for (let i = 0;i < this.tabInfo.length;i++){
            getDetailCategory(this.tabInfo[i].maitKey).then((res)=>{
              this.list.list.push(res.data.list)
            })
          }
          /*
         * 4.获取右下miniWallkey商品
         * */
          for(let i = 0; i < this.tabInfo.length; i++){
            for(let k of ['pop','new','sell']){
              getMiniWallkeyGoods(k,this.tabInfo[i].miniWallkey).then((res)=>{
                this.list[k].push(res)
              })
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
