<template>
  <!--此组件需搭配BootStrap使用，使用时需传入col的参数-->
  <div>
      <div :class="cLeftColNum"><slot name="left" ></slot></div>
      <div :class="cMiddleColNum"><slot name="middle"></slot></div>
      <div :class="cRightColNum"><slot name="right" ></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props:{
      leftColNum:{
        type:Number,
        default(){
          return 2
        }
      },
      middleColNum:{
        type:Number,
        default() {
          return 8
        }
      },
      rightColNum:{
        type:Number,
        default(){
          return 2
        }
      },

    },
    computed:{
      cLeftColNum(){
        return 'col-'+this.leftColNum
      },
      cMiddleColNum(){
        return 'col-'+this.middleColNum
      },
      cRightColNum(){
        return 'col-'+this.rightColNum
      }
    }
  }
</script>

<style scoped>

</style>
