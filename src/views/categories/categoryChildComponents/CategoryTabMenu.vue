<template>
  <div>
    <scroll class="main-content"
            :probeType="3"
            :pull-up-load="true"
            :listenScroll="true"
            ref="scroll">
      <div class="wrap d-flex justify-content-center align-items-center"
           v-for="(item,index) in tabInfo"
           @click="tabClick(index)"
           :class="{active:nowIndex===index,
                    activeTop:nowIndex-1===index,
                    activeBtm:nowIndex+1===index}">

        <div>{{item.title}}</div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import scroll from "components/common/scroll/Scroll";
  export default {
    name: "CategoryTanMenu",
    components:{
      scroll
    },
    props:{
      tabInfo:{
        type:Array,
        default:[]
      }
    },
    data(){
      return{
        nowIndex:0
      }
    },
    methods:{
      tabClick(index){
        this.nowIndex = index;
        this.$emit('tabClick',index)
        //console.log(this.nowIndex);
      }
    }
  }
</script>

<style scoped>
  .main-content{
    position: relative;
    width: 100%;
    height: calc(100vh - 49px - 45px);
  }
  .wrap{
    height: 40px;
    text-align: center;
    font-size: 15px;
    /*margin-bottom: 5px;*/
    border-bottom: 1px solid whitesmoke;
    background-color: #ffb8b8;
    font-weight: 200;
  }
  .active{
    background-color: #ffffff;
    border:none;
    transition: 50ms;
  }
  .activeTop{
    border-radius:0 0 10px 0;
  }
  .activeBtm{
    border-radius:0 10px 0 0;
  }
</style>
