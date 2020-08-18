<template>
  <div>
    <div @click="itemClick">
      <div :class="{'actived':isActive}" class="item-wrap"><slot name="item-icon"></slot></div>
      <div :class="{'actived':isActive}" class="item-wrap"><slot name="item-name"></slot></div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "TabBarItem",
    computed:{
      isActive(){
       return this.$route.path === this.path
      }
    },
    props:{
      path:String
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .item-wrap{
    color: #57606f
  }
  .actived{
    color: #ffb8b8;
  }
</style>
