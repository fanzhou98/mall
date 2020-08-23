<template>
<div>
  <div class="col d-block text-center" v-for="item in recommands">
    <div class="mb-1" id="image">
      <a :href="item.link">
        <img v-lazy="item.image" alt="" class="recommand-image">
      </a>
    </div>
    <div>{{item.title}}</div>
  </div>
</div>
</template>

<script>
  export default {
    name: "HomeRecommand",
    props:{
      recommands:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommand-image{
    width: 65px;
    height: 65px;
  }
  .col{
    padding: 0;
    font-size: 12px;
  }
</style>
