<template>
<div>
  <div class="col" v-for="(item,index) in title">
    <div class="text-wrap"  @click="tabClick(index)">
      <span :class="{active:currentIndex===index}" class="content">{{item}}</span>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return{
        currentIndex: 0,
      }
    },
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      },
    },
    methods:{
      tabClick(index){
        this.currentIndex = index;
        this.$emit('homeTabClick',index)
      }
    },
  }

</script>

<style scoped>
.col{
  text-align: center;
}
.content{
  padding: 6px;
  font-size: 16px;
  line-height: 50px;
  border-bottom: 1px solid black;
}
.active{
  color: #ffcccc;
    border-color: #ffcccc;
}
</style>
