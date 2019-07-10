<template>
  <div class="result">
    <div class="nav">
      <div :class="{'selected':tab === 1}" @click="changTab(1)">全部</div>
      <div :class="{'selected':tab === 2}" @click="changTab(2)" default="">待付款</div>
      <div :class="{'selected':tab === 3}" @click="changTab(3)">待发货</div>
      <div :class="{'selected':tab === 4}" @click="changTab(4)">待收货</div>
    </div>
    <div class="container">
      <div v-if="tab===1">全部</div>
      <div v-else-if="tab===2">待付款</div>
      <div v-else-if="tab===3">待发货</div> 
      <div v-else>待收货</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
     return{
       tab: 4
     }
  },
  created () {
  },
  methods: {
     changTab(index) {
        this.tab = index;
      }
  }
}
</script>
<style lang='scss'>
.result {
    width: 710rpx;
  .nav {
      width:100%;
      height: 40px;
      color: #333;
      background:#fff;
      display: flex;
      justify-content:space-around;
      font-size:16px;
      line-height:40px;
      .selected {
        border-bottom:3px solid #33d6c5;
        height:100%;
    }
  }
}
page{
    width:100%;
    height:100%;
    background:#f3f7f7;
}
// .container img{
//     width:120px;
//     height:110px;
//     position:absolute;
//     top:240px;
//     left:35%;
// }
// .container span{
//     position:absolute;
//     top:375px;
//     left:30%;
//     font-size:16px;
//     color:#999;
// }
</style>
