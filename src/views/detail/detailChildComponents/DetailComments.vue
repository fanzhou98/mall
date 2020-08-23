<template>
  <div class="wrap">
    <div class="row">
      <div class="shadow col" style="height: 20px;"></div>
    </div>
    <div class="row head-wrap mt-4 shadow-sm">
      <div class="col d-flex align-items-center">
        <span style="font-weight: 400">用户评价</span>
      </div>
      <div class="col d-flex align-items-center justify-content-end">
        <button class="btn btn-info">更多</button>
      </div>
    </div>
    <div v-if="showComment">
      <!--用户头像&用户名-->
      <div class="row mt-3 d-flex">
        <div class="col d-flex">
          <div><img :src="this.comments.avatar" alt="" width="50px"></div>
          <div class="ml-2">{{this.comments.uname}}</div>
        </div>
      </div>

      <!--内容-->
      <div class="row mt-2 shadow-sm">
        <div class="col">
          <div style="font-weight: 300">
            {{this.comments.content}}
          </div>
          <div class="mt-1">
            {{this.comments.time | showDate}}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col" v-for="item in this.comments.image">
          <img :src="item" alt="">
        </div>
      </div>
    </div>

    <div v-else class="mt-4 text-center shadow-sm" style="height: 30px">
      暂时无评价
    </div>

</div>
</template>

<script>
  import {dateFormate} from 'common/utils'
  export default {
    name: "DetailComments",
    props:{
      comments:{
        type:Object,
        default(){
          return {}
        }
      },
      showComment:{
        type: Boolean,
        default() {
          return true;
        }
      }
    },
    data(){
      return{
        isShow:false
      }
    },
    mounted(){
      if(this.comments.uname){
        this.isShow = true
      }
    },
    filters:{
      showDate(value){
        /*将时间戳转化为date对象*/
        const date = new Date(value * 1000)

        /*格式化Date*/
        return dateFormate(date,'yyyy/MM/DD hh:mm:ss')
      }
    }
  }
</script>

<style scoped>
.head-wrap{
  height: 50px;
  border-radius: 10px;


}
</style>
