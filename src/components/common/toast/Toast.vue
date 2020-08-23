<template>
<div>
  <div class="text" v-show='isShow'>
    <div class="text-center p-3 content" >{{message}}</div>
  </div>
</div>
</template>

<script>
  export default {
    name: "Toast",
    data(){
      return{
        message:'',
        isShow: false
      }
    },
    methods:{
      toast(message,delay=2000){
        this.isShow = true;
        this.message = message;
        setTimeout(()=>{
          this.isShow = false;
          this.message = ''
        },delay)
      }
    }
  }
</script>

<style scoped>
  .head{
    width: 100%;
    height: 40px;
    border-radius: 20px;
    background-color: whitesmoke;
  }
  .content{

  }
  .text{
    width: 300px;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
    transform: translate(-50%,-50%);
    background-color: var(--color-tint);
    font-size: 20px;
    font-weight: 200;
    border-radius: 20px;
  }
</style>
