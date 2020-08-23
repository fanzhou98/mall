<template>
  <div>
    <nav-bar class=" d-flex align-items-center justify-content-between " id="nav" :middleColNum=10 :leftColNum=2>
      <!--backTick-->
      <div slot="left" id="img" @click="backClick">
        <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
          <path fill-rule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </div>
      <!--content-->
      <div slot="middle" class="d-flex justify-content-between align-items-center p-3">
        <div v-for="(item,index) in title" >
          <div class="p-1" id="title" @click="titleClick(index)" >
            <span :class="{active:index===currentIndex}">{{item}}</span>
          </div>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components:{
      NavBar
    },
    data(){
      return{
        middleColNum:10,
        title:['商品','参数','评论','推荐'],
        currentIndex:0,
      }
    },
    methods:{
      titleClick(index){
        //this.currentIndex = index
        this.$emit('navClick',index)
      },
      backClick(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  #nav{
    width: 100%;
    height: 50px;
  }
  #img{
    color:#FC427B;
    padding: 0;
  }
  .active{
    color:#FC427B ;
  }
</style>
